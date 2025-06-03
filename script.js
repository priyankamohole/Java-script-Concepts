// let heading =document.getElementById("header")  // return value
// console.log(heading);

// let heading =document.getElementsByClassName("header2")  // return value
// console.log(heading);

// let heading1 =document.getElementsByTagName("p")  // return value
// console.log(heading1);

// let heading1 =document.querySelector("body")  // return value
// console.log(heading1);

// let fc=document.body.firstChild;
// console.log(fc);


// let div=document.querySelector("div");
// console.log(div);

// let head=document.querySelector("h4");
// console.log(head);

// let head=document.querySelector("h2");
// console.log(head);
// head.innerText=head.innerText + " Im here!!";

// let div=document.querySelectorAll(".box");
// let ind=0;
// for (divs of div){
//     divs.innerText=`New value ${ind}`;
//     ind++;
// } 
// div[0].innerText="New valu 0";
// div[1].innerText="New valu 1";
// div[2].innerText="New valu 2";

// let div=document.querySelector("div");
// console.log(div);

// let pa=document.querySelector("p");
// console.log(pa.getAttribute("class"));

// let head=document.querySelector("h2");
// console.log(head.setAttribute("id","header"));
// console.log(head.getAttribute("id"));


// let btn=document.createElement("button");
// btn.innerText="click me";
// console.log(btn);

// let p=document.querySelector("p");
// p.after(btn);  // append , prepend , after, before

// let h=document.createElement("h1");
// h.innerText="I am Priyanka!";

// document.querySelector("body").prepend(h)

// let he=document.querySelector("h2");
// he.remove();


// let btn=document.createElement("button")
// btn.innerText="Click here";
// btn.style.backgroundColor="red";
// document.querySelector("body").prepend(btn);

// let para=document.querySelector("p");
// para.getAttribute("class");

// const obj={
//     name:"priyanka",
//     age:22,
//     marks:86,
//     printmarks:function(){
//         console.log("marks :",this.marks);
//     }
// }                                                                                                                           
// const obj1={
//     lastn:"mohole",
//     pink() {
//         console.log("average")
//     }
// }

// obj.__proto__=obj1;


// let btn=document.querySelector("#btn");
// btn.onclick=(e)=>{
//     console.log(e);
//     console.log(e.type,e.clientX,e.clientY,e.target);
// }

// let abc=document.querySelector("#abc");
// abc.onmouseover=()=>{
//     console.log("you are inside div");
// }

// btn.addEventListener("click",()=>{
//     console.log("hello");
// })
// const hello1=()=>{
//     console.log("hello1");
// }
// btn.addEventListener("click",hello1)

// btn.removeEventListener("click",hello1)


// let modebtn=document.querySelector("#mode");
// let bd=document.querySelector("body");
// let curr="light";
// modebtn.addEventListener("click",()=>{
//     if(curr==="light"){
//         curr="dark";
//         bd.classList.add("dark");
//         bd.classList.remove("light");

//     }else{
//         curr="light";
//        bd.classList.add("light");
//        bd.classList.remove("dark");
//     }
//     console.log(curr);
// })

// class car{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }
// let bmw=new car();

class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data of user");
    }
}
let stud=new user("priyanka","asfsdgf");