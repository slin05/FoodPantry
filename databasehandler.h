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
    QJsonObject pullFromInventory();

public slots:
    void networkReplyReadyRead();

signals:

private:
    QNetworkAccessManager * m_networkManager;
    QNetworkReply * m_networkReply;

    QString inventoryDatabase;
    QString loginDatabase;

    void getFromServerInventory();
};

#endif // DATABASEHANDLER_H
