// 0 ve 1 i anlamak

let isActive = false // 0
isActive = true // 1 yani burada isActive değişkenini doğruladık

console.log(isActive)

Boolean("11") // true içerisinde bilgi var
Boolean("0") // true içerisinde bilgi var
Boolean("") // false İçerisinde bilgi yok ise false

// 0, -0, 0.1

Boolean(0) // false
Boolean(-0) // false
Boolean(-0,1) // true
Boolean(0 === 0) // true
