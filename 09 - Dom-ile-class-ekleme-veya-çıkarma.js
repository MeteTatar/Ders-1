// dom ile class bilgisi ekleme veya çıkarma

let jstyle = document.querySelector("#jstyle")

jstyle.classList.add("text-green")
jstyle.classList.add("title" , "text-blue" , "swm" , "rvb") // birden fazla class ekleme

jstyle.classList.remove("title") 
jstyle.classList.remove("text-blue" , "swm" , "rvb") // birden fazla class silme

