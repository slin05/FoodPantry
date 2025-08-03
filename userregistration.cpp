#include "userregistration.h"
#include "ui_userregistration.h"

userregistration::userregistration(QWidget *parent)
    : QWidget(parent)
    , ui(new Ui::userregistration)
{
    ui->setupUi(this);
}

userregistration::~userregistration()
{
    delete ui;
}
