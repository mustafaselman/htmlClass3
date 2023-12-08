// operators

// let x = 6 ;
// let y = 4 ;
// let z = x % y ;
// console.log(z)

// let x = 2 ;
// let y = 5 ;
// let z = x ** y ;
// console.log(z)

// let x = (100 + 50) * 3
// console.log(x);

// let x = 5 ;
// // x = x + 3 ;
// x += 3
// console.log(x)
// x += 6
// console.log(x)
// ++x;
// console.log(x)
// x--;
// console.log(x)

// let text1 = "mustafa"
// let text2 = "önal"
// let text3 = text1 + " " + text2
// console.log(text3)
// let text4 = " frontend developer"
// text3 += text4
// console.log(text3)

// let m1 = "5" + "4"
// console.log(m1)
// let m2 = "5" + 3 + 4
// console.log(m2)
// let m3 = "5" + 3
// console.log(m3)

//data_types

//numbers
// let length = 16
// let weight = 7.5

// //string
// let name = "mustafa"
// let color = 'red'

// //boolean
// let x = true;
// let y = false;

// //object
// const person = {firstName:"John",age:25}

// //array
// const cars = ["volvo","audi",{name:"audi",age:2}]

// // console.log(cars[2].name)

// // person.firstName = "ahmet" ;
// // console.log(person)

// const date = new Date("2022-03-25 01:00:00")
// console.log(date)

// let x2;
// console.log(x2)

// let bigNumber = 123e5
// console.log(typeof bigNumber)

//functions

// function myFunction(parameter1,parameter2){code block }
// myFunction(argument1,argument2)

// let a = function () {}

// function topla(sayi1,sayi2){
//     return sayi1 + sayi2 
// }
// console.log(topla(3,4))
// console.log(topla(7,9))
// console.log(topla(7,11))

// function toCelcius(fahrenheit){
//     return fahrenheit + " fahrenheit = " + ((5/9) * (fahrenheit - 32)) + " celcius'dur" 
// }
// console.log(toCelcius(126))

//object


function person2(){
    const person = {
        firstName: "Mustafa",
        lastName: "Önal",
    age: 50,
    eyeColor: "blue"
};
console.log(person.firstName)
console.log(person["firstName"])
}

person2();

function person3(firstName,lastName,age,eyeColor){
    const personInfo = {
        firstNameValue: firstName,
        lastNameValue: lastName,
        ageValue: age,
        eyeColorValue: eyeColor
    }
    console.log(personInfo)
}

person3("ahmet","çelik",23,"brown")
person3("ayşe","yılmaz",23,"black")


const person = {
    firstName: "Mustafa",
    lastName: "Önal",
    age: 50,
    eyeColor: "blue",
    fullName: function fullNameFunc() {return this.firstName + " " + this.lastName}
};
console.log(person.firstName)
console.log(person["firstName"])
console.log(person.fullName())