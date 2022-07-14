const bilGanjil = (num) => {
    let result = [];
    for(let i = 1; i < num; i++) {
        if(i % 2 !== 0){
            result.push(i);
        }
    }
    return result;
}

console.log(bilGanjil(100))