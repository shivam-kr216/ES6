//const square = function(x){
//    return x*x;
//}

const square = (x) => {
    return x * x;
}

const event = {
    name: 'Birthday party',

//    Arrow functions are bad for methods (function in class)
//    guestList: () => {
//        console.log(`This is a list of ${this.name}`);
//    }

    guestList: function () {
        console.log(`This is a list of ${this.name}`);
    }
}

console.log(square(4));
event.guestList();

