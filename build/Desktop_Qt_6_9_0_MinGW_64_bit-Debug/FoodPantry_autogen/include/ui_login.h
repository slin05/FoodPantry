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
#include <QtWidgets/QVBoxLayout>

QT_BEGIN_NAMESPACE

class Ui_login
{
public:
    QVBoxLayout *verticalLayout_4;
    QLabel *label_error;
    QLabel *label;
    QLineEdit *lineEdit_username;
    QLineEdit *lineEdit_password;
    QPushButton *pushButton;
    QLabel *label_2;

    void setupUi(QDialog *login)
    {
        if (login->objectName().isEmpty())
            login->setObjectName("login");
        login->resize(423, 416);
        login->setMinimumSize(QSize(400, 300));
        verticalLayout_4 = new QVBoxLayout(login);
        verticalLayout_4->setObjectName("verticalLayout_4");
        label_error = new QLabel(login);
        label_error->setObjectName("label_error");

        verticalLayout_4->addWidget(label_error);

        label = new QLabel(login);
        label->setObjectName("label");

        verticalLayout_4->addWidget(label);

        lineEdit_username = new QLineEdit(login);
        lineEdit_username->setObjectName("lineEdit_username");

        verticalLayout_4->addWidget(lineEdit_username);

        lineEdit_password = new QLineEdit(login);
        lineEdit_password->setObjectName("lineEdit_password");

        verticalLayout_4->addWidget(lineEdit_password);

        pushButton = new QPushButton(login);
        pushButton->setObjectName("pushButton");

        verticalLayout_4->addWidget(pushButton);

        label_2 = new QLabel(login);
        label_2->setObjectName("label_2");

        verticalLayout_4->addWidget(label_2);


        retranslateUi(login);

        QMetaObject::connectSlotsByName(login);
    } // setupUi

    void retranslateUi(QDialog *login)
    {
        login->setWindowTitle(QCoreApplication::translate("login", "Login", nullptr));
        label_error->setText(QString());
        label->setText(QCoreApplication::translate("login", "\360\237\223\246Inventory", nullptr));
        lineEdit_username->setPlaceholderText(QCoreApplication::translate("login", "\360\237\221\244Email", nullptr));
        lineEdit_password->setPlaceholderText(QCoreApplication::translate("login", "\360\237\224\222Password", nullptr));
        pushButton->setText(QCoreApplication::translate("login", "Sign In", nullptr));
        label_2->setText(QCoreApplication::translate("login", "<html><head/><body><p>Register new user <a href=\"google.com\"><span style=\" text-decoration: underline; color:#007af4;\">Here</span></a></p></body></html>", nullptr));
    } // retranslateUi

};

namespace Ui {
    class login: public Ui_login {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_LOGIN_H
