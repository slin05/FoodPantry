#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QJsonArray>
#include <QCheckBox>
#include "databasehandler.h"

QT_BEGIN_NAMESPACE
namespace Ui {
class MainWindow;
}
QT_END_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();
    void refreshTable();
    databasehandler dbhandler;

private slots:

    void on_SaveProductButton_clicked();

    void on_tabWidget_tabBarClicked(int index);

    void on_RemoveButton_clicked();

private:
    Ui::MainWindow *ui;
};
#endif // MAINWINDOW_H
