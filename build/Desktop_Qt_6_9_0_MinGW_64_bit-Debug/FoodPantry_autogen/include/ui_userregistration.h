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
    QLineEdit *UsernameEdit;
    QLineEdit *PasswordEdit;
    QLabel *registerLabel;
    QPushButton *pushButton;
    QLineEdit *FullNameEdit;
    QLineEdit *ConfirmEdit;
    QLineEdit *CodeEdit;
    QLabel *label_2;
    QLineEdit *EmailEdit;

    void setupUi(QWidget *userregistration)
    {
        if (userregistration->objectName().isEmpty())
            userregistration->setObjectName("userregistration");
        userregistration->resize(400, 600);
        userregistration->setMinimumSize(QSize(400, 600));
        UsernameEdit = new QLineEdit(userregistration);
        UsernameEdit->setObjectName("UsernameEdit");
        UsernameEdit->setGeometry(QRect(10, 260, 378, 28));
        PasswordEdit = new QLineEdit(userregistration);
        PasswordEdit->setObjectName("PasswordEdit");
        PasswordEdit->setGeometry(QRect(10, 295, 378, 28));
        PasswordEdit->setEchoMode(QLineEdit::EchoMode::Password);
        registerLabel = new QLabel(userregistration);
        registerLabel->setObjectName("registerLabel");
        registerLabel->setGeometry(QRect(10, 20, 378, 163));
        pushButton = new QPushButton(userregistration);
        pushButton->setObjectName("pushButton");
        pushButton->setGeometry(QRect(10, 400, 378, 29));
        FullNameEdit = new QLineEdit(userregistration);
        FullNameEdit->setObjectName("FullNameEdit");
        FullNameEdit->setGeometry(QRect(10, 190, 378, 28));
        ConfirmEdit = new QLineEdit(userregistration);
        ConfirmEdit->setObjectName("ConfirmEdit");
        ConfirmEdit->setGeometry(QRect(10, 330, 378, 28));
        ConfirmEdit->setEchoMode(QLineEdit::EchoMode::Password);
        CodeEdit = new QLineEdit(userregistration);
        CodeEdit->setObjectName("CodeEdit");
        CodeEdit->setGeometry(QRect(10, 365, 378, 28));
        CodeEdit->setEchoMode(QLineEdit::EchoMode::Password);
        label_2 = new QLabel(userregistration);
        label_2->setObjectName("label_2");
        label_2->setGeometry(QRect(10, 436, 378, 162));
        EmailEdit = new QLineEdit(userregistration);
        EmailEdit->setObjectName("EmailEdit");
        EmailEdit->setGeometry(QRect(10, 225, 378, 28));

        retranslateUi(userregistration);

        QMetaObject::connectSlotsByName(userregistration);
    } // setupUi

    void retranslateUi(QWidget *userregistration)
    {
        userregistration->setWindowTitle(QCoreApplication::translate("userregistration", "Form", nullptr));
        UsernameEdit->setPlaceholderText(QCoreApplication::translate("userregistration", "\360\237\221\244Username", nullptr));
        PasswordEdit->setPlaceholderText(QCoreApplication::translate("userregistration", "\360\237\224\222Password", nullptr));
        registerLabel->setText(QCoreApplication::translate("userregistration", "\360\237\223\246Register", nullptr));
        pushButton->setText(QCoreApplication::translate("userregistration", "Create Account", nullptr));
        FullNameEdit->setPlaceholderText(QCoreApplication::translate("userregistration", "\360\237\221\244Full Name", nullptr));
        ConfirmEdit->setPlaceholderText(QCoreApplication::translate("userregistration", "\360\237\224\222Confirm Password", nullptr));
        CodeEdit->setPlaceholderText(QCoreApplication::translate("userregistration", "\360\237\224\221Managerial Code", nullptr));
        label_2->setText(QCoreApplication::translate("userregistration", "<html><head/><body><p>Already have an account? <span style=\" color:#3b82f6;\">Sign In</span></p></body></html>", nullptr));
        EmailEdit->setPlaceholderText(QCoreApplication::translate("userregistration", "\360\237\223\247Email", nullptr));
    } // retranslateUi

};

namespace Ui {
    class userregistration: public Ui_userregistration {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_USERREGISTRATION_H
