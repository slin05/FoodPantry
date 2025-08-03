#include "login.h"
#include "ui_login.h"
#include <QString>

login::login(QWidget *parent)
    : QDialog(parent)
    , ui(new Ui::login)
{
    ui->setupUi(this);
}

login::~login()
{
    delete ui;
}

void login::on_pushButton_clicked()
{
    QString username, password;
    username = ui->lineEdit_username->text();
    password = ui->lineEdit_password->text();

    if(username == "test" && password == "test"){
        ui->label_error->setText("username and password are correct");
        this->hide();
        w.show();
    } else {
        ui->label_error->setText("username and password are incorrect");
    }
}


void login::on_label_2_linkActivated(const QString &link)
{
    this->hide();
    r.show();
}

