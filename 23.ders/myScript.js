// let text = "Hello world"
// console.log(text.charAt(0))
// console.log(text[0])
// console.log(text.length)
// console.log(text.charAt(text.length-1))
// console.log(text[text.length-1])
// console.log(text.slice(-1))

// // `` back-tics / template literals
// let text=`
// bu
// bir 
// textdir
// `
// let firstName = "Ali"
// let lastName = "Can"
// let text2 = `Welcome ${firstName + lastName}, ${lastName}`
// console.log(text2)

// let x = 100 / "elma"
// console.log(x)
// let x2 = 100 / 0
// console.log(x2)

// let x;
// console.log(x)

// let x = "10"
// let y = 20
// console.log(typeof y.toString())
// console.log(typeof Number(x))

// let z = 9.245
// console.log(z.toFixed(1))
// let a = 9
// console.log(a.toFixed(2))

// console.log(Number(true))
// console.log(Number(false))
// console.log(typeof Number("    23  ").toString())
// //trimstart-end(çıkarma) //padstart-end(ekleme)
// console.log(parseInt(z))
// console.log(z.toFixed(0))
// //aynı sonucu verir

//array

// const cars = ["fiat","volvo","opel"]
// console.log(cars[0])
// console.log(cars)
// console.log(cars[cars.length-1])
// console.log(cars.toString().split(","))

//sondan çıkarma işlemi
// let value = cars.pop()
// cars.pop()
// console.log(cars)
// console.log(value)
// let pushing = cars.push("BMW")
// console.log(cars , pushing)
// let value2 = cars.shift()
// console.log(cars, value2)
// let value3 = cars.unshift("volkswagen","ferrari")
// console.log(cars, value3)
// console.log(cars.toString())
// console.log(cars.join(" / "))
// const cars2 = ["car1","car2","car3"]
// const allCars = cars.concat(cars2,["car4"])
// console.log(allCars)
// const meyveler = ["elma","armut","mandalina","cilek","ayva","muz"]
// meyveler.splice(1,2,"çilek","ayva","muz")
// console.log(meyveler)
// let secmeMeyveler = meyveler.slice(-1)
// let secmeMeyveler2 = meyveler.slice(1,4)
// console.log(secmeMeyveler2)

//sort (sıralama)
// console.log(meyveler.sort())
// console.log(meyveler.reverse())
// const numbers = [1,100,20,45]
// console.log(numbers.sort(function(a,b){return a-b}))
// console.log(numbers.sort(function(a,b){return b-a}))

// const cars = [{type:"volvo", year:2016},{type:"fiat", year:2001},{type:"bmw", year:2010}]
// console.log(cars)
// console.log(cars.sort(function(a,b){return a.year-b.year}))

//itaration(döngüler)
// const numbers = [45,5,6,55,77]
// numbers.forEach(
//     function myFunction(value,index,array){
        
//         numbers[index] += 1 ; 
//         console.log(value)
//         console.log(index)
//         console.log(array)
//     }
// )

// console.log(numbers)
// function myFunction(value,index,array){
//     numbers[index] += 1
//     return value * 2 ;
// }

// const numbers2 =numbers.map(myFunction)
// console.log(numbers)

//map bir değer döndürür ve döndürdüğü değer her bir dizi elemanının değeridir. foreach ise eleman sayısınca yapılan döngülerde işlemler yapar
//map i daha çok dizi değerini alıp başka bir yerde kullanmak için uygularız fakat foreach de ise sadece fonksiyon içinde gerçekleştirilen işlemler vardır.

const numbers = [45,5,6,55,77]
const over18 = numbers.filter(filterFunc);
function filterFunc(val,ind,arr){
    return val > 18
}
console.log(over18)

let first = numbers.findIndex(findFunc)
function findFunc(val,ind,arr){
    return val < 18
}
console.log(first)