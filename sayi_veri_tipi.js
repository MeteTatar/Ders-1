// Artırma işlemi

let counter = 1000;

counter = counter + 5;
counter += 10;
counter ++;

console.log(counter);

// Düşürme işlemi

counter = counter - 5;
counter -= 10;
counter --;

console.log(counter);

// Çarpma

counter *= 5;

console.log(counter)

// Bölme

counter /= 4;

console.log(counter)

// İşlem Önceliği

console.log(2 + 3 * 10)
console.log((2 + 3 ) * 10)

// Mod alma // Tek mi çift mi ?

console.log("Kalan sayı = ",15 % 2) // kalan 1 ise tek 0 ise çift

// Üs aldırma

console.log("2 üzeri 4 =",2 ** 4)

// Aşağı yuvarlama

console.log("Aşağı yuvarlama işlemi = ",Math.floor(254.45)) // 254 kısmının virgülün altını alıyor

// Yukarı yuvarlama

console.log("Yukarı yuvarlama işlemi = ",Math.ceil(2232.76)) // 2232 kısmını virgülün üstünü alıyor yani 2233

// En yakına yuvarlama

console.log("Yakın yuvarlama işlemi = ", Math.round(874.99)) // 874 ün virgülden sonra yakın olan tam sayıya yuvarlama