#ifndef PRODUCT_H
#define PRODUCT_H

#include <QPixmap>

/* Products are food items that each have specific information that will be
transmitted / received from the server.
*/

class Product
{
public:
    Product(QString item_name, int item_number, int initial_on_hand, int min_stock, int purchase_limit, QPixmap item_image);
    ~Product();

    void setItemNumber(int new_number);
    int getItemNumber();

    void setPurchaseLimit(int new_limit);
    int getPurchaseLimit();

    void setMinStock(int new_min_stock);
    int getMinStock();

    void setItemName(QString new_name);
    QString getItemName();

    QPixmap getPixmap();

    int getAmount();

    void removeSet(int number_to_remove);
    void increaseSet(int number_to_add);


private:
    int itemNumber;
    int onHand;
    int stockMin;
    int purchaseLimit;

    QString itemName;
    // Note that in order for the item image to be displayed it must be loaded by a QLabel.
    QPixmap itemImage;


};

#endif // PRODUCT_H
