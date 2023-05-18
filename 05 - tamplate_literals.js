let username = "Mete";
let surname = "Tatar";
const domain = "hotmail.com";

let email = username + "-" + surname + "@" + domain;

let literals = 
`
Merhaba ${username} Sitemize hoşgeldin...
e-mail adresin = ${email}
e-mail adresinin uzunluğu = ${email.length}
Borcunuz = ${(6+9)*6} ₺
Saat = ${new Date().getHours()}
`  

console.log(literals);