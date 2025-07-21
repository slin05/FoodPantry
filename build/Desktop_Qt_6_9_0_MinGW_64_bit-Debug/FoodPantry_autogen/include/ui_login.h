/********************************************************************************
** Form generated from reading UI file 'login.ui'
**
** Created by: Qt User Interface Compiler version 6.9.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_LOGIN_H
#define UI_LOGIN_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QDialog>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QPushButton>

QT_BEGIN_NAMESPACE

class Ui_login
{
public:
    QLineEdit *lineEdit_username;
    QLineEdit *lineEdit_password;
    QLabel *label;
    QLabel *label_2;
    QPushButton *pushButton;
    QLabel *label_error;

    void setupUi(QDialog *login)
    {
        if (login->objectName().isEmpty())
            login->setObjectName("login");
        login->resize(400, 300);
        lineEdit_username = new QLineEdit(login);
        lineEdit_username->setObjectName("lineEdit_username");
        lineEdit_username->setGeometry(QRect(170, 80, 161, 28));
        lineEdit_password = new QLineEdit(login);
        lineEdit_password->setObjectName("lineEdit_password");
        lineEdit_password->setGeometry(QRect(170, 140, 161, 28));
        label = new QLabel(login);
        label->setObjectName("label");
        label->setGeometry(QRect(90, 80, 71, 20));
        label_2 = new QLabel(login);
        label_2->setObjectName("label_2");
        label_2->setGeometry(QRect(90, 140, 71, 20));
        pushButton = new QPushButton(login);
        pushButton->setObjectName("pushButton");
        pushButton->setGeometry(QRect(170, 200, 83, 29));
        label_error = new QLabel(login);
        label_error->setObjectName("label_error");
        label_error->setGeometry(QRect(90, 240, 251, 20));

        retranslateUi(login);

        QMetaObject::connectSlotsByName(login);
    } // setupUi

    void retranslateUi(QDialog *login)
    {
        login->setWindowTitle(QCoreApplication::translate("login", "Dialog", nullptr));
        label->setText(QCoreApplication::translate("login", "Username:", nullptr));
        label_2->setText(QCoreApplication::translate("login", "Password:", nullptr));
        pushButton->setText(QCoreApplication::translate("login", "Login", nullptr));
        label_error->setText(QString());
    } // retranslateUi

};

namespace Ui {
    class login: public Ui_login {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_LOGIN_H
