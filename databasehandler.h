#ifndef DATABASEHANDLER_H
#define DATABASEHANDLER_H

#include <QObject>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QJsonObject>

//Much of this code was taken from a tutorial made by MontyTheSoftwareEngineer.

class databasehandler : public QObject
{
    Q_OBJECT
public:
    explicit databasehandler(QObject *parent = nullptr);
    ~databasehandler();
    bool userSignedIn;

    void postToServerInventory(QVariantMap product);
    void removeFromServerInventory(QString productId);
    void pullInventory();
    void setAPIKey(const QString & apiKey);
    void signUserUp(const QString & emailAddress, const QString & password);
    void signUserIn(const QString & emailAddress, const QString & password);

    QJsonObject getJson();
public slots:
    void networkReplyReadyRead();
    void updateJson();

signals:

private:
    QNetworkAccessManager * m_networkManager;
    QNetworkReply * m_networkReply;

    QString inventoryDatabase;
    QString loginDatabase;
    QString m_apiKey;
    QString m_idToken;

    QJsonObject firebase;

    void getFromServerInventory();
    void performPOST(const QString &url, const QJsonDocument &payload);
    void parseResponse(const QByteArray & response);
};

#endif // DATABASEHANDLER_H
