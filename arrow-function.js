//const square = function(x){
//    return x*x;
//}

const square = (x) => {
    return x * x;
}

const event = {
    name: 'Birthday party',

//    Arrow function will not work properly with `this.name`
//    guestList: () => {
//        console.log(`This is a list of ${this.name}`);
//    }

    guestList: function () {
        console.log(`This is a list of ${this.name}`);
    }
}

console.log(square(4));
event.guestList();

