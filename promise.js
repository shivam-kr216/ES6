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