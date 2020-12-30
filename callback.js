setTimeout( () => {
    console.log('2 seconds are up!')
}, 0)

//const names = ['Andrew', 'Shivam', 'Jes'];
//const shortNames = names.filter( name => {
//    return name.length >= 4
//})
//console.log(shortNames);


//This code will return undefined as value of data
const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        
        //console.log('data: ' + data)
        //return data;
        //CALLING THE FUNCTION
        callback(data);
    }, 1000)
}

//PASSING THE FUNCTION
geocode('Dhanbad', (data) => {
//    console.log('abc');
    console.log(data);
//    console.log('def');
});



const add = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1 + num2)
    }, 2000)
};

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
