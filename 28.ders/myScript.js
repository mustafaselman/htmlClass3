// let myTitle = document.getElementById("head").innerHTML
// console.log(myTitle)
// let myTitle2 = document.getElementById("head").firstChild.nodeValue
// console.log(myTitle2)
// console.log(document.getElementById("head"))
// let myTitle3 = document.getElementById("head").childNodes[0].nodeValue
// console.log(myTitle3)

// console.log(document.head.innerHTML)
// console.log(document.body.innerHTML)
// console.log(document.documentElement.innerHTML)
// console.log(document.getElementById("head").nodeName)

// //create nodes (içine koyduğumuz elementin en sonuna oluşturur)
// const para = document.createElement("p")
// const node = document.createTextNode("This is new")
// para.appendChild(node)
// // document.body.appendChild(para)
// // console.log(document.documentElement.innerHTML)
// const element = document.getElementById("div1")
// // element.appendChild(para)
// // console.log(document.body.innerHTML)
// const child = document.getElementById("p1");
// element.insertBefore(para,child)
// para.innerHTML = "New item changed"
// para.setAttribute("id","p4")
// child.remove()
// const child2 = document.getElementById("p2")

// element.replaceChild(para,child2)
// console.log(document.body.innerHTML)
// // 3 içerik appendchild ile sona yerleştirme, insertBefore ile referans noktasının üstüne yerleşme, raplaceChild ile yerine geçme

//nodelist
// const myNodeList = document.querySelectorAll("p")
// // console.log(myNodeList[0])
// const myNodeList2 = document.querySelector("#p1")
// console.log(myNodeList2)

//sibling (kardeşlik)
// const myNode = document.querySelector("#p2")
// const next = myNode.nextElementSibling.innerHTML
// console.log(next)
// const previous = myNode.previousElementSibling.innerHTML
// console.log(previous)
// const parent = myNode.parentNode.innerHTML
// console.log(parent)
// const point = myNode.parentNode.previousElementSibling.previousElementSibling.innerHTML
// console.log(point)

//storage_apı
// localStorage.setItem("name",["ahmet şık"])
// const item = localStorage.getItem("name")
// console.log(item)
//problem1 localstorage string kaydı yapar
//problem2 üzerine yazıyor

// const name = {name:"mustafa",surname:"onal"}
// localStorage.setItem("name",JSON.stringify(name))
// const item2 = JSON.parse(localStorage.getItem("name"))
// console.log(item2)

// const name1 = ["ali","mustafa"]
// localStorage.setItem("name",JSON.stringify(name1))
// const item = JSON.parse(localStorage.getItem("name"))
// console.log(item)
// const name2 = [...JSON.parse(localStorage.getItem("name")),"mahmut","ayşe"]
// localStorage.setItem("name",JSON.stringify(name2))
// console.log(JSON.parse(localStorage.getItem("name")))

// localStorage.removeItem("name")
// localStorage.clear()
//sessionStorage

//ajax(Asynchronous JavaScript and XML)

// const xhttp = new XMLHttpRequest();
// xhttp.onload = function () {
//     //yüklendiğinde yapılması gereken söylenir
//     document.getElementById("demo").innerHTML = JSON.parse(this.responseText).age
//     console.log(JSON.parse(this.responseText))
//     console.log(this)
// }
// xhttp.open("GET","ajax.json")
// xhttp.send()

// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     console.log(this.readyState)
//     console.log(this.status)
// }
// xhttp.onload = function () {
//     document.getElementById("demo").innerHTML = this.responseText
//     console.log(this)
// }
// xhttp.open("GET","ajax.txt")
// xhttp.send()