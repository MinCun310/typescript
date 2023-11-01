let products = [
    { name: 'phone', price: 500 },
    { name: 'laptop', price: 700 },
    { name: 'macbook', price: 1000 }
]
let discount = 0
let product = products[1];
switch (product.name) {
    case 'phone':
        discount = 10;
        break;
    case 'laptop':
        discount = 20;
        break;
    case 'macbook':
        discount = 30;
        break;
}
console.log(`there is a ${discount}% on ${product.name}.`);