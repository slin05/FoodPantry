#include "databasehandler.h"
#include <QNetworkRequest>
#include <QJsonDocument>
#include <QVariantMap>
#include <QDebug>

databasehandler::databasehandler(QObject *parent)
    : QObject{parent}
{
    m_apiKey = "";
    pullInventory();
}


databasehandler::~databasehandler()
{
    m_networkManager->deleteLater();
}

void databasehandler::pullInventory()
{
    m_networkManager = new QNetworkAccessManager(this);
    m_networkReply = m_networkManager->get(QNetworkRequest( QUrl("https://foodpantry-38846-default-rtdb.firebaseio.com/inventory.json")));
    connect(m_networkReply, &QNetworkReply::readyRead, this, &databasehandler::updateJson);
}

void databasehandler::setAPIKey(const QString &apiKey)
{
    m_apiKey = apiKey;
}

void databasehandler::signUserUp(const QString &emailAddress, const QString &password)
{
    qDebug() << m_apiKey;
    QString signUpEndpoint = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + m_apiKey;

    QVariantMap variantPayload;
    variantPayload["email"] = emailAddress;
    variantPayload["password"] = password;
    variantPayload["returnSecureToken"] = true;

    QJsonDocument jsonPayload = QJsonDocument::fromVariant(variantPayload);

    performPOST(signUpEndpoint, jsonPayload);
}

void databasehandler::updateJson()
{
    QByteArray responseData = m_networkReply->readAll();
    QJsonDocument doc = QJsonDocument::fromJson(responseData);
    firebase = doc.object();
}

void databasehandler::performPOST(const QString &url, const QJsonDocument &payload)
{
    qDebug() << url;
    QNetworkRequest newRequest( (QUrl(url)) );
    newRequest.setHeader(QNetworkRequest::ContentTypeHeader, QString("application/json"));
    m_networkReply = m_networkManager->post(newRequest, payload.toJson());
    connect(m_networkReply, &QNetworkReply::readyRead, this, &databasehandler::networkReplyReadyRead);
}


QJsonObject databasehandler::getJson()
{
    pullInventory();
    return firebase;
}

void databasehandler::networkReplyReadyRead()
{
    qDebug() << m_networkReply->readAll();
    m_networkReply->deleteLater();
}

void databasehandler::postToServerInventory(QVariantMap product)
{
    m_networkManager = new QNetworkAccessManager(this);

    QJsonDocument jsonDoc = QJsonDocument::fromVariant(product);

    QNetworkRequest newProductRequest(QUrl("https://foodpantry-38846-default-rtdb.firebaseio.com/inventory.json"));

    newProductRequest.setHeader(QNetworkRequest::ContentTypeHeader, QString("application/json"));
    m_networkReply = m_networkManager->post(newProductRequest, jsonDoc.toJson());
    connect(m_networkReply, &QNetworkReply::readyRead, this, &databasehandler::networkReplyReadyRead);
}

void databasehandler::removeFromServerInventory(QString productId)
{
    m_networkManager = new QNetworkAccessManager(this);
    m_networkReply = m_networkManager->deleteResource(QNetworkRequest( QUrl("https://foodpantry-38846-default-rtdb.firebaseio.com/inventory/" + productId + ".json")));

    connect(m_networkReply, &QNetworkReply::readyRead, this, &databasehandler::updateJson);
}

