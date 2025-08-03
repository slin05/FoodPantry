#include "userregistration.h"
#include "ui_userregistration.h"

userregistration::userregistration(QWidget *parent)
    : QWidget(parent)
    , ui(new Ui::userregistration)
{
    ui->setupUi(this);
}

void userregistration::sethandler(databasehandler *address)
{
    registerhandler = address;
}

userregistration::~userregistration()
{
    delete ui;
}

void userregistration::on_pushButton_clicked()
{
    registerhandler->signUserUp("ryan@email.com", "password123");
}

