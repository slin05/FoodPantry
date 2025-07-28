/********************************************************************************
** Form generated from reading UI file 'edititemdialog.ui'
**
** Created by: Qt User Interface Compiler version 6.9.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_EDITITEMDIALOG_H
#define UI_EDITITEMDIALOG_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QComboBox>
#include <QtWidgets/QDateEdit>
#include <QtWidgets/QDialog>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QPushButton>

QT_BEGIN_NAMESPACE

class Ui_edititemdialog
{
public:
    QLabel *product_name_label;
    QLabel *category_label;
    QComboBox *category_edit;
    QLabel *on_hand_label;
    QLineEdit *on_hand_edit;
    QLineEdit *product_name_edit;
    QComboBox *stock_minimum_edit;
    QComboBox *purchase_limit_edit;
    QLabel *stock_mimimum_label;
    QLabel *purchase_limit_label;
    QDateEdit *entry_date_edit;
    QLineEdit *brand_edit;
    QLineEdit *storage_edit;
    QLineEdit *serving_edit;
    QLineEdit *donor_edit;
    QComboBox *donated_edit;
    QLabel *entry_date_label;
    QLabel *brand_label;
    QLabel *serving_label;
    QLabel *donated_label;
    QLabel *donor_label;
    QLabel *storage_label;
    QLabel *window_label;
    QPushButton *save_button;
    QPushButton *pushButton_2;

    void setupUi(QDialog *edititemdialog)
    {
        if (edititemdialog->objectName().isEmpty())
            edititemdialog->setObjectName("edititemdialog");
        edititemdialog->resize(689, 566);
        product_name_label = new QLabel(edititemdialog);
        product_name_label->setObjectName("product_name_label");
        product_name_label->setGeometry(QRect(120, 30, 101, 20));
        category_label = new QLabel(edititemdialog);
        category_label->setObjectName("category_label");
        category_label->setGeometry(QRect(120, 110, 63, 20));
        category_edit = new QComboBox(edititemdialog);
        category_edit->setObjectName("category_edit");
        category_edit->setGeometry(QRect(120, 140, 181, 28));
        on_hand_label = new QLabel(edititemdialog);
        on_hand_label->setObjectName("on_hand_label");
        on_hand_label->setGeometry(QRect(350, 110, 63, 20));
        on_hand_edit = new QLineEdit(edititemdialog);
        on_hand_edit->setObjectName("on_hand_edit");
        on_hand_edit->setGeometry(QRect(350, 140, 201, 28));
        product_name_edit = new QLineEdit(edititemdialog);
        product_name_edit->setObjectName("product_name_edit");
        product_name_edit->setGeometry(QRect(120, 60, 451, 28));
        stock_minimum_edit = new QComboBox(edititemdialog);
        stock_minimum_edit->setObjectName("stock_minimum_edit");
        stock_minimum_edit->setGeometry(QRect(120, 220, 181, 28));
        purchase_limit_edit = new QComboBox(edititemdialog);
        purchase_limit_edit->setObjectName("purchase_limit_edit");
        purchase_limit_edit->setGeometry(QRect(350, 220, 181, 28));
        stock_mimimum_label = new QLabel(edititemdialog);
        stock_mimimum_label->setObjectName("stock_mimimum_label");
        stock_mimimum_label->setGeometry(QRect(120, 190, 111, 20));
        purchase_limit_label = new QLabel(edititemdialog);
        purchase_limit_label->setObjectName("purchase_limit_label");
        purchase_limit_label->setGeometry(QRect(350, 190, 101, 20));
        entry_date_edit = new QDateEdit(edititemdialog);
        entry_date_edit->setObjectName("entry_date_edit");
        entry_date_edit->setGeometry(QRect(120, 290, 181, 29));
        brand_edit = new QLineEdit(edititemdialog);
        brand_edit->setObjectName("brand_edit");
        brand_edit->setGeometry(QRect(350, 290, 201, 28));
        storage_edit = new QLineEdit(edititemdialog);
        storage_edit->setObjectName("storage_edit");
        storage_edit->setGeometry(QRect(350, 360, 201, 28));
        serving_edit = new QLineEdit(edititemdialog);
        serving_edit->setObjectName("serving_edit");
        serving_edit->setGeometry(QRect(120, 360, 201, 28));
        donor_edit = new QLineEdit(edititemdialog);
        donor_edit->setObjectName("donor_edit");
        donor_edit->setGeometry(QRect(120, 430, 201, 28));
        donated_edit = new QComboBox(edititemdialog);
        donated_edit->addItem(QString());
        donated_edit->addItem(QString());
        donated_edit->setObjectName("donated_edit");
        donated_edit->setGeometry(QRect(350, 430, 181, 28));
        entry_date_label = new QLabel(edititemdialog);
        entry_date_label->setObjectName("entry_date_label");
        entry_date_label->setGeometry(QRect(120, 260, 71, 20));
        brand_label = new QLabel(edititemdialog);
        brand_label->setObjectName("brand_label");
        brand_label->setGeometry(QRect(350, 260, 111, 20));
        serving_label = new QLabel(edititemdialog);
        serving_label->setObjectName("serving_label");
        serving_label->setGeometry(QRect(120, 330, 111, 20));
        donated_label = new QLabel(edititemdialog);
        donated_label->setObjectName("donated_label");
        donated_label->setGeometry(QRect(350, 400, 151, 20));
        donor_label = new QLabel(edititemdialog);
        donor_label->setObjectName("donor_label");
        donor_label->setGeometry(QRect(120, 400, 181, 20));
        storage_label = new QLabel(edititemdialog);
        storage_label->setObjectName("storage_label");
        storage_label->setGeometry(QRect(350, 330, 91, 20));
        window_label = new QLabel(edititemdialog);
        window_label->setObjectName("window_label");
        window_label->setGeometry(QRect(20, 10, 63, 20));
        save_button = new QPushButton(edititemdialog);
        save_button->setObjectName("save_button");
        save_button->setGeometry(QRect(220, 520, 231, 29));
        pushButton_2 = new QPushButton(edititemdialog);
        pushButton_2->setObjectName("pushButton_2");
        pushButton_2->setGeometry(QRect(470, 520, 191, 29));

        retranslateUi(edititemdialog);

        QMetaObject::connectSlotsByName(edititemdialog);
    } // setupUi

    void retranslateUi(QDialog *edititemdialog)
    {
        edititemdialog->setWindowTitle(QCoreApplication::translate("edititemdialog", "Dialog", nullptr));
        product_name_label->setText(QCoreApplication::translate("edititemdialog", "Product Name", nullptr));
        category_label->setText(QCoreApplication::translate("edititemdialog", "Category", nullptr));
        on_hand_label->setText(QCoreApplication::translate("edititemdialog", "On Hand", nullptr));
        stock_mimimum_label->setText(QCoreApplication::translate("edititemdialog", "Stock Minimum", nullptr));
        purchase_limit_label->setText(QCoreApplication::translate("edititemdialog", "Purchase Limit", nullptr));
        donated_edit->setItemText(0, QCoreApplication::translate("edititemdialog", "Donated", nullptr));
        donated_edit->setItemText(1, QCoreApplication::translate("edititemdialog", "Purchased", nullptr));

        entry_date_label->setText(QCoreApplication::translate("edititemdialog", "Entry Date", nullptr));
        brand_label->setText(QCoreApplication::translate("edititemdialog", "Brand (optional)", nullptr));
        serving_label->setText(QCoreApplication::translate("edititemdialog", "Serving per unit", nullptr));
        donated_label->setText(QCoreApplication::translate("edititemdialog", "Donated or Purchased", nullptr));
        donor_label->setText(QCoreApplication::translate("edititemdialog", "Donor or Vendor (optional)", nullptr));
        storage_label->setText(QCoreApplication::translate("edititemdialog", "Storage Type", nullptr));
        window_label->setText(QCoreApplication::translate("edititemdialog", "Edit Item", nullptr));
        save_button->setText(QCoreApplication::translate("edititemdialog", "Save", nullptr));
        pushButton_2->setText(QCoreApplication::translate("edititemdialog", "Cancel", nullptr));
    } // retranslateUi

};

namespace Ui {
    class edititemdialog: public Ui_edititemdialog {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_EDITITEMDIALOG_H
