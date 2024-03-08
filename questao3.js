/* 
a) 1, 3, 5, 7, ___

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____

d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2,10, 12, 16, 17, 18, 19, ____ 
*/

// a) = 9

let a = [1, 3, 5, 7];
let proximoA = a[a.length - 1] + 2;

console.log(proximoA)

// b) = 128

let b = [2, 4, 8, 16, 32, 64];
let proximoB = b[b.length - 1] * 2;

console.log(proximoB)

// c) = 49

let c = [0, 1, 4, 9, 16, 25, 36];
let proximoC = c[c.length - 1] + (c.length * 6 - 1);

console.log(proximoC)

// d) = 81

let d = [4, 16, 36, 64];
let proximoD = Math.pow(Math.sqrt(d[d.length - 1]) + 1, 2);

console.log(proximoD)

// e) = 13

let e = [1, 2, 3, 5, 8];
let proximoE = e[e.length - 1] + e[e.length - 2];

console.log(proximoE)

// f) = 200?

let f = [2,10, 12, 16, 17, 18, 19];

/* Não entendi muito bem a lógica dessa letra F, mas creio que seja números que comecem com D? */