let fname = "Mete";
let sname = "Tatar";
const tc = 3255435346;
let email = "mete-tatar@hotmail.com"

// string karakter uzunluğu

console.log(fname.length);

// belirli karakteri bulma

console.log(sname[4])
console.log(sname.charAt(2))

// büyük - küçük harf

let sehir = "Gaziantep";
sehir = sehir.toUpperCase()
console.log(sehir)

sehir = sehir.toLowerCase()
console.log(sehir);

// string içerisinde istediğim bilgi var mı ?

console.log(email.includes("@"))

// değişken içerisindeki bilgi değiştirme

email = email.replace("hotmail.com","gmail.com")
console.log(email)

// belirli bir yere kadar alma

let domain = email.slice(email.search("@") + 1)
console.log(domain)

// istediğim bilgi ile başladımı bitti mi ? -startswidth endswidth

console.log(email.endsWith("gmail.com"));

// ilk harf büyük yapma

n1 = "mete"
s1 = "tatar"
let fullname =`${n1[0].toUpperCase()}${n1.slice(1).toLowerCase()}`;

console.log(fullname);

