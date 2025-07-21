#include "product.h"

Product::Product(QString item_name, int item_number, int initial_on_hand, int min_stock, int purchase_limit, QPixmap item_image) {
    itemName = item_name;
    itemNumber = item_number;

}
void Product::setItemNumber(int new_number){
    itemNumber = new_number;
}

int Product::getItemNumber(){
    return itemNumber;
}

void Product::setPurchaseLimit(int new_limit){
    purchaseLimit = new_limit;
}

int Product::getPurchaseLimit(){
    return purchaseLimit;
}

void Product::setMinStock(int new_min_stock){
    stockMin = new_min_stock;
}

int Product::getMinStock(){
    return stockMin;
}

void Product::setItemName(QString new_name){
    itemName = new_name;
}

QString Product::getItemName(){
    return itemName;
}

// There shouldn't really be a reason to change the image so there isn't a setter function, but this can be easily implemented.

QPixmap Product::getPixmap(){
    return itemImage;
}

int Product::getAmount(){
    return onHand;
}


void Product::increaseSet(int number_to_add){
    onHand += number_to_add;
}

void Product::removeSet(int number_to_remove){
    onHand += number_to_remove;
}
