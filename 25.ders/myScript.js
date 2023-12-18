//for in (key ve index değerlerini verir)
// const person = {
//     fname:"Jhon", lname:"Doe" , age:25
// }
// let text = "";
// // person["fname"]="Jhon" person.fname="Jhon"
// for (let a in person){
//     console.log(a)
//     console.log(person[a])
//     console.log(`${a} nın değeri ${person[a]}`)
//     text += person[a]
// }
// console.log(text)

// const numbers = [45,23,34,67]
// let txt=""
// for(let x in numbers){
//     console.log(x)
//     console.log(numbers[x])
// }
// // for in tabiri key yada index değerlerini döndürür
// numbers.forEach(myFunction)
// function myFunction (value,index,array){
//     console.log(value,index,array)
// }
// let language = "Javascript"
// for (let x in language){
//     console.log(x)
//     console.log(language[x])
// }

//for of (value değerlerini verir)
// const cars = ["fiat","opel","bmw"]
// for (let x of cars){
//     console.log(x)
// }
// let language = "javascript"
// for (let x of language) {
//     console.log(x)
// }
// //eğer biz objede değerlere erişmek istiyorsak for in kullanmalıyız. (for in obje için özelleşmiş bir döngüdür)
// let person = {fname:"ahmet", lname:"can"}
// for(let x of person){
//     console.log(x)
// }

//while //önce kontrol sonra yaz
// let i = 99 ;
// while(i<10){
//     console.log(i);
//     i++;
// }

// //do-while //koşuldan önce ne olursa olsun bir kere yaz //önce yap sonra kontrol et
// let j = 99 ;
// do {
//     console.log(j);
//     j++;
// }
// while (j < 10)

//break ve continue
//döngü içerisinde kullanılır
//break döngüden atlar (döngüyle işimiz bitti)
//continue döngüden atlar fakat bir sonraki değer ile devam eder

// for(let i = 0 ; i < 10 ; i++){
//     if(i === 3) {
//         break;
//     }
//     console.log(i)
// }

// for(let i = 0 ; i < 10 ; i++){
//     if(i === 3 || i === 7) {
//         console.log("hatalı değer bulundu")
//         continue;
//     }
//     console.log(i)
// }

// try-catch-finally hata yönetim araçları

// try {
//     consle.log("mesaj içeriği sağlıklı")
// } 
// catch(error){
//     console.log(error.message)
// }

// let x = "  ";
// try {
//     if(x.trim() == "") throw {message:"boş içerik hatası"}
// }
// catch(err){
//     console.log(err.message)
// }
// finally {
//     console.log("try catch içeriği sonlandı.")
// }

// let x = "18"
// try {
//     x = Number(x);
//     if(x<5) throw "çok küçük, sayı 5 den büyük olmalıdır"
//     if(x>10) throw "çok büyük, sayı 10 dan küçük olmalı"
//     console.log(x)
// }
// catch (err) {
//     console.log(err)
// }
// finally {
//     console.log("kod bloğu hatasız çalıştı")
// }

//this kullanımı
// console.log(this)
// const person = {
//     name: "mustafa",
//     fname:"önal",
//     description: function () {
//         return this;
//     },
//     showName: function () {
//         return this.name
//     }
// }
// console.log(person.description())
// console.log(person.showName())

//constructor
// const person1 = {
//     name: "ahmet" , age:24 
// }
// const person2 = {
//     name: "mehmet" , age:24 
// }

// function Person(first,last,age,eye){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye ;
//     this.showInfos = function () {
//         console.log(this.firstName," ", this.lastName," ", this.age)
//     }
// }
// const person1 = new Person("ahmet","bay",23,"brown")
// person1.showInfos()
// console.log(person1.eyeColor)
// console.log(person1)
// console.log(person1.showInfos)

//es6 sonrası kurucu fonksiyonlar class yapısına geçmiştir.

// class Person {
//     constructor(first,last,age,eye){
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.eyeColor = eye;
//     }
//     showInfos() {
//         console.log(this.firstName, " ", this.lastName, " ", this.age)
//     }
// }

// const person2 = new Person("mustafa","baş",23,"black")
// console.log(person2)
// person2.showInfos()

// class Car {
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
//     age(x){
//         return x - this.year
//     }
// }
// let date = new Date()
// let year = date.getFullYear();
// let myCar = new Car("ford",2014)
// console.log(myCar.name + " " + " " + myCar.year + " " + myCar.age(year))

//arrow func - modifiye edilmiş fonksiyon

// let hello;
// hello = function () {
//     return "Hello world"
// }
// console.log(hello())

// let hello;
// hello = () => "Hello world"

// console.log(hello())


// let hello;
// hello = (value) => "Hello world" + value

// console.log(hello(" and turkey"))

// const person = {
//     firstName : "ahmet",
//     lastName: "can",
//     fullName: function() {
//         return this.firstName
//     },
//     fullName2: () => this.firstName
// }
// console.log(person.fullName())
// console.log(person.fullName2())
//arrow fonksiyonunda this global içeriği gösterir
//normal fonksiyon kendi obje içeriğini gösterir

//json(javascript object notation) 
//nesneden farkı name kısmı çift tırnak fakat özünde bir text formatı
let text = '{"firstName":"Ahmet","lastName":"Can"}'
console.log(text)
console.log(JSON.parse(text))
console.log(JSON.parse(text).firstName) //json çözümleme
console.log(JSON.stringify(JSON.parse(text))) //json haline getirme
let text2 = '{"employees":[{"firstName":"Ahmet","lastName":"Can"},{"firstName":"mahmut","lastName":"Can"},{"firstName":"fırat","lastName":"Can"}]}'
console.log(JSON.parse(text2))

//ödev : ben ekrana "fırat can" yazdırmak istiyorum yukarıdaki json verisi ile nasıl yazarım ?