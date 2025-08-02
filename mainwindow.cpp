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
    newProduct["itemId"] = ui->ProductNameLine->text();
    newProduct["name"] = ui->ProductNameLine->text();
    newProduct["quantity"] = ui->OnHandLine->text().toInt();
    newProduct["brand"] = ui->BrandLine->text();

    dbhandler.postToServerInventory(newProduct);
    ui->tabWidget->setCurrentIndex(0);
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
    QTableWidget* tableWidget2 = ui->RemoveTable;

    tableWidget->setRowCount(fireBaseArray.size());
    tableWidget2->setRowCount(fireBaseArray.size());

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

            tableWidget2->setItem(row, 0, new QTableWidgetItem(name));
            tableWidget2->setItem(row, 1, new QTableWidgetItem(QString::number(onHand)));
            tableWidget2->setCellWidget(row, 5, new QCheckBox);
        }
    }

}

void MainWindow::on_tabWidget_tabBarClicked(int index)
{
    refreshTable();
}

