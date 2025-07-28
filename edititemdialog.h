#ifndef EDITITEMDIALOG_H
#define EDITITEMDIALOG_H

#include <QDialog>

namespace Ui {
class edititemdialog;
}

class edititemdialog : public QDialog
{
    Q_OBJECT

public:
    explicit edititemdialog(QWidget *parent = nullptr);
    ~edititemdialog();

private:
    Ui::edititemdialog *ui;
};

#endif // EDITITEMDIALOG_H
