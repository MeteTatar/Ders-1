// DOM içinden oge seçimi

let title = document.getElementById('title')
title.innerHTML = "dom içi bilgi değiştirme"
console.log(title.innerHTML)

let link = document.querySelector("#kodluyoruzLink")
link.innerHTML += " değişti"
link.style.color = "red"
link.classList.add("btn")