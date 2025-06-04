// sync 
// console.log("one");
// console.log("two");

// function hello(){
    
// }
// setTimeout(hello,2000);
// setTimeout(()=>{
//     console.log('hello');
// },2000);
// console.log("three"); // doesn't wait

// function sum(a,b){
//     console.log(a+b);
// }
// function cal(a,b,sumcall){
//     sumcall(a,b);
// }
// cal(4,5,(a,b)=>{
//     console.log(a+b);}
// );

//nesting if
// if(){
//     if(){

//     }else{

//     }
// }else{

// }

// nesting loop
// for(){
//     for(){

//     }
// }

// async await fun
// function api(){
//     return new Promise((reslove,reject)=>{
//         setTimeout(()=>{
//             console.log("weather");
//             reslove(200);
//         },2000);
//     });
// }
// // await api();
// async function getWeather() {
//     await api(); //1st call
//     await api();  //2nd
// }




//promises
// let p=new Promise((reslove, reject)=>{
//     console.log("sdgdfhb");
//     // reslove("succes");
//     reject("some error");
// });

// function getData(getId, getNextData){
//     return new Promise((reslove,reject)=>{ 
//         setTimeout(()=>{
//         console.log("data ",getId);
//         // reslove("succes");
//         reject("error");
//         if(getNextData){
//         getNextData();}
//     },5000);});
// }

// const getpromise=()=>{
//     return new Promise((reslove, reject)=>{
//         console.log("I am promise");
//         reslove("success fullfilled");
//         // reject("slow network error");
//     });
// }
// let promise=getpromise();
// promise.then((res)=>{
//     console.log("promise fullfill",res); //res=reslove
// });

// promise.catch((err)=>{
//     console.log("rejected",err);  //err=reject
// })

// const asyncfun=()=>{
//     return new Promise((reslove, reject)=>{
//        setTimeout(()=>{
//         console.log("data1");
//         reslove("success");
//        },4000)
//     });
// }
// const asyncfun2=()=>{
//     return new Promise((reslove, reject)=>{
//        setTimeout(()=>{
//         console.log("data2");
//         reslove("success");
//        },4000)
//     });
// }
// console.log("featching data1..");
// // let p=asyncfun();
// asyncfun().then((res)=>{
//     console.log(res);
//     console.log("featching data2..");
//     //let p2=asyncfun2();
//     asyncfun2().then((res)=>{
//     console.log(res);
// })
// })

// function getData(getId){
//     return new Promise((reslove,reject)=>{
//     setTimeout(()=>{
//         console.log("data ",getId);
//         reslove("success");
//     },2000);
//     })
//      // console.log("data ",getId);
// }

// //IIFE
// (async function () {
//     console.log("featching data1..");
//     await getData(1);
//     console.log("featching data2..");
//     await getData(2);
//     console.log("featching data3..");
//     await getData(3);
// })();

// //Async await 
// async function getAllData() {
//     console.log("featching data1..");
//     await getData(1);
//     console.log("featching data2..");
//     await getData(2);
//     console.log("featching data3..");
//     await getData(3);
// }

// //promise chaining 
// getData(1)
// .then((res)=>{
//     return getData(2);
// }).then((res)=>{
//     return getData(3);
// }).then((res)=>{
//     console.log(res);
// })



//callback hell or nesting  or pyramid 

// function getData(getId, getNextData){
//     setTimeout(()=>{
//         console.log("data ",getId);
//         if(getNextData){
//         getNextData();}
//     },2000);
//     // console.log("data ",getId);
// }

// getData(1,()=>{
//     console.log("getting data 2...");
//     getData(2,()=>{
//         console.log("getting data 3...");
//         getData(3);
//     });
// });
// getData(2);
// getData(3);

