#include "edititemdialog.h"
#include "ui_edititemdialog.h"

edititemdialog::edititemdialog(QWidget *parent)
    : QDialog(parent)
    , ui(new Ui::edititemdialog)
{
    ui->setupUi(this);
}

edititemdialog::~edititemdialog()
{
    delete ui;
}
