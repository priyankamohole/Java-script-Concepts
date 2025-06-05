//fetch API

// const url="https://jsonplaceholder.typicode.com//posts";
const url="https://catfact.ninja/fact";
const para=document.querySelector("#para");
const btn=document.querySelector("#btn");



const getposts=async()=>{
    console.log("getting data..");
    let response=await fetch(url);
    console.log(response);        //JSON format
    // console.log(response.status);
    let data=await response.json();
    console.log(data);
    para.innerText=data[0].text;
};

btn.addEventListener("click",getposts);