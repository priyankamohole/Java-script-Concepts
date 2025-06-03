//alert("hello"); //one time pop up
// let num =prompt("Enter number:");
 
// if (num % 5 === 0){
//     console.log(num,"is multiply by 5");
// }else{
//         console.log(num,"is not multiply by 5");
// }

// let per=prompt("Enter Percentage(0-100) :");

// if(per>=90 && per<=100){
//     console.log(per, "Grade A");
// }
// else if(per>=70 && per<=89){
//     console.log(per, "Grade B");
// }
// else if(per>=60 && per<=69){
//     console.log(per, "Grade C");
// }
// else if(per>=50 && per<=59){
//     console.log(per, "Grade D");
// }
// else if(per>=0&& per<=49){
//     console.log(per, "fail");
// }else{
//     console.log("something wrong");
// }

// for(let a=1;a<=10;a++){
//     console.log("priyanka",a);
// }
// let i=0;
// while(i<=10){
//     console.log("priyanka",i);
//     i++;
// }
// let i=0;
// do{
//     console.log("priyanka",i);
//     i++;
// }while(i<=10)
// let s="priyanka";
// let len=0;
// for(let i of s){
//     console.log(i);
//     len++;
// }
// console.log(len);

// let pro={
//     name:"priyanka",
//     age:22
// }
// for(let i in pro){
//     console.log("key :",i, "value :",pro[i]);
// }

// for(let i=0;i<=100;i++){
//     if(i%2==0){
//             console.log(i);
//     }
// }

// let gnum=7;
// let n=prompt("Enter the guess: ");

// while(gnum!=n){
//     n=prompt("wrong again");
// }
// console.log("right");

// let str ="priyanka";
// console.log(str[1]);

// let s=`fjdlkfj ${2+3}`; // template literals or string interpolation
// console.log(s);

// let name=prompt("Enter name ");
// console.log(name);
// console.log(name.length);
// let uname="@"+name+name.length;
// console.log(uname);

// let m =[45,65,342,54];
// for(let i=0;i<=m.length;i++){
//     console.log(m[i]);
// }

// let m =[45,65,342,54];
// for(let el in m){
//     console.log(m[el]);
// }


// let sum=0;
// let m =[45,65,34,54,78];
// for(let val of m){
//    sum=sum+val;
// }
// let avg=sum/m.length;
// console.log(`the average is ${avg}`);


// let off=0;
// let i=0;
// let items=[250,645,300,900,50];
// for(let val of items){
//    off=val/10;
//    val=val-off;
//    i++;
//    console.log(`${i}:${val}`);
// }

// let fruits=["tomato","banana","apple","papaya"];
// let n=[4,234,,56,24];
// console.log(fruits.concat(n));
// console.log(fruits.push("lichi"));
// console.log(fruits.pop());
// console.log(fruits.toString());
// fruits.unshift("adasd");
// fruits.shift();
// console.log(fruits.slice(0,3));
// fruits.splice(1,1,"dhfg")




// let companies=["Bloombreg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.pop();
// companies.splice(2,1,"Ola");
// companies.push("Amazon");

// function myfun(msg){  //parameter
//     console.log("hello priyanka",msg);
// }
// myfun("how are you?"); //arguments

// let var = (a,b)=>{  arrow fun
//     return a+b;
// }
// let var = ()=>{  
//     console.log("shfkas")
// }

// function count(str){
//     // priyanka, count=0
//     let count=0;
//     for(const char of str){
//      if (char==="a"|| 
//         char==="i"|| 
//         char==="o"|| 
//         char==="u"|| 
//         char==="e"){
//         count++;
//      }
//     }
//     console.log(count);
// }

// let arr=[1,2,3,4,5];
// arr.forEach(function print(val){
//     console.log(val);
// })
// arr.forEach((value,index,arr)=>{
//     console.log(value,index,arr);
// })

// arr.forEach((val)=>{
//     console.log(val*val);
// })

// let n=arr.filter((val)=>{
//     return val%2==0;
// })
// console.log(n);

// let n=arr.map((val)=>{
//     return val*val;
// })
// console.log(n);

// let n=arr.reduce((res,cur)=>{
//     return res+cur;
// });
// console.log(n);

// let marks=[55,98,85,99,96];
// let n=marks.filter((val)=>{
//     return val>90;
// })
// console.log(n);

// let num=prompt("Enter number:");
// let arr=[];
// for(let i=1;i<=num;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
