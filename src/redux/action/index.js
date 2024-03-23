// Add product to cart
export function addItem(product) {
    return {
        type: "ADDITEM",
        payload: product,
    };
}

// Delete product from cart
export function delItem(product) {
    return {
        type: "DELITEM",
        payload: product,
    };
}