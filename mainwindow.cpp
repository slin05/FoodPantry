#include "mainwindow.h"
#include "./ui_mainwindow.h"

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    refreshTable();
}

MainWindow::~MainWindow()
{
    delete ui;
}


void MainWindow::on_SaveProductButton_clicked()
{
    QVariantMap newProduct;
    newProduct["name"] = "Peach";
    newProduct["quantity"] = "40";

    dbhandler.postToServerInventory(newProduct);
}


void MainWindow::refreshTable()
{
    QJsonObject fireBaseData = dbhandler.pullFromInventory();

    if (fireBaseData.contains("products"))
    {
        qDebug() << "HI";
    } else
    {
        qDebug() << "oops";
    }
}
