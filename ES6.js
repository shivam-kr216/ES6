//OBJECT PROPERTY SHORTHAND

const name = 'Shivam';
const userAge = 21;
const user = {
    name,
    age: userAge,
    location: 'Jharkhand'
}
console.log(user);

//Desturcturing
const product = {
    label: 'Red book',
    price: 3,
    stock: 201,
    rating: 5
}
const {label: productLabel , price, stock, rating=5} = product;
console.log(productLabel + ' ' + price + ' ' + stock + ' ' + rating)

const transaction = (type, { label, stock }) => {
    console.log(type + ' ' + label + ' ' + stock);
}
transaction('order', product);

