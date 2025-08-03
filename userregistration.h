#ifndef USERREGISTRATION_H
#define USERREGISTRATION_H

#include <QWidget>
#include "databasehandler.h"

namespace Ui {
class userregistration;
}

class userregistration : public QWidget
{
    Q_OBJECT

public:
    explicit userregistration(QWidget *parent = nullptr);
    void sethandler(databasehandler* address);
    ~userregistration();


private slots:
    void on_pushButton_clicked();

private:
    Ui::userregistration *ui;
    databasehandler* registerhandler;
};

#endif // USERREGISTRATION_H
