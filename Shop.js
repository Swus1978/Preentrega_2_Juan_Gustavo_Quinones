// This is a class that will be adding all my objectives 
class Shop {
    constructor(shoppingCart) {
        this.cart = shoppingCart;
    }
    // This is to get the sub total for the cart.
    obtainSubTotal() {
        if (this.cart.length > 0) {
            return this.cart.reduce((acc, item) => acc + item.price, 0);
        }
        return 0;
    }
}
