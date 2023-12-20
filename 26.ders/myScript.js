//object 

// const person = {
//     firstName: "ahmet",
//     lastName: "can"
// }
//(array için de geçerlidir)
// const x = person ;
// x.firstName = "mehmet"
// console.log(person)

// person = {firstName:"mehmet"}

// let sayi = 1;
// let sayi2 = sayi
// sayi2++;
// console.log(sayi)
//obje ve array referans tip olduğu için değişiklikler birbirni etkiler. fakat number string gibi içerikler value (değer) tip olduğu için birbirini etkilemez.

// const person = {
//     firstName: "ahmet",
//     lastName: "can"
// }
// // delete person.firstName
// console.log(person)
// console.log(Object.values(person))
// //values değerleri dizi olarak çıkartır
// console.log(Object.keys(person))
// //keys anahtarları dizi olarak çıkartır
// console.log(Object.entries(person))
// console.log(Object.entries(person)[1][1])
// console.log(Object.values(person)[1])

// let date = new Date()
// date.getDate()

//fonksiyonlar
// function myFunction(x,y){
//     console.log(y)
//     if (y === undefined) {
//         y = 2 ;
//     }
//     return x + y;
// }
// console.log(myFunction(5))

// function topla(x,y=2){
//     return x + y ;
// }
// console.log(topla(4))

// //rest parametresi

// function toplam(...args){
//     console.log(args)
//     let sum = 0 ;
//     for (let arg of args){
//         sum += arg ;
//     }
//     return sum;
// }
// console.log(toplam(2,3,4,5));

// //self-inkove

// // function self(){
// //     console.log("self-invoke")
// // }
// // self()

// (function self() {
//     console.log("self-invoke")
// })();

//class detail
//static function
// class Car {
//     constructor(name){
//         this.name = name
//     }
//     hello(){
//         console.log("hello")
//     }
//     static hello2(){
//         console.log("hello static func")
//     }
// }
// let car1 = new Car("ford")
// car1.hello()
// Car.hello2()

//class inheritance - kalıtım

// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     showInfos(){
//         console.log(`İsim: ${this.name} Yaş: ${this.age}`)
//     }
// }
// class Employee extends Person {
//     constructor(name,age,salary){
//         // this.name = name
//         // this.age = age
//         super(name,age)
//         this.salary = salary
//     }
//     //overriding (persondaki showinfos üzerine yazıldı)
//     showInfos(){
//         console.log(`İsim: ${this.name} Yaş: ${this.age} Salary: ${this.salary}`)
//     }
// }
// const emp = new Employee("MUstafa",23,2500)
// emp.showInfos()

//callback

// function display(message){
//     console.log(message)
// }
// function first(icerik){
//     display(icerik)
// }
// function second(){
//     display("goodbye")
// }
// first("burası yazmak istediğimiz yer")
// second()

// function display(message){
//     console.log(message)
// }
// function first(){
//     display("hello")
// }
// function second(){
//     display("goodbye")
// }
// second()
// first()

// function display(some){
//     console.log(some)
// }
// function calc(num1,num2){
//     let sum = num1 + num2
//     display(sum)
// }
// calc(3,5)

// function display(some){
//     console.log(some)
// }
// function calc(num1,num2){
//     let sum = num1 + num2
//     return sum;
// }
// let result = calc(3,5)
// display(result)

function display(some){
    console.log(some)
};
function calc(num1,num2, myCallback = () => {}){
    let sum = num1 + num2;
    myCallback(sum)
    return sum;
}
console.log(calc(4,5))