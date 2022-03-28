const calculator = {
    plus: (a,b)=>{
        return(a+b);
    },
    minus:(a,b)=>{
        return(a-b);
    },
    times:(a,b)=>{
        return(a*b);
    },
    divide:(a,b)=>{
        return(a/b);
    },
    power:(a,b)=>{
        return(a**b);
    }
}

console.log(calculator.plus(2,3));
console.log(calculator.minus(2,3));
console.log(calculator.times(2,3));
console.log(calculator.divide(2,3));
console.log(calculator.power(2,3));