// function job() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('hello world'), 5000)
//     });
// }

// let str = job();

function job(bool) {
    return new Promise((resolve, reject) => {
        if(bool) {setTimeout(() => resolve('hello world'), 5000)}
        else {setTimeout(() => reject('Goodbye, folks!'), 2000)}
    })
}


let str = job(true);

console.log('Log before .then statement. Str status: ', str);
str.then((data) => {
    console.log(data);
}).catch((data) => {
    console.log(data);
})

console.log('Second log, str status: ', str);

console.log('Third log, str status: ', str);





