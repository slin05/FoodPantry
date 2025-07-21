#include "databasehandler.h"
#include <QNetworkRequest>
#include <QJsonDocument>
#include <QVariantMap>
#include <QDebug>

databasehandler::databasehandler(QObject *parent)
    : QObject{parent}
{
    //example of getting data from the database directly
    //m_networkReply = m_networkManager->get(QNetworkRequest( QUrl("https://food-inventory-a7516-default-rtdb.firebaseio.com/inventory.json")));
    //connect(m_networkReply, &QNetworkReply::readyRead, this, &databasehandler::networkReplyReadyRead );

    QVariantMap newProduct;
    newProduct["name"] = "Apple";
    newProduct["quantity"] = "50";
}


databasehandler::~databasehandler()
{
    m_networkManager->deleteLater();
}

void databasehandler::networkReplyReadyRead()
{
    qDebug() << m_networkReply->readAll();
}


void databasehandler::postToServerInventory(QVariantMap product)
{
    m_networkManager = new QNetworkAccessManager(this);

    QJsonDocument jsonDoc = QJsonDocument::fromVariant(product);
    QNetworkRequest newProductRequest(QUrl("https://food-inventory-a7516-default-rtdb.firebaseio.com/inventory.json"));

    newProductRequest.setHeader(QNetworkRequest::ContentTypeHeader, QString("application/json"));
    m_networkManager->post(newProductRequest, jsonDoc.toJson());
}
