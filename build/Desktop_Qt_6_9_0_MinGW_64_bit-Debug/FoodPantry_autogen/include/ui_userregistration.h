/********************************************************************************
** Form generated from reading UI file 'userregistration.ui'
**
** Created by: Qt User Interface Compiler version 6.9.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_USERREGISTRATION_H
#define UI_USERREGISTRATION_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_userregistration
{
public:
    QLineEdit *lineEdit_3;
    QLineEdit *lineEdit_4;
    QLabel *label;
    QPushButton *pushButton;
    QLineEdit *lineEdit;
    QLineEdit *lineEdit_5;
    QLineEdit *lineEdit_6;
    QLabel *label_2;
    QLineEdit *lineEdit_2;

    void setupUi(QWidget *userregistration)
    {
        if (userregistration->objectName().isEmpty())
            userregistration->setObjectName("userregistration");
        userregistration->resize(400, 600);
        userregistration->setMinimumSize(QSize(400, 600));
        lineEdit_3 = new QLineEdit(userregistration);
        lineEdit_3->setObjectName("lineEdit_3");
        lineEdit_3->setGeometry(QRect(10, 260, 378, 28));
        lineEdit_4 = new QLineEdit(userregistration);
        lineEdit_4->setObjectName("lineEdit_4");
        lineEdit_4->setGeometry(QRect(10, 295, 378, 28));
        label = new QLabel(userregistration);
        label->setObjectName("label");
        label->setGeometry(QRect(10, 20, 378, 163));
        pushButton = new QPushButton(userregistration);
        pushButton->setObjectName("pushButton");
        pushButton->setGeometry(QRect(10, 400, 378, 29));
        lineEdit = new QLineEdit(userregistration);
        lineEdit->setObjectName("lineEdit");
        lineEdit->setGeometry(QRect(10, 190, 378, 28));
        lineEdit_5 = new QLineEdit(userregistration);
        lineEdit_5->setObjectName("lineEdit_5");
        lineEdit_5->setGeometry(QRect(10, 330, 378, 28));
        lineEdit_6 = new QLineEdit(userregistration);
        lineEdit_6->setObjectName("lineEdit_6");
        lineEdit_6->setGeometry(QRect(10, 365, 378, 28));
        label_2 = new QLabel(userregistration);
        label_2->setObjectName("label_2");
        label_2->setGeometry(QRect(10, 436, 378, 162));
        lineEdit_2 = new QLineEdit(userregistration);
        lineEdit_2->setObjectName("lineEdit_2");
        lineEdit_2->setGeometry(QRect(10, 225, 378, 28));

        retranslateUi(userregistration);

        QMetaObject::connectSlotsByName(userregistration);
    } // setupUi

    void retranslateUi(QWidget *userregistration)
    {
        userregistration->setWindowTitle(QCoreApplication::translate("userregistration", "Form", nullptr));
        lineEdit_3->setPlaceholderText(QCoreApplication::translate("userregistration", "\360\237\221\244Username", nullptr));
        lineEdit_4->setPlaceholderText(QCoreApplication::translate("userregistration", "\360\237\224\222Password", nullptr));
        label->setText(QCoreApplication::translate("userregistration", "\360\237\223\246Register", nullptr));
        pushButton->setText(QCoreApplication::translate("userregistration", "Create Account", nullptr));
        lineEdit->setPlaceholderText(QCoreApplication::translate("userregistration", "\360\237\221\244Full Name", nullptr));
        lineEdit_5->setPlaceholderText(QCoreApplication::translate("userregistration", "\360\237\224\222Confirm Password", nullptr));
        lineEdit_6->setPlaceholderText(QCoreApplication::translate("userregistration", "\360\237\224\221Managerial Code", nullptr));
        label_2->setText(QCoreApplication::translate("userregistration", "<html><head/><body><p>Already have an account? <span style=\" color:#3b82f6;\">Sign In</span></p></body></html>", nullptr));
        lineEdit_2->setPlaceholderText(QCoreApplication::translate("userregistration", "\360\237\223\247Email", nullptr));
    } // retranslateUi

};

namespace Ui {
    class userregistration: public Ui_userregistration {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_USERREGISTRATION_H
