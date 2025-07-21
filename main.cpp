#include "login.h"
#include <QObject>
#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);

    login loginScreen;

    loginScreen.show();
    return a.exec();
}
