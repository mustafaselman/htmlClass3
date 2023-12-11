// string
// escape character "\"
// let text="ahmet bana \"naber\" dedi "
// console.log(text)
// let text2 = "tab boşluğu bırakmak için \t kullanılır. yeni satıra geçmek için \n kullanılır."
// console.log(text2)

// //string methods
// let text= "abcdefgh"
// // let text2 = "\t"
// let length = text.length;
// console.log(length)
// // console.log(text2.length)

//slice,substring,substr

// //slice
// let text = "apple, Banana , kiwi"
// let part = text.slice(2,10)
// console.log(part)
// console.log(text.slice(7))
// console.log(text.slice(-10,-2))
// //ilk eleman index değeri 0 dır.
// //son eleman sayılmaz yani 10 dahil değil
// //tek hane yazılırsa sadece başlangıç değeri vardır.
// //eksi rakam verirsek geriden sayar

// //substr //
// console.log(text.substr(2,4))
// //ikinci karakteri alacağı karakter miktarını belirler
// console.log(text.substring(2,10))
// console.log(text.substring(-3))
// //substring de eksi değerler 0 olarak yazılır

// let text2= "Seni seviyorum seviyorum"
// let newText= text2.replace("seviyorum","sevmiyorum")
// console.log(newText)
// console.log(text2.replace(/SEVIYORUM/ig,"sevmiyorum"))
// console.log(text2.replace(/seviyorum/g,"sevmiyorum"))
// //i(case insensitive) g(global) gi(ikisini de birlikte kullanmak için)

// let text= "Hello world!"
// console.log(text.toUpperCase())
// //hepsini büyütür
// console.log(text.toLowerCase())
// let text2 = "Hello Turkey"
// console.log(text + text2)
// console.log(text.concat(" ", text2 , "metnin devamı"))
// //concat birleştirme

// let text1= "        Hello World!       "
// let text2=`Hello
// world
// this
// is
// my world
// `
// console.log(text2)
// console.log(text1)
// console.log(text1.trimStart())
// console.log(text1.trim())
// //trim boşluk alır

// let text = "567"
// console.log(text.padStart(9,1))
// console.log(text.padEnd(9,0))

// let text2 = "123"
// 00123111 elde eden console çıktısı.

//ahmet
// let text = "123"
// console.log(text.padStart(5,0))
// console.log(text.padEnd(9,1))

//giray //doğru
// let text12="123"
// console.log(text12.padStart(5,"0").padEnd(8,"1"))

//barış
// let text15 = "123"
// let padStart = text15.padStart(5,0)
// let padStart2 = padStart.padEnd(8,1)
// console.log(padStart2)
// let text15 = "123"
// let padStart = text15.padStart(5,"0")
// console.log("00123111")

// hakan //doğru
// let text ="123"
// text=text.padStart(5,"0")
// console.log(text.padEnd(8,"1"))

// let text="Hello world"
// console.log(text.charAt(0))
// console.log(text[0])

//peki sonuncu elemanı getiren kod nedir ? charat yada üstteki iki içerikten biri 

// let text = "elma,şeftali,üzüm"
// console.log(text.split(","))
// //stringi arraya çevirmek için split kullanılır
// let text2 = "bu bir metindir."
// console.log(text2.split(" "))
// let text3= "elma"
// console.log(text3.split(""))
// console.log(text3.split())

//string search

// let text = "Please locate where 'locate' occurs!"
// console.log(text.indexOf("locate",10))
// console.log(text.lastIndexOf("locate",25))
//bulduğu içeriğin ilk harfinin indexi
//bulunmayan değerler için -1 değeri döner
//eklenen ikinci rakam başlangıç pozisyonunu gösterir. lastındexof da sondan başa sayar

// let text = "Please Locate where 'locate' occurs!"
// console.log(text.search(/locate/i))
//insensitive işlemler indexof da yapılmaz sadece search de yapılır.
//niye indexof a ihtiyaç var, çünkü indexof da başlangıç pozisyonu belirler

// let text="Hello world, welcome to the universe"
// console.log(text.includes("world",12))
// console.log(text.startsWith("Hello"))
// console.log(text.endsWith("universe"))