const add = (a,b) => {
    console.log('abc');
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            if(a<0 || b<0){
                return reject('Something went wrong!');
            }
            resolve(a+b)
        },2000)
    })
}

const doWork = async () => {
    const res = await add(1, 99);
    const res1 = await add(res+1, 99);
    return res1;
    //console.log('def');
    //return res;
    //throw new Error('Something went wrong!');
    //return 'Shivam';
}


doWork().then((result) => {
    console.log(result);
}).catch((e) => {
    console.log('e', e);
})

//console.log('hhhh')