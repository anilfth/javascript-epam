// //Get data from server
// // const fetchData = (callback) => 
// const fetchData = (url) =>{
//     return new Promise(resolve,reject)=>{
//     const req = new XMLHttpRequest();
//     req.open('GET',
//  'https://jsonplaceholder.typicode.com/todos/')
//     req.send();
    

//     req.addEventListener('readystatechange', ()=> {
//     if(req.readyState === 4 &&
//     req.status === 200){
   
//     // callback(JSON.parse(req.responseText) );
//     JSON(JSON.parse(req.responseText));
//    } else if(req.readyState === 4){
//     // callback('Could not print data');
//     reject('Could not print data');
//     }
//     })
//     }
//     fetchData('first.json',(res)=>{
//     console.log(res);
//     fetchData('second.json',(res)=>{
//        console.log(res);
//        fetchData('third.json',(res)=>{
//            console.log(res)
   
//     });
//    });
//     });
// //    / instead  of passing callback into function

// const getSomething = () =>{
// return new Promise((resolve,reject)=>{
//     //fetching something
//     resolve('some data');
//     // reject('Error');
// });
// };
// // getSomething().then((data) => {
// //     console.log(data);
// // }, (err) =>{
// //     console.log(err);
// // });
// // getSomething().then(data => console.log(data))
// // .catch(err=>console.log(err));



// const fetchData=(url)=>{
//     return new Promise((resolve,reject)=>{

//         const req = new XMLHttpRequest();
//     req.open('GET',`https://jsonplaceholder.typicode.com/todos/`);
//     req.send();
//     req.addEventListener('readystatechange',()=>{

//         if(req.readyState==4 && req.status==200){
//            resolve(JSON.parse(req.responseText));
//         }
//         else if(req.readyState==4){
//              reject('Could not  print data');
            
//         }

//     })

    
//     })
// }
// // fetchData().then(data=>console.log(data)).catch(err=>console.log(err));

// // changing promises
// fetchData('first.json').then((data)=>{
//     console.log('promise 1 ',data);
//     return fetchData('second.json');
// }).then((data)=>{
//     console.log('Promise 2',data);
//     return fetchData('third.json');

// }).then(data=>console.log('Promise 3',data)).catch(err=>console.log(err));


// fetch('four.json').then((response)=>{ 
    fetch('first.json').then((response)=>{ 
    console.log('response is :',response);
    return response.json();
}).then(data=> console.log(data))
.catch((err) => {
    console.log(err);
});

// async await
const getSomething = async() => {
    const response = await fetch('second.json');
    return response.json();
}
getNewData()
    .then(data => console.log('New data', data))
    .catch(err=>console.log(err));