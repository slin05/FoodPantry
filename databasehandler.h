#ifndef DATABASEHANDLER_H
#define DATABASEHANDLER_H

#include <QObject>
#include <QNetworkAccessManager>
#include <QNetworkReply>

class databasehandler : public QObject
{
    Q_OBJECT
public:
    explicit databasehandler(QObject *parent = nullptr);
    ~databasehandler();

public slots:
    void networkReplyReadyRead();

signals:

private:
    QNetworkAccessManager * m_networkManager;
    QNetworkReply * m_networkReply;

    QString inventoryDatabase;
    QString loginDatabase;

    void postToServerInventory(QVariantMap product);
    void getFromServerInventory();
};

#endif // DATABASEHANDLER_H
