// This will find my items in the inventory.
function findItems(codes) {
    let results = items.find((item) => item.codes === codes);
    return results;
}
// This is checkout cart.
function checkoutCart() {
    const purchase = new Shop(cart);
    alert('The total amount is $' + purchase.obtainSubTotal() + '. Thank you for your business!');
}
// My questioning cart to put in request the order .
function shopping() {
    let codes = prompt("Enter your item code: ( 00666, 00211, 00420");
    let chosenItem = findItems(codes);
    // This is the selecting items to see if is available or not.
    if (chosenItem !== undefined) {
        cart.push(chosenItem);
        alert('✅ ' + chosenItem.type + ' added to the cart.🛒 🤑');

        let answer = confirm("Do you wish to add another item to your cart? 🛒");
        if (answer === true) {
            shopping();
        } else {
            checkoutCart();
        }
    } else {
        alert('⛔️ Error wrong code entered. \n⚠️  Refresh page to start all over.');
    }
}
// callout function
shopping();
