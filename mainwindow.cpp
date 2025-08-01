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
    newProduct["name"] = ui->ProductNameLine->text();
    newProduct["quantity"] = ui->OnHandLine->text().toInt();

    dbhandler.postToServerInventory(newProduct);
}

// this is held together by duct tape and glue.
void MainWindow::refreshTable()
{
    QJsonObject fireBaseData = dbhandler.getJson();
    QJsonArray fireBaseArray;

    //takes every product and puts it into an array
    for(const QString& key : fireBaseData.keys())
    {
        fireBaseArray.append(fireBaseData.value(key));
    }

    QTableWidget* tableWidget = ui->ViewTable;

    ui->ViewTable->setRowCount(fireBaseArray.size());

    // takes every product in the array and puts the data into a new row of the table.
    for (int row = 0; row < fireBaseArray.size(); ++row)
    {
        QJsonValue productValue = fireBaseArray[row];

        if (productValue.isObject())
        {
            QJsonObject productObject = productValue.toObject();

            QString name = productObject["name"].toString();
            int onHand = productObject["quantity"].toInt();

            tableWidget->setItem(row, 0, new QTableWidgetItem(name));
            tableWidget->setItem(row, 1, new QTableWidgetItem(QString::number(onHand)));
        }
    }

}

void MainWindow::on_tabWidget_tabBarClicked(int index)
{
    if (index == 0){
        refreshTable();
    }
}

