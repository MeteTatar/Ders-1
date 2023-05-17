// Değişken türü öğrenme

let numara = 123;
let yazinum = "123";
let Password = true;

console.log("Numara = ", typeof(numara));

console.log("Yazinum = ", typeof(yazinum));

console.log("Password = ", typeof(Password));

// String'i int'e dönüştürme

no = "150";
no = parseInt(no);
console.log("No 1 = ",no , "\nTürü = ", typeof(no));

no2 = "256px"
no2 = parseInt(no2);
console.log("No 2 = ", no2 , "\nTürü = ", typeof(no2));

no3 = "256px"
no3 = Number(no3);
console.log("No 3 = ", no3 , "\nTürü = ", typeof(no3)); // number sadece sayısal değerleri dönüştürmek için, yanında başka hiçbir karakter harf olmamalı

no4 = "356px"
no4 = parseFloat(no4);
console.log("No 4 = ", no4 , "\nTürü = ", typeof(no4));

// int'i string'e dönüştürme

no5 = 456;
no5 = no5.toString();
console.log("No 5 = " , no5 , "\nTürü = " , typeof(no5));