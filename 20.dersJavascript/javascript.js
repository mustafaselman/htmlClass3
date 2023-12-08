/* function myFunction3() {
    document.getElementById("demo").innerHTML = "External script çalıştı"
 }

 */
// burası tek satırlık yorum

//x,y,z variables

var x = 5 ;
x = x + 5 ;
var y = 6 ;
var z = x + y ;
console.log(z)

// const değişmeyen ifadeler için kullanılır
const price1 = 5;
const price2 = 6;
let total = price1 + price2
// total = 40;

console.log(total)
console.log(price1 == price1)

const pi = 3.14 ;
let person = "Mustafa"
console.log(person)

var carName1;
let carName2;
carName2 = "Volvo"
let carName3 = "Mercedes"
console.log(carName2)
let person4 = "ahmet", carName4 = "Renoult", price4 = 200 ;


let carName = "Volvo"

var carName5 = "Volvo";
var carName5 = "Fiat";
console.log(carName5)

let a1 = 2 ;
{
    let a1 = 5 ;
    console.log(a1)
}
console.log(a1)

{
    var a2 = 3;
    console.log(a2)
}
var a2 = 88;
console.log(a2)

{
   carName6 = "BMW" 
}
carName6 = "toyota"
console.log(carName6)

// var carName6;
// let carName6;


// console.log(carName6)

// dizi []
const cars = ["fiat","toyota","mercedes"]
const numbers = [1,2,3,4,5,6.23]
// cars = 3
cars[2]= "BMW"
console.log(cars[2])
console.log(cars)
// object {}
const car1 = {type:"Fiat", model:"500", color:"white", age:15}
car1.color = "red"
console.log(car1.color)

