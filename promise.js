const doWorkPromise = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve([1, 4, 7]);
        //reject('Things went wrong!');
    }, 2000)
});

doWorkPromise.then((result)=> {
    console.log('Success: ', result);
}).catch((e)=> {
    console.log('Error: ', e);
})


//                                          fulfilled
//                                            /
//                                           /
//Promise --------------- Pending ---------->
//                                           \
//                                            \
//                                           rejected

const add = (a,b) => {
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            resolve(a+b)
        },2000)
    })
}

//add(1, 2).then((result) => {
//    console.log(result);
//    add(result,5).then((sum) => {
//        console.log(sum);
//    }).catch((e) => {
//        console.log(e);
//    })
//}).catch((e)=>{
//    console.log(e);
//})

add(1,1).then((sum) => {
    console.log(sum);
    return add(sum, 6)
}).then((sum) => {
    console.log(sum)
}).catch((e) => {
    console.log(e);
})
