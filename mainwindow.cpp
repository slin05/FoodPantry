#include "mainwindow.h"
#include "./ui_mainwindow.h"

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    dbhandler.setAPIKey("AIzaSyA_NDLyRVNuQz7Zvo-68KQJp2ytF0aHm48");
    refreshTable();
}

MainWindow::~MainWindow()
{
    delete ui;
}


void MainWindow::on_SaveProductButton_clicked()
{

    QString productEmoticon = "📦";
    QVariantMap newProduct;
    newProduct["id"] = ui->ProductNameLine->text();
    newProduct["name"] = ui->ProductNameLine->text();
    newProduct["onHand"] = ui->OnHandLine->value();
    newProduct["brand"] = ui->BrandLine->text();
    newProduct["category"] = ui->CategoryBox->currentText();
    newProduct["entryDate"] = ui->EntryDateBox->date();
    newProduct["image"] = productEmoticon;
    newProduct["servingPerUnit"] = ui->ServingLine->text();
    newProduct["stockMin"] = ui->StockMinBox->currentData();
    newProduct["storageType"] = ui->StorageTypeLine->text();

    dbhandler.postToServerInventory(newProduct);
    ui->tabWidget->setCurrentIndex(0);
}

// this is held together by duct tape and glue.
void MainWindow::refreshTable()
{
    QJsonObject fireBaseData = dbhandler.getJson();
    QJsonArray fireBaseArray;
    QJsonArray keyArray;

    //takes every product and puts it into an array
    for(const QString& key : fireBaseData.keys())
    {
        fireBaseArray.append(fireBaseData.value(key));
        keyArray.append(key);
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

            QString id = keyArray[row].toString();
            QString name = productObject["name"].toString();
            int onHand = productObject["onHand"].toInt();
            QString imageData = productObject["image"].toString();
            int purchaseLimit = productObject["purchaseLimit"].toInt();
            int stockMin = productObject["stockMin"].toInt();


            tableWidget->setItem(row, 0, new QTableWidgetItem(name));
            tableWidget->setItem(row, 1, new QTableWidgetItem(QString::number(onHand)));
            tableWidget->setItem(row, 2, new QTableWidgetItem(imageData));
            tableWidget->setItem(row, 3, new QTableWidgetItem(QString::number(stockMin)));
            tableWidget->setItem(row, 4, new QTableWidgetItem(QString::number(purchaseLimit)));

            tableWidget2->setItem(row, 0, new QTableWidgetItem(id));
            tableWidget2->setItem(row, 1, new QTableWidgetItem(name));
            tableWidget2->setItem(row, 2, new QTableWidgetItem(QString::number(onHand)));
            tableWidget2->setCellWidget(row, 5, new QCheckBox);
        }
    }

}

void MainWindow::on_tabWidget_tabBarClicked(int index)
{
    refreshTable();
}


void MainWindow::on_RemoveButton_clicked()
{
    QTableWidget* tableWidget = ui->RemoveTable;

    for (int row = 0; row < tableWidget->rowCount(); row++)
    {
        QWidget* itemBox = tableWidget->cellWidget(row, 5);
        QCheckBox *checkbox = qobject_cast<QCheckBox *>(itemBox);
        if (checkbox->checkState())
        {
            QString product = tableWidget->item(row,0)->text();
            dbhandler.removeFromServerInventory(product);
        };
    };
    ui->tabWidget->setCurrentIndex(0);
}

