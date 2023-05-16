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

console.log(Math.floor(254.45)) // Virgülden sonrasını silmek için math.floor kütüphanesini kullanıyoruz