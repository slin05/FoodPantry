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
    QWidget *tab;
    QTableWidget *tableWidget;
    QLineEdit *lineEdit;
    QPushButton *pushButton;
    QWidget *tab_2;
    QLineEdit *ProductNameLine;
    QLineEdit *BrandLine;
    QLineEdit *ServingLine;
    QPushButton *SaveProductButton;
    QComboBox *CategoryBox;
    QLineEdit *OnHandLine;
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
    QWidget *tab_3;
    QTableWidget *tableWidget_2;
    QWidget *tab_4;
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
        tab = new QWidget();
        tab->setObjectName("tab");
        tableWidget = new QTableWidget(tab);
        if (tableWidget->columnCount() < 6)
            tableWidget->setColumnCount(6);
        QTableWidgetItem *__qtablewidgetitem = new QTableWidgetItem();
        tableWidget->setHorizontalHeaderItem(0, __qtablewidgetitem);
        QTableWidgetItem *__qtablewidgetitem1 = new QTableWidgetItem();
        tableWidget->setHorizontalHeaderItem(1, __qtablewidgetitem1);
        QTableWidgetItem *__qtablewidgetitem2 = new QTableWidgetItem();
        tableWidget->setHorizontalHeaderItem(2, __qtablewidgetitem2);
        QTableWidgetItem *__qtablewidgetitem3 = new QTableWidgetItem();
        tableWidget->setHorizontalHeaderItem(3, __qtablewidgetitem3);
        QTableWidgetItem *__qtablewidgetitem4 = new QTableWidgetItem();
        tableWidget->setHorizontalHeaderItem(4, __qtablewidgetitem4);
        QTableWidgetItem *__qtablewidgetitem5 = new QTableWidgetItem();
        tableWidget->setHorizontalHeaderItem(5, __qtablewidgetitem5);
        if (tableWidget->rowCount() < 1)
            tableWidget->setRowCount(1);
        tableWidget->setObjectName("tableWidget");
        tableWidget->setGeometry(QRect(0, 30, 761, 521));
        tableWidget->setEditTriggers(QAbstractItemView::EditTrigger::NoEditTriggers);
        tableWidget->setRowCount(1);
        tableWidget->setColumnCount(6);
        lineEdit = new QLineEdit(tab);
        lineEdit->setObjectName("lineEdit");
        lineEdit->setGeometry(QRect(0, 0, 671, 28));
        pushButton = new QPushButton(tab);
        pushButton->setObjectName("pushButton");
        pushButton->setGeometry(QRect(680, 0, 83, 29));
        tabWidget->addTab(tab, QString());
        tab_2 = new QWidget();
        tab_2->setObjectName("tab_2");
        ProductNameLine = new QLineEdit(tab_2);
        ProductNameLine->setObjectName("ProductNameLine");
        ProductNameLine->setGeometry(QRect(170, 50, 401, 28));
        BrandLine = new QLineEdit(tab_2);
        BrandLine->setObjectName("BrandLine");
        BrandLine->setGeometry(QRect(370, 250, 201, 28));
        ServingLine = new QLineEdit(tab_2);
        ServingLine->setObjectName("ServingLine");
        ServingLine->setGeometry(QRect(170, 320, 191, 28));
        SaveProductButton = new QPushButton(tab_2);
        SaveProductButton->setObjectName("SaveProductButton");
        SaveProductButton->setGeometry(QRect(260, 450, 201, 29));
        CategoryBox = new QComboBox(tab_2);
        CategoryBox->setObjectName("CategoryBox");
        CategoryBox->setGeometry(QRect(170, 110, 191, 28));
        OnHandLine = new QLineEdit(tab_2);
        OnHandLine->setObjectName("OnHandLine");
        OnHandLine->setGeometry(QRect(370, 110, 201, 28));
        StockMinBox = new QComboBox(tab_2);
        StockMinBox->setObjectName("StockMinBox");
        StockMinBox->setGeometry(QRect(170, 180, 191, 28));
        PurchaseLimitBox = new QComboBox(tab_2);
        PurchaseLimitBox->setObjectName("PurchaseLimitBox");
        PurchaseLimitBox->setGeometry(QRect(370, 180, 201, 28));
        EntryDateBox = new QDateEdit(tab_2);
        EntryDateBox->setObjectName("EntryDateBox");
        EntryDateBox->setGeometry(QRect(170, 250, 191, 29));
        StorageTypeLine = new QLineEdit(tab_2);
        StorageTypeLine->setObjectName("StorageTypeLine");
        StorageTypeLine->setGeometry(QRect(370, 320, 201, 28));
        DonorVendorLine = new QLineEdit(tab_2);
        DonorVendorLine->setObjectName("DonorVendorLine");
        DonorVendorLine->setGeometry(QRect(170, 380, 191, 28));
        DonatePurchaseBox = new QComboBox(tab_2);
        DonatePurchaseBox->addItem(QString());
        DonatePurchaseBox->addItem(QString());
        DonatePurchaseBox->setObjectName("DonatePurchaseBox");
        DonatePurchaseBox->setGeometry(QRect(370, 380, 201, 28));
        label_2 = new QLabel(tab_2);
        label_2->setObjectName("label_2");
        label_2->setGeometry(QRect(170, 20, 141, 20));
        label_3 = new QLabel(tab_2);
        label_3->setObjectName("label_3");
        label_3->setGeometry(QRect(170, 90, 63, 20));
        label_4 = new QLabel(tab_2);
        label_4->setObjectName("label_4");
        label_4->setGeometry(QRect(370, 90, 63, 20));
        label_5 = new QLabel(tab_2);
        label_5->setObjectName("label_5");
        label_5->setGeometry(QRect(170, 160, 111, 20));
        label_6 = new QLabel(tab_2);
        label_6->setObjectName("label_6");
        label_6->setGeometry(QRect(370, 160, 101, 20));
        label_7 = new QLabel(tab_2);
        label_7->setObjectName("label_7");
        label_7->setGeometry(QRect(170, 230, 71, 20));
        label_8 = new QLabel(tab_2);
        label_8->setObjectName("label_8");
        label_8->setGeometry(QRect(370, 230, 121, 20));
        label_9 = new QLabel(tab_2);
        label_9->setObjectName("label_9");
        label_9->setGeometry(QRect(170, 300, 121, 20));
        label_10 = new QLabel(tab_2);
        label_10->setObjectName("label_10");
        label_10->setGeometry(QRect(370, 300, 91, 20));
        label = new QLabel(tab_2);
        label->setObjectName("label");
        label->setGeometry(QRect(170, 360, 191, 21));
        label_11 = new QLabel(tab_2);
        label_11->setObjectName("label_11");
        label_11->setGeometry(QRect(370, 360, 151, 20));
        tabWidget->addTab(tab_2, QString());
        tab_3 = new QWidget();
        tab_3->setObjectName("tab_3");
        tableWidget_2 = new QTableWidget(tab_3);
        if (tableWidget_2->columnCount() < 6)
            tableWidget_2->setColumnCount(6);
        QTableWidgetItem *__qtablewidgetitem6 = new QTableWidgetItem();
        tableWidget_2->setHorizontalHeaderItem(0, __qtablewidgetitem6);
        QTableWidgetItem *__qtablewidgetitem7 = new QTableWidgetItem();
        tableWidget_2->setHorizontalHeaderItem(1, __qtablewidgetitem7);
        QTableWidgetItem *__qtablewidgetitem8 = new QTableWidgetItem();
        tableWidget_2->setHorizontalHeaderItem(2, __qtablewidgetitem8);
        QTableWidgetItem *__qtablewidgetitem9 = new QTableWidgetItem();
        tableWidget_2->setHorizontalHeaderItem(3, __qtablewidgetitem9);
        QTableWidgetItem *__qtablewidgetitem10 = new QTableWidgetItem();
        tableWidget_2->setHorizontalHeaderItem(4, __qtablewidgetitem10);
        QTableWidgetItem *__qtablewidgetitem11 = new QTableWidgetItem();
        tableWidget_2->setHorizontalHeaderItem(5, __qtablewidgetitem11);
        if (tableWidget_2->rowCount() < 1)
            tableWidget_2->setRowCount(1);
        tableWidget_2->setObjectName("tableWidget_2");
        tableWidget_2->setGeometry(QRect(0, 0, 761, 521));
        tableWidget_2->setEditTriggers(QAbstractItemView::EditTrigger::NoEditTriggers);
        tableWidget_2->setRowCount(1);
        tableWidget_2->setColumnCount(6);
        tabWidget->addTab(tab_3, QString());
        tab_4 = new QWidget();
        tab_4->setObjectName("tab_4");
        tabWidget->addTab(tab_4, QString());
        MainWindow->setCentralWidget(centralwidget);
        menubar = new QMenuBar(MainWindow);
        menubar->setObjectName("menubar");
        menubar->setGeometry(QRect(0, 0, 800, 25));
        MainWindow->setMenuBar(menubar);
        statusbar = new QStatusBar(MainWindow);
        statusbar->setObjectName("statusbar");
        MainWindow->setStatusBar(statusbar);

        retranslateUi(MainWindow);

        tabWidget->setCurrentIndex(0);


        QMetaObject::connectSlotsByName(MainWindow);
    } // setupUi

    void retranslateUi(QMainWindow *MainWindow)
    {
        MainWindow->setWindowTitle(QCoreApplication::translate("MainWindow", "MainWindow", nullptr));
        QTableWidgetItem *___qtablewidgetitem = tableWidget->horizontalHeaderItem(0);
        ___qtablewidgetitem->setText(QCoreApplication::translate("MainWindow", "Item No", nullptr));
        QTableWidgetItem *___qtablewidgetitem1 = tableWidget->horizontalHeaderItem(1);
        ___qtablewidgetitem1->setText(QCoreApplication::translate("MainWindow", "Image", nullptr));
        QTableWidgetItem *___qtablewidgetitem2 = tableWidget->horizontalHeaderItem(2);
        ___qtablewidgetitem2->setText(QCoreApplication::translate("MainWindow", "Product Name", nullptr));
        QTableWidgetItem *___qtablewidgetitem3 = tableWidget->horizontalHeaderItem(3);
        ___qtablewidgetitem3->setText(QCoreApplication::translate("MainWindow", "On Hand", nullptr));
        QTableWidgetItem *___qtablewidgetitem4 = tableWidget->horizontalHeaderItem(4);
        ___qtablewidgetitem4->setText(QCoreApplication::translate("MainWindow", "Stock Min", nullptr));
        QTableWidgetItem *___qtablewidgetitem5 = tableWidget->horizontalHeaderItem(5);
        ___qtablewidgetitem5->setText(QCoreApplication::translate("MainWindow", "Purchase Limit", nullptr));
        pushButton->setText(QCoreApplication::translate("MainWindow", "Search", nullptr));
        tabWidget->setTabText(tabWidget->indexOf(tab), QCoreApplication::translate("MainWindow", "View", nullptr));
        ProductNameLine->setText(QString());
        BrandLine->setText(QString());
        ServingLine->setText(QString());
        SaveProductButton->setText(QCoreApplication::translate("MainWindow", "Save Product", nullptr));
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
        tabWidget->setTabText(tabWidget->indexOf(tab_2), QCoreApplication::translate("MainWindow", "Add", nullptr));
        QTableWidgetItem *___qtablewidgetitem6 = tableWidget_2->horizontalHeaderItem(0);
        ___qtablewidgetitem6->setText(QCoreApplication::translate("MainWindow", "Item No", nullptr));
        QTableWidgetItem *___qtablewidgetitem7 = tableWidget_2->horizontalHeaderItem(1);
        ___qtablewidgetitem7->setText(QCoreApplication::translate("MainWindow", "Image", nullptr));
        QTableWidgetItem *___qtablewidgetitem8 = tableWidget_2->horizontalHeaderItem(2);
        ___qtablewidgetitem8->setText(QCoreApplication::translate("MainWindow", "Product Name", nullptr));
        QTableWidgetItem *___qtablewidgetitem9 = tableWidget_2->horizontalHeaderItem(3);
        ___qtablewidgetitem9->setText(QCoreApplication::translate("MainWindow", "On Hand", nullptr));
        QTableWidgetItem *___qtablewidgetitem10 = tableWidget_2->horizontalHeaderItem(4);
        ___qtablewidgetitem10->setText(QCoreApplication::translate("MainWindow", "Stock Min", nullptr));
        QTableWidgetItem *___qtablewidgetitem11 = tableWidget_2->horizontalHeaderItem(5);
        ___qtablewidgetitem11->setText(QCoreApplication::translate("MainWindow", "Purchase Limit", nullptr));
        tabWidget->setTabText(tabWidget->indexOf(tab_3), QCoreApplication::translate("MainWindow", "Remove", nullptr));
        tabWidget->setTabText(tabWidget->indexOf(tab_4), QCoreApplication::translate("MainWindow", "Scanner", nullptr));
    } // retranslateUi

};

namespace Ui {
    class MainWindow: public Ui_MainWindow {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_MAINWINDOW_H
