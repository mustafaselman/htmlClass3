//promise object calback hell çözümü
//let myPromise = new Promise(function(myResolve,myReject){
//coding...
//myResolve(result value) //başarı durumunu gösterir
//myReject(error object) // hata durumu    
//})
//myPromise.then(
//function(value) //code is successful
//function(error) //code is not successfull
//)
// function myDisplayer(some){
//     console.log(some)
// }
// let myPromise = new Promise(function(myResolve,myReject){
//     let x = 1;
//     if (x == 0) {
//         myResolve("OK")
//     }
//     else {
//         myReject("Error")
//     }
// })
// myPromise.then(
//     function(value) {
//         myDisplayer(value)
//     },
//     function(error) {
//         myDisplayer(error)
//     }
// )
//alternatif promise tüketen taraf
// myPromise
// .then(function(value){myDisplayer(value)})
// .catch(function(error){myDisplayer(error)})
// .finally(myDisplayer("finally function"))

// let myPromise2 = new Promise(function(myResolve,myReject){
//     setTimeout(function(){myReject("I love you")},5000)
// })
// myPromise2.then(function(value){
//     console.log(myPromise2)
// })
// console.log(myPromise2)
// //üç farklı state var pending(bekleme),fulfilled(başarılı),rejected(başarısız)

//async ve await fonksiyonları
// function myFunction(){
//     return Promise.resolve("hello")
// }
// async function myFunction2(){
//     return "Hello"
// }
// //ikisi de aynı içerikler
// myFunction2().then(function(value){console.log("başarı" , value)},function(error){console.log("hata" , error)})

//await
// async function myDisplay(){
//     let myPromise = new Promise(function(resolve,reject){
//         setTimeout(function(){resolve("I love you")},3000)
//     })
//     console.log(await myPromise)
// }
// myDisplay()

// async function test(data){
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             if(data){
//                 resolve("bu bir değerdir")
//             }
//             else {
//                 reject("bu bir değer değildir")
//             }
//         },5000)
//     })
//     console.log("promise bekleniyor")
//     let response = await promise;
//     console.log(response)
//     console.log("promise bitti")
//     return response
// }
// test(null).then( resolve => console.log(resolve), reject => console.log(reject))

//DOM(document object model)
// document.getElementById("demo").innerHTML = "Hello world"

// for(let a in document.getElementsByTagName("p")){
//     document.getElementsByTagName("p")[a].innerHTML =  "Hello world"
// }

// document.getElementsByTagName("p")[1].innerHTML = "Hello world"

// document.getElementsByClassName("intro")[0].innerHTML = "hello world" 

//queryselector kullanmak istiyorsak classlar için . id ler için # işareti kullanılmalıdır.
// document.querySelectorAll("p.intro")[0].innerHTML = "hello world"
// let imageDOM = document.getElementById("image")
// imageDOM.src = "smiley.gif"
// imageDOM.width = "300"
// imageDOM.height = "300"

// function validateForm() {
    
//     let x = document.forms["myForm"]["fname"].value
//     if(x == ""){
//         // document.querySelectorAll("#alert")[0].innerHTML ="name must be filled out" 
//         alert("name must be filled out")
//     }
// }

//homework: 1 den 10 a kadar girince geçerli olan fonksiyonu yazınız

// document.getElementById("demo").style.color = "red"
// document.getElementById("demo2").style.backgroundColor = "yellow"
// console.log(document.getElementById("demo2"))

//using events
function changeColor() {
    let x = document.getElementById("id1").style.color = "red"
}

// function hide(){
//     let x = document.getElementById("p2").style.visibility = "hidden"
// }

// let hide = () => document.getElementById("p2").style.visibility = "hidden"

// function show(){
//     let x = document.getElementById("p2").style.visibility = "visible"
// }

// function changeText(id){
//     id.innerHTML = "Oooops"
// }

//onchange event
// function upperCase(){
//     const x = document.getElementById("fname");
//     x.value = x.value.toUpperCase();
// }

// function mOver(obj){
//     obj.innerHTML = "thank you"
//     obj.style.backgroundColor = "blue"
//     obj.style.color = "white"
// }
// function mOut(obj) {
//     obj.innerHTML = "mouse over me"
//     obj.style.backgroundColor = "red"
// }

// document.getElementById("myBtn").addEventListener("click",
// function(){
//     alert("Hello world")
// })

// let x = document.getElementById("myBtn")
// x.addEventListener("mouseover",myFunction)
// x.addEventListener("click",mySecondFunction)
// x.addEventListener("mouseout",myThirdFunction)

// function myFunction(){
//     document.getElementById("demo").innerHTML += "Moused over!<br>"
// }
// function mySecondFunction(){
//     document.getElementById("demo").innerHTML += "Clicked!<br>"
// }
// function myThirdFunction(){
//     document.getElementById("demo").innerHTML += "Moused out!<br>"
// }

//bubbling-capturing
//bubbling de önce en içteki
//capturing de önce en dıştaki
//false bubbling true capturing

// document.getElementById("myP1").addEventListener("click",
// function(){
//     alert("myP1")
// },false
// )
// document.getElementById("myDiv1").addEventListener(
//     "click",
//     function(){
//         alert("myDiv1")
//     },false
// )
// document.getElementById("myP2").addEventListener("click",
// function(){
//     alert("myP2")
// },true
// )
// document.getElementById("myDiv2").addEventListener(
//     "click",
//     function(){
//         alert("myDiv2")
//     },true
// )

// document.getElementById("myDIV").addEventListener("mousemove",myFunction)
// function myFunction(){
//     document.getElementById("demo").innerHTML = Math.random()
// }
// function removeHandler(){
//     document.getElementById("myDIV").removeEventListener("mousemove",myFunction)
// }