function verificaFibonacci(numero){
    a = 0, b = 1
    while(b < numero){
        let temp = b;
        b = a + b;
        a = temp;
    }

    if(b === numero){
        return true
    } else {
        return false
    }
}

console.log(verificaFibonacci(2)); //true
console.log(verificaFibonacci(12)); //false

