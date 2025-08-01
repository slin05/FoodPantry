#ifndef DATABASEHANDLER_H
#define DATABASEHANDLER_H

#include <QObject>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QJsonObject>

class databasehandler : public QObject
{
    Q_OBJECT
public:
    explicit databasehandler(QObject *parent = nullptr);
    ~databasehandler();
    void postToServerInventory(QVariantMap product);
    void pullInventory();
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

    QJsonObject firebase;

    void getFromServerInventory();
};

#endif // DATABASEHANDLER_H
