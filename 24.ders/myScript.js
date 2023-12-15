//date object 
// const myDate = new Date()
// console.log(myDate)
// console.log(myDate.getFullYear())
// console.log(myDate.getMonth()) //ocak 0 değerinden başlar
// console.log(myDate.getDay()) //pazar 0 değerinden başlıyor
// console.log(myDate.getDate())
// console.log(myDate.getHours())
// console.log(myDate.getMinutes())
// console.log(myDate.getSeconds())
// console.log(new Date("2022"))


//math object
// console.log(Math.round(4.3)) //en yakın değer
// console.log(Math.ceil(4.3)) //üste yuvarla
// console.log(Math.floor(4.9)) //alt sayıya yuvarla
// console.log(Math.trunc(4.5)) //tam sayı kısmı
// console.log(Math.pow(8,2)) //üssü
// console.log(Math.sqrt(64)) //kök alma metodu
// console.log(Math.min(0,34,89,146)) //minimumu alır
// console.log((Math.random()*100).toFixed(0))
// console.log(Math.trunc(Math.random()*100))
// console.log(Math.pow(16,1/4))

//comparison (karşılaştırma)
// let x = 8 ;
// let y = 20;
// console.log("8" != x) //type hassasiyeti yoktur string = number olabilir
// console.log("8" !== 8) //type hassasiyeti var
// console.log(8 !== x)
// console.log(!x)

//x>8 x<8 x<=8 x>=8
// console.log(x <= 8)

// and && or ||
// true && true (ikiside true olursa true yoksa false)
//true || true (ikisinden biri true olursa true yoksa false)
// console.log(x<10 || y<11)

//conditional (ternary) operatör 
// (koşul) ? (doğru ise gerçekleşecek alan) : (yanlış ise gerçekleşecek alan)
// let yas = 19;
// let oyVerme = (yas<18) ? "Çok genç oy veremez" : "Oy vermek için yeterli yaşta"
// console.log(oyVerme)

// let name1 = "mustafa"
// let name2; //undefined
// let name3 = null ;
// let name4 = 0 ;
// let name5 = "";
// let name6 = NaN;
// let text = "bu gösterilen text metnidir"

// console.log(name1 || text)
// console.log(name2 || text)
// console.log(name3 || text)
// console.log(name4 || text)
// console.log(name5 || text)
// console.log(name6 || text)
// console.log("---------------")
// //eğer solda bir değer varsa o yazılır yoksa sağdaki değer yazılır.
// console.log(name1 && text)
// console.log(name2 && text)
// console.log(name3 && text)
// console.log(name4 && text)
// console.log(name5 && text)
// console.log(name6 && text)
// //eğer solda bir değer varsa sağdaki yazılır yoksa soldaki değer yazılır.

// conditional statements (koşullu ifadeler)
// if, else, else if, switch

//if
// let hour= 19;
// if (hour < 18) {
//     console.log("iyi günler")
// }
// if(hour > 18) {
//     console.log("iyi geceler")
// }

//else
// let hour = 19 ;
// if (hour < 18){
//     console.log("iyi günler")
// }
// else {
//     console.log("iyi geceler")
// }

//else if
// let hour = 4 ;
// let isim = "ahmeta"
// if (hour < 10){
//     if(isim == "ahmet"){
//         console.log("iyi sabahlar ahmet")
//     }
//     else {
//        console.log("iyi sabahlar ahmet dışı kimse") 
//     }
    
// }
// else if(hour < 18){
//     console.log("iyi günler")
// }
// else if (hour< 20){
//     console.log("iyi akşamlar")
// }
// else {
//     console.log("iyi geceler")
// }

// //switch çoklu girdileri temsil ediyor
// let day;
// switch(new Date().getDay()) {
//     case 0:
//         day = "Pazar";
//         break;
//     case 1:
//         day = "Pazartesi"
//         break;
//     case 2:
//         day = "Salı"
//         break;
//     case 3:
//         day= "Çarşamba";
//         break;
//     case 4:
//         day="Perşembe";
//         break;
//     case 5:
//         day="cuma";
//         break;
//     case 6:
//         day="cumartesi"
//         break;
//     default:
//         day = "hatalı veri"
// }
// console.log(day) //case ler tip olarak da aynı olmalı

//loop (döngü)
// for, for/in, for/of, while, do/while

//for(code çalışmadan girilecek alan/tanımlama alanı;koşul durumu;her döngüden sonra çalışacak alanı verir)

for (let i = 0; i < 5; i++){
    console.log("döngü çalışıyor")
    console.log(`i değeri ${i}`)
}

let text = ""
for (let i = 0 ; i < 5 ; i++){
    text += "The number is " + i + "\n"
}
console.log(text)
//for döngüsünde ilk kısım opsiyoneldir
// let j = 0;
// for(let k,l,m;j<5;k++,l--){
// //coding
// j++
// }

const arr = [1,2,3,4,5,6]
for(let l= 0, r = arr.length - 1; l<r; l++,r--){
    console.log(arr[l],arr[r])
}