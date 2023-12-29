//fetch apı

// function fetchResponse(){
//     fetch("ajax.txt")
//     .then(response => response.text())
//     .then(text => console.log(text))
//     .catch(err => console.log(err))
// }
// fetchResponse();

// function getJsonFile(){
//     fetch("ajax.json")
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err))
// }
// getJsonFile();

//https://jsonplaceholder.typicode.com/

//get request (veri alma)
// class Request {
//     get(url){
//         fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err=>console.log(err))
//     }
// }
// const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/albums")

// class Request {
//     get(url){
//         return new Promise((resolve,reject) => {
//         fetch(url)
//         .then(response => response.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err))
//         })
        
//     }
// }
// const request = new Request();
// let albums;
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(data => {
//     albums = data;
//     console.log(albums)
// })
// .catch(err => console.log(err))

// class Request {
//     async get(url){
//         const response = await fetch(url)
//         const data = response.json()
//         return data
//     }
// }
// const request = new Request();
// let albums;
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(data => {
//     albums = data ;
//     console.log(albums)
// })
// .catch(err => console.log(err))

//post request (veri yollama)
// class Request {
//     post(url,data){
//         return new Promise((resolve,reject) =>{
//             fetch(url, {
//                 method: "POST",
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type": "application/json; charset=UTF-8"
//                 }
//             })
//             .then(response => response.json())
//             .then(data => resolve(data))
//             .catch(err => reject(err))
//         })
//     }
// }
// const request = new Request();
// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Thriller"})
// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err))

// class Request {
//     async post(url,data){
//         const response = await fetch(url,{
//             method: "POST",
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-type":"application/json; charset=UTF-8"
//             }
//         })
//         const responseData = await response.json()
//         return responseData;
//     }
// }
// const request = new Request();
// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,name:"mustafa"})
// .then(dataResponse => console.log(dataResponse))
// .catch(err => console.log(err))

//put request (güncelleme - mevcut olan içerikten- tamamen içeriği siler ve yeni verileri yazar)
//bir veriyi sıfırdan baştan güncellemek istiyorsak put kullanılır. Eğer bazı değişiklikler yapıp dokunulmayan eski bilgileri de muhafaza etmek istiyorsak PATCH kullanılır.
// class Request {
//     put(url,data){
//         return new Promise((resolve,reject) => {
//             fetch(url, {
//                 method:"PATCH",
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type":"application/json;charset=UTF-8"
//                 }
//             })
//             .then(response=>response.json())
//             .then(data=>resolve(data))
//             .catch(err=>reject(err))
//         })
//     }
// }
// const request = new Request();
// request.put("https://jsonplaceholder.typicode.com/albums/8",{userId:5,name:"Thriller"})
// .then(album=>console.log(album))
// .catch(err=>console.log(err))

// class Request {
//     async put(url,data) {
//         const response = await fetch(url,{
//             method:"PUT",
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-type":"application/json;charset=UTF-8"
//             }
//         })
//         const responseData = await response.json()
//         return responseData
//     }
// }
// const request = new Request();
// request.put("https://jsonplaceholder.typicode.com/albums/8",{userId:5,name:"Thriller"})
// .then(album=>console.log(album))
// .catch(err=>console.log(err))

//delete request

class Request {
    delete(url) {
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:"DELETE"
            })
            .then(()=>resolve("Veri silme işlemi başarılı"))
            .catch(err=>reject(err))
        })
    }
}
const request = new Request();
request.delete("https://jsonplaceholder.typicode.com/albums/8")
.then(message=>console.log(message))
.catch(err=>console.log(err))

//ödev delete requesti async olarak yapın