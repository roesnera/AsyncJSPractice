function delayedHello(num = 200000000) {
    let i = 0;
    do{
        i++;
    } while(i < num);
    console.log('Hello world!');
}

delayedHello(7000000000);
console.log('Second log call.');
console.log('Third log call.');