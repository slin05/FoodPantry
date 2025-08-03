#include "login.h"
#include <QObject>
#include <QFile>
#include <QTextStream>
#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);

    // Load the style sheet
    QFile file(":/stylesheets/styles.qss");
    if (file.open(QFile::ReadOnly | QFile::Text)) {
        QTextStream in(&file);
        QString style = in.readAll();
        a.setStyleSheet(style);
    }

    login loginScreen;
    loginScreen.show();

    return a.exec();
}
