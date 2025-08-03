#ifndef LOGIN_H
#define LOGIN_H

#include <QDialog>
#include "mainwindow.h"
#include "userregistration.h"

namespace Ui {
class login;
}

class login : public QDialog
{
    Q_OBJECT

public:
    explicit login(QWidget *parent = nullptr);
    ~login();

public slots:

private slots:
    void on_pushButton_clicked();

    void on_label_2_linkActivated(const QString &link);

private:
    Ui::login *ui;
    MainWindow w;
    userregistration r;
    databasehandler* loginhandler;
};

#endif // LOGIN_H
