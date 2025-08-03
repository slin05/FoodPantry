/********************************************************************************
** Form generated from reading UI file 'mainwindow.ui'
**
** Created by: Qt User Interface Compiler version 6.9.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_MAINWINDOW_H
#define UI_MAINWINDOW_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QComboBox>
#include <QtWidgets/QDateEdit>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QMenuBar>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QSpinBox>
#include <QtWidgets/QStatusBar>
#include <QtWidgets/QTabWidget>
#include <QtWidgets/QTableWidget>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_MainWindow
{
public:
    QWidget *centralwidget;
    QTabWidget *tabWidget;
    QWidget *ViewTab;
    QTableWidget *ViewTable;
    QLineEdit *lineEdit;
    QPushButton *pushButton;
    QWidget *AddTab;
    QLineEdit *ProductNameLine;
    QLineEdit *BrandLine;
    QLineEdit *ServingLine;
    QPushButton *SaveProductButton;
    QComboBox *CategoryBox;
    QComboBox *StockMinBox;
    QComboBox *PurchaseLimitBox;
    QDateEdit *EntryDateBox;
    QLineEdit *StorageTypeLine;
    QLineEdit *DonorVendorLine;
    QComboBox *DonatePurchaseBox;
    QLabel *label_2;
    QLabel *label_3;
    QLabel *label_4;
    QLabel *label_5;
    QLabel *label_6;
    QLabel *label_7;
    QLabel *label_8;
    QLabel *label_9;
    QLabel *label_10;
    QLabel *label;
    QLabel *label_11;
    QSpinBox *OnHandLine;
    QWidget *RemoveTab;
    QTableWidget *RemoveTable;
    QPushButton *RemoveButton;
    QMenuBar *menubar;
    QStatusBar *statusbar;

    void setupUi(QMainWindow *MainWindow)
    {
        if (MainWindow->objectName().isEmpty())
            MainWindow->setObjectName("MainWindow");
        MainWindow->resize(800, 600);
        centralwidget = new QWidget(MainWindow);
        centralwidget->setObjectName("centralwidget");
        tabWidget = new QTabWidget(centralwidget);
        tabWidget->setObjectName("tabWidget");
        tabWidget->setGeometry(QRect(0, 0, 1191, 641));
        tabWidget->setMaximumSize(QSize(1191, 641));
        tabWidget->setTabPosition(QTabWidget::TabPosition::West);
        ViewTab = new QWidget();
        ViewTab->setObjectName("ViewTab");
        ViewTable = new QTableWidget(ViewTab);
        if (ViewTable->columnCount() < 5)
            ViewTable->setColumnCount(5);
        QTableWidgetItem *__qtablewidgetitem = new QTableWidgetItem();
        ViewTable->setHorizontalHeaderItem(0, __qtablewidgetitem);
        QTableWidgetItem *__qtablewidgetitem1 = new QTableWidgetItem();
        ViewTable->setHorizontalHeaderItem(1, __qtablewidgetitem1);
        QTableWidgetItem *__qtablewidgetitem2 = new QTableWidgetItem();
        ViewTable->setHorizontalHeaderItem(2, __qtablewidgetitem2);
        QTableWidgetItem *__qtablewidgetitem3 = new QTableWidgetItem();
        ViewTable->setHorizontalHeaderItem(3, __qtablewidgetitem3);
        QTableWidgetItem *__qtablewidgetitem4 = new QTableWidgetItem();
        ViewTable->setHorizontalHeaderItem(4, __qtablewidgetitem4);
        if (ViewTable->rowCount() < 1)
            ViewTable->setRowCount(1);
        ViewTable->setObjectName("ViewTable");
        ViewTable->setGeometry(QRect(0, 30, 761, 521));
        ViewTable->setEditTriggers(QAbstractItemView::EditTrigger::NoEditTriggers);
        ViewTable->setRowCount(1);
        ViewTable->setColumnCount(5);
        lineEdit = new QLineEdit(ViewTab);
        lineEdit->setObjectName("lineEdit");
        lineEdit->setGeometry(QRect(0, 0, 671, 28));
        pushButton = new QPushButton(ViewTab);
        pushButton->setObjectName("pushButton");
        pushButton->setGeometry(QRect(680, 0, 83, 29));
        tabWidget->addTab(ViewTab, QString());
        AddTab = new QWidget();
        AddTab->setObjectName("AddTab");
        ProductNameLine = new QLineEdit(AddTab);
        ProductNameLine->setObjectName("ProductNameLine");
        ProductNameLine->setGeometry(QRect(170, 50, 401, 28));
        BrandLine = new QLineEdit(AddTab);
        BrandLine->setObjectName("BrandLine");
        BrandLine->setGeometry(QRect(370, 250, 201, 28));
        ServingLine = new QLineEdit(AddTab);
        ServingLine->setObjectName("ServingLine");
        ServingLine->setGeometry(QRect(170, 320, 191, 28));
        SaveProductButton = new QPushButton(AddTab);
        SaveProductButton->setObjectName("SaveProductButton");
        SaveProductButton->setGeometry(QRect(260, 450, 201, 29));
        CategoryBox = new QComboBox(AddTab);
        CategoryBox->addItem(QString());
        CategoryBox->addItem(QString());
        CategoryBox->addItem(QString());
        CategoryBox->addItem(QString());
        CategoryBox->setObjectName("CategoryBox");
        CategoryBox->setGeometry(QRect(170, 110, 191, 28));
        StockMinBox = new QComboBox(AddTab);
        StockMinBox->addItem(QString());
        StockMinBox->addItem(QString());
        StockMinBox->addItem(QString());
        StockMinBox->setObjectName("StockMinBox");
        StockMinBox->setGeometry(QRect(170, 180, 191, 28));
        PurchaseLimitBox = new QComboBox(AddTab);
        PurchaseLimitBox->addItem(QString());
        PurchaseLimitBox->addItem(QString());
        PurchaseLimitBox->addItem(QString());
        PurchaseLimitBox->setObjectName("PurchaseLimitBox");
        PurchaseLimitBox->setGeometry(QRect(370, 180, 201, 28));
        EntryDateBox = new QDateEdit(AddTab);
        EntryDateBox->setObjectName("EntryDateBox");
        EntryDateBox->setGeometry(QRect(170, 250, 191, 29));
        StorageTypeLine = new QLineEdit(AddTab);
        StorageTypeLine->setObjectName("StorageTypeLine");
        StorageTypeLine->setGeometry(QRect(370, 320, 201, 28));
        DonorVendorLine = new QLineEdit(AddTab);
        DonorVendorLine->setObjectName("DonorVendorLine");
        DonorVendorLine->setGeometry(QRect(170, 380, 191, 28));
        DonatePurchaseBox = new QComboBox(AddTab);
        DonatePurchaseBox->addItem(QString());
        DonatePurchaseBox->addItem(QString());
        DonatePurchaseBox->setObjectName("DonatePurchaseBox");
        DonatePurchaseBox->setGeometry(QRect(370, 380, 201, 28));
        label_2 = new QLabel(AddTab);
        label_2->setObjectName("label_2");
        label_2->setGeometry(QRect(170, 20, 141, 20));
        label_3 = new QLabel(AddTab);
        label_3->setObjectName("label_3");
        label_3->setGeometry(QRect(170, 90, 63, 20));
        label_4 = new QLabel(AddTab);
        label_4->setObjectName("label_4");
        label_4->setGeometry(QRect(370, 90, 63, 20));
        label_5 = new QLabel(AddTab);
        label_5->setObjectName("label_5");
        label_5->setGeometry(QRect(170, 160, 111, 20));
        label_6 = new QLabel(AddTab);
        label_6->setObjectName("label_6");
        label_6->setGeometry(QRect(370, 160, 101, 20));
        label_7 = new QLabel(AddTab);
        label_7->setObjectName("label_7");
        label_7->setGeometry(QRect(170, 230, 71, 20));
        label_8 = new QLabel(AddTab);
        label_8->setObjectName("label_8");
        label_8->setGeometry(QRect(370, 230, 121, 20));
        label_9 = new QLabel(AddTab);
        label_9->setObjectName("label_9");
        label_9->setGeometry(QRect(170, 300, 121, 20));
        label_10 = new QLabel(AddTab);
        label_10->setObjectName("label_10");
        label_10->setGeometry(QRect(370, 300, 91, 20));
        label = new QLabel(AddTab);
        label->setObjectName("label");
        label->setGeometry(QRect(170, 360, 191, 21));
        label_11 = new QLabel(AddTab);
        label_11->setObjectName("label_11");
        label_11->setGeometry(QRect(370, 360, 151, 20));
        OnHandLine = new QSpinBox(AddTab);
        OnHandLine->setObjectName("OnHandLine");
        OnHandLine->setGeometry(QRect(370, 110, 201, 29));
        tabWidget->addTab(AddTab, QString());
        RemoveTab = new QWidget();
        RemoveTab->setObjectName("RemoveTab");
        RemoveTable = new QTableWidget(RemoveTab);
        if (RemoveTable->columnCount() < 6)
            RemoveTable->setColumnCount(6);
        QTableWidgetItem *__qtablewidgetitem5 = new QTableWidgetItem();
        RemoveTable->setHorizontalHeaderItem(0, __qtablewidgetitem5);
        QTableWidgetItem *__qtablewidgetitem6 = new QTableWidgetItem();
        RemoveTable->setHorizontalHeaderItem(1, __qtablewidgetitem6);
        QTableWidgetItem *__qtablewidgetitem7 = new QTableWidgetItem();
        RemoveTable->setHorizontalHeaderItem(2, __qtablewidgetitem7);
        QTableWidgetItem *__qtablewidgetitem8 = new QTableWidgetItem();
        RemoveTable->setHorizontalHeaderItem(3, __qtablewidgetitem8);
        QTableWidgetItem *__qtablewidgetitem9 = new QTableWidgetItem();
        RemoveTable->setHorizontalHeaderItem(4, __qtablewidgetitem9);
        QTableWidgetItem *__qtablewidgetitem10 = new QTableWidgetItem();
        RemoveTable->setHorizontalHeaderItem(5, __qtablewidgetitem10);
        if (RemoveTable->rowCount() < 1)
            RemoveTable->setRowCount(1);
        RemoveTable->setObjectName("RemoveTable");
        RemoveTable->setGeometry(QRect(0, 0, 761, 521));
        RemoveTable->setEditTriggers(QAbstractItemView::EditTrigger::NoEditTriggers);
        RemoveTable->setRowCount(1);
        RemoveTable->setColumnCount(6);
        RemoveButton = new QPushButton(RemoveTab);
        RemoveButton->setObjectName("RemoveButton");
        RemoveButton->setGeometry(QRect(620, 440, 131, 61));
        tabWidget->addTab(RemoveTab, QString());
        MainWindow->setCentralWidget(centralwidget);
        menubar = new QMenuBar(MainWindow);
        menubar->setObjectName("menubar");
        menubar->setGeometry(QRect(0, 0, 800, 25));
        MainWindow->setMenuBar(menubar);
        statusbar = new QStatusBar(MainWindow);
        statusbar->setObjectName("statusbar");
        MainWindow->setStatusBar(statusbar);

        retranslateUi(MainWindow);

        tabWidget->setCurrentIndex(2);


        QMetaObject::connectSlotsByName(MainWindow);
    } // setupUi

    void retranslateUi(QMainWindow *MainWindow)
    {
        MainWindow->setWindowTitle(QCoreApplication::translate("MainWindow", "MainWindow", nullptr));
        QTableWidgetItem *___qtablewidgetitem = ViewTable->horizontalHeaderItem(0);
        ___qtablewidgetitem->setText(QCoreApplication::translate("MainWindow", "Product Name", nullptr));
        QTableWidgetItem *___qtablewidgetitem1 = ViewTable->horizontalHeaderItem(1);
        ___qtablewidgetitem1->setText(QCoreApplication::translate("MainWindow", "On Hand", nullptr));
        QTableWidgetItem *___qtablewidgetitem2 = ViewTable->horizontalHeaderItem(2);
        ___qtablewidgetitem2->setText(QCoreApplication::translate("MainWindow", "Image", nullptr));
        QTableWidgetItem *___qtablewidgetitem3 = ViewTable->horizontalHeaderItem(3);
        ___qtablewidgetitem3->setText(QCoreApplication::translate("MainWindow", "Stock Min", nullptr));
        QTableWidgetItem *___qtablewidgetitem4 = ViewTable->horizontalHeaderItem(4);
        ___qtablewidgetitem4->setText(QCoreApplication::translate("MainWindow", "Purchase Limit", nullptr));
        pushButton->setText(QCoreApplication::translate("MainWindow", "Search", nullptr));
        tabWidget->setTabText(tabWidget->indexOf(ViewTab), QCoreApplication::translate("MainWindow", "View", nullptr));
        ProductNameLine->setText(QString());
        BrandLine->setText(QString());
        ServingLine->setText(QString());
        SaveProductButton->setText(QCoreApplication::translate("MainWindow", "Save Product", nullptr));
        CategoryBox->setItemText(0, QCoreApplication::translate("MainWindow", "Grain Product", nullptr));
        CategoryBox->setItemText(1, QCoreApplication::translate("MainWindow", "Canned Goods", nullptr));
        CategoryBox->setItemText(2, QCoreApplication::translate("MainWindow", "Condiments/Sauce", nullptr));
        CategoryBox->setItemText(3, QCoreApplication::translate("MainWindow", "Dry Cereal", nullptr));

        StockMinBox->setItemText(0, QCoreApplication::translate("MainWindow", "15", nullptr));
        StockMinBox->setItemText(1, QCoreApplication::translate("MainWindow", "10", nullptr));
        StockMinBox->setItemText(2, QCoreApplication::translate("MainWindow", "5", nullptr));

        PurchaseLimitBox->setItemText(0, QCoreApplication::translate("MainWindow", "3", nullptr));
        PurchaseLimitBox->setItemText(1, QCoreApplication::translate("MainWindow", "2", nullptr));
        PurchaseLimitBox->setItemText(2, QCoreApplication::translate("MainWindow", "1", nullptr));

        DonatePurchaseBox->setItemText(0, QCoreApplication::translate("MainWindow", "Donated", nullptr));
        DonatePurchaseBox->setItemText(1, QCoreApplication::translate("MainWindow", "Purchased", nullptr));

        label_2->setText(QCoreApplication::translate("MainWindow", "Product Name", nullptr));
        label_3->setText(QCoreApplication::translate("MainWindow", "Category", nullptr));
        label_4->setText(QCoreApplication::translate("MainWindow", "On Hand", nullptr));
        label_5->setText(QCoreApplication::translate("MainWindow", "Stock Minimum", nullptr));
        label_6->setText(QCoreApplication::translate("MainWindow", "Purchase Limit", nullptr));
        label_7->setText(QCoreApplication::translate("MainWindow", "Entry Date", nullptr));
        label_8->setText(QCoreApplication::translate("MainWindow", "Brand (optional)", nullptr));
        label_9->setText(QCoreApplication::translate("MainWindow", "Serving per unit", nullptr));
        label_10->setText(QCoreApplication::translate("MainWindow", "Storage Type", nullptr));
        label->setText(QCoreApplication::translate("MainWindow", "Donor or Vendor (optional)", nullptr));
        label_11->setText(QCoreApplication::translate("MainWindow", "Donated or Purchased", nullptr));
        tabWidget->setTabText(tabWidget->indexOf(AddTab), QCoreApplication::translate("MainWindow", "Add", nullptr));
        QTableWidgetItem *___qtablewidgetitem5 = RemoveTable->horizontalHeaderItem(0);
        ___qtablewidgetitem5->setText(QCoreApplication::translate("MainWindow", "ID", nullptr));
        QTableWidgetItem *___qtablewidgetitem6 = RemoveTable->horizontalHeaderItem(1);
        ___qtablewidgetitem6->setText(QCoreApplication::translate("MainWindow", "Product Name", nullptr));
        QTableWidgetItem *___qtablewidgetitem7 = RemoveTable->horizontalHeaderItem(2);
        ___qtablewidgetitem7->setText(QCoreApplication::translate("MainWindow", "On Hand", nullptr));
        QTableWidgetItem *___qtablewidgetitem8 = RemoveTable->horizontalHeaderItem(3);
        ___qtablewidgetitem8->setText(QCoreApplication::translate("MainWindow", "Stock Min", nullptr));
        QTableWidgetItem *___qtablewidgetitem9 = RemoveTable->horizontalHeaderItem(4);
        ___qtablewidgetitem9->setText(QCoreApplication::translate("MainWindow", "Purchase Limit", nullptr));
        RemoveButton->setText(QCoreApplication::translate("MainWindow", "Remove Selected", nullptr));
        tabWidget->setTabText(tabWidget->indexOf(RemoveTab), QCoreApplication::translate("MainWindow", "Remove", nullptr));
    } // retranslateUi

};

namespace Ui {
    class MainWindow: public Ui_MainWindow {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_MAINWINDOW_H
