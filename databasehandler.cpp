#include "databasehandler.h"
#include <QNetworkRequest>
#include <QJsonDocument>
#include <QVariantMap>
#include <QDebug>

databasehandler::databasehandler(QObject *parent)
    : QObject{parent}
{
    pullInventory();
}


databasehandler::~databasehandler()
{
    m_networkManager->deleteLater();
}

void databasehandler::pullInventory()
{
    m_networkManager = new QNetworkAccessManager(this);
    m_networkReply = m_networkManager->get(QNetworkRequest( QUrl("https://foodpantry-38846-default-rtdb.firebaseio.com/products.json")));
    connect(m_networkReply, &QNetworkReply::readyRead, this, &databasehandler::updateJson);
}

void databasehandler::updateJson()
{
    QByteArray responseData = m_networkReply->readAll();
    QJsonDocument doc = QJsonDocument::fromJson(responseData);
    firebase = doc.object();
}


QJsonObject databasehandler::getJson()
{
    pullInventory();
    return firebase;
}

void databasehandler::networkReplyReadyRead()
{
    qDebug() << m_networkReply->readAll();
}

void databasehandler::postToServerInventory(QVariantMap product)
{
    m_networkManager = new QNetworkAccessManager(this);

    QJsonDocument jsonDoc = QJsonDocument::fromVariant(product);


    QNetworkRequest newProductRequest(QUrl("https://foodpantry-38846-default-rtdb.firebaseio.com/products.json"));

    newProductRequest.setHeader(QNetworkRequest::ContentTypeHeader, QString("application/json"));
    m_networkManager->post(newProductRequest, jsonDoc.toJson());
}

