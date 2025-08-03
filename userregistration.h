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
    ~userregistration();

private:
    Ui::userregistration *ui;
};

#endif // USERREGISTRATION_H
