const loopWithRange = (a,b) =>{
    let result = []
    for (let i = a; i <= b; i++) {
        result.push(i);
    }
    return result.join(',');
}

console.log(loopWithRange(4,8));