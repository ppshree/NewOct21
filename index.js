// console.clear();
// var list=document.getElementById("list")
// var form=document.getElementById("form")
// var addItem=document.getElementById("btn-add")
// var nameHolder=document.getElementById("name-holder")
// var todoInputBox=document.getElementById("todo-input-box")
// form.addEventListener('submit',function(e){
//     e.preventDefault()
// })

// function renderTodoItem(){
//     var card=document.createElement("div")
//     card.className="item"
//     var cardWrapper=document.createElement("div")
//     var cardHeading=document.createElement("h3")
//     cardHeading.innerHTML=todoInputBox.value
//     var cardPara=document.createElement("p")
//     var currentDate= new Date()
//     cardPara.innerHTML=currentDate.getDate()+"-"+(parsevar(currentDate.getMonth())+1) +"-"+currentDate.getFullYear()+" "+currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds()+":"+currentDate.getMilliseconds()
//     list.prepend(card)
//     todoInputBox.value="";
//     cardWrapper.appendChild(cardHeading)
//     cardWrapper.appendChild(cardPara)
//     card.appendChild(cardWrapper)
//     var deleteIcon=document.createElement("i")
//     deleteIcon.className="fas fa-trash"
//     card.appendChild(deleteIcon)
//     deleteIcon.addEventListener('click',function(){
//       confirm("delete this selected item") 
//       card.remove()
//     })

// var mArr=localStorage.getItem("list")===null ? [] :JSON.parse(localStorage.getItem("list"))
// mArr.push({
//     message:cardHeading.innerHTML,
//     date:cardPara.innerHTML
// })
// localStorage.setItem("list",JSON.stringify(mArr))

    
// }

// addItem.addEventListener('click',function(){
//     if(todoInputBox.value===""){
//         alert("Please enter the todo item")
//         return
//     }
//     renderTodoItem()
// })


// var form=document.getElementById("form");
// form.addEventListener('submit',function(e){
//     e.preventDefault()
// });
// var toDoInput=document.getElementById("todo-input-box");
// var btn=document.getElementById("btn-add");
// var listItem=document.getElementById("list");

// function rederTodoItem(){
    
// }



// btn.addEventListener('click',function(){
// if(toDoInput.value===""){
//     alert("Please enter the todo item")
// }

// })





//Count_down...
// var mainCountDown=document.getElementById("count")
// var clear=window.setvarerval(function() {
//     if(down.innerHTML>0){
//         down.innerHTML-=1;
//     }else{
//     clearInterval("clear")
//     }
    
//     }, 1000)



// var mNum=10;
// const mProm1=new Promise((resolve,reject)=>{
//     if(mNum>=10){
//         resolve(mNum);
//     }else{
//         reject(new Error("Number not big enough"));
//     }
// })
// const mProm2=(data)=>new Promise((resolve,reject)=>{
//     data=data+20;
//     if(data>=30){
//         resolve(data);
//     }else{
//         reject(new Error("Number not big enough"));
//     }
// })

// mProm1
// .then(mProm2)
// .then((res)=>{
//     console.log(res)
// })
// .then(mProm2)
// .then(Response=>console.log(Response))
// .catch((err)=>{
//     console.log(err);
// })

//Q.Nick's Check
// Nick has been given a list of random numbers by his teacher. These numbers are marks of several students of his class. He is
// required to arrange the marks in increasing order and hence check whether the new arrangement of marks are successive in
// nature or not. You need to write a function such that it returns 1 if the complete arrangement consists of consecutive marks,
// otherwise return 0.
// Note: If two students have the same marks, then after arranging them in increasing order, they will not be considered as
// consecutive.

// Input Specification:
// input1: vareger N i.e., size of the array
// input2: vareger array for elements of the array
// Output Specification:
// Return 1 if all the numbers are consecutive after arrangement, otherwise return 0.
// 6/50
// Example 1:
// input1: 6
// input2: {3,7,2,5,4,6}
// Output: 1
// Explanation:
// After arranging the given numbers in increasing order, the array comes out to be as 2,3,4,5,6,7. As all the numbers in the array
// are consecutive, therefore 1 is returned.
// Example 2:
// input1: 6
// input2: {1,9,2,4,0,3}
// Output: 0
// Explanation:
// The given array, when arranged in increasing order, comes out to be 0,1,2,3,4,9. As all the numbers in the array are not
// consecutive, therefore 0 is returned.

// Solution...









console.log("Script loaded!");
// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1

// let input=[1,2,3,4,5,1,3];
// let search=7;
// let position=[];
// for(let i=0;i<=input.length;i++){
//     if(search==input[i]){
//         position.push(i)
//     }
// }
// if(position.length===0){
//     console.log("-1")
// }else{
//     console.log("Output:"+ position)
// }

// Question 2:
// Write a program to prvar following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5

// for(let i=1;i<=5;i++){
//     let result="";
//     for(let j=5;j>=i;j--){
//         result=result.concat(j);
//     }
//     console.log(result)
// }

// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]

// var arr=[3, 2, 1, 4, 5, 45];
// var z=arr.length;
// for(var i=0;i<z;i++){
//     var counter=0;
//     for(var j=0;j<(z-(i+1));j++){
//         if(arr[j]>arr[j+1]){
//             counter=1;
//             var temp=arr[j+1];
//             arr[j+1]=arr[j];
//             arr[j]=temp;
//         }
//     }
//     if(counter==0)
//     break;
// }
// console.log(arr)

// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False

// var a="HELLO";
// var b="JELLO";
// var c=((Array.from(a.toUpperCase())).sort()).toString();
// var d=((Array.from(b.toUpperCase())).sort()).toString();
// if(c.length!=d.length){
//     console.log("length are not same")
// }else{
//     (c===d)?console.log("true"):console.log("false")
// }

// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH

//  var a="Hello";
// var b=Array.from(a);
// for(var i=0;i<(b.length)/2;i++){
//     var temp=b[(b.length)-(i+1)];
//     b[(b.length)-(i+1)]=b[i];
//     b[i]=temp;
// }
// var replaced="";
// for(var i=0;i<b.length;i++){
//     if(b[i]==","){
//         continue;
//     }
//     else{
//         replaced=replaced+b[i];
//     }
// }
// console.log(replaced);









// Q1.JavaScriptProgram To Prvar Hello World
// window.alert("Hello world");

// Q2.JavaScript Program to Add Two Numbers
// const num1=4,num2=6;
// const sum=num1+num2;
// console.log(sum)

// Q3.JavaScript Program to Find the Square Root
// const num1=16;
// const sqr=Math.sqrt(num1);
// console.log(sqr)

// Q4.JavaScript Program to Calculate the Area of a Triangle
// const base=4,height=6;
// const area=1/2*base*height;
// console.log(area)

//Q5.JavaScript Program to Swap Two Variables
// let num1=5,num2=6;
// console.log("Before swapng",num1,num2);
// num1=num1+num2;
// num2=num1-num2;
// num1=num1-num2;
// console.log("After swapng",num1,num2);

// Q6.Javascript Program to Solve Quadratic Equation
// let root1,root2;
// let a=2,b=6,c=5;
// let discriminant=b*b-4*a*c;
// if(discriminant>0){
//     root1=(-b+Math.sqrt(discriminant))/2*a;
//     root1=(-b-Math.sqrt(discriminant))/2*a;
//     console.log(root1,root2)
// }else if(discriminant==0){
//     root1=root2=-b/(2*a);
//     console.log(root1,root2)
// }
// else(discriminant<0)
// {
//     let realPart=(-b/(2*a)).toFixed(2);
//     let imgPart=(Math.sqrt(-discriminant)/(2*a)).toFixed(2);
//     console.log(realPart,imgPart);
// }

// Q7.JavaScript Program to Convert Kilometers to Miles
// let Kilometers=5;
// let mile=Kilometers*0.621371;
// console.log(mile+" miles");

// Q8.Javascript Program to Convert Celsius to Fahrenheit
// let Celsius=55;
// let Fahrenheit=Celsius*1.8+32;
// console.log(Fahrenheit);

// Q9.Javascript Program to Generate a Random Number
// const a=Math.random();
// console.log(a);

// Q10.Javascript Program to Check if a number is Positive, Negative, or Zero
// let num=0;
// if(num>0){
//     console.log("Number is Positive")
// }else if(num<0){
//     console.log("Number is Negative")
// }
// else{
//     console.log("Number is Zero")
// }

// Q11.Javascript Program to Check if a Number is Odd or Even
// let num=1;
// if(num%2==0){
//     console.log("Even number")
// }else{
//     console.log("Odd number")
// }

//Q12.JavaScript Program to Find the Largest Among Three Numbers
// let a=12,b=3,c=11;
// if(a>b && a>c){
//     console.log("Number A is greater")
// }else if(b>a && b>c){
//     console.log("Number B is greater")
// }
// else{
//     console.log("Number C is greater")
// }

//Q13.JavaScript Program to Check Prime Number
// let num=72;
// let isPrime=true;
// if(num==1){
//     console.log("1 is neither prime nor composite number");
// }
// else if(num>1){
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             isPrime=false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log("is a prime number");
//     }else{
//         console.log("is a not prime number");
//     }
// }
// else{
//     console.log("is a not prime number");
// }

//Q14.JavaScript Program to Prvar All Prime Numbers in an varerval
// let startingNum=2;
// let endingNum=112;

//     for(let i=startingNum;i<endingNum;i++){
//         let flag=0;
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 flag=1;
//                 break;
//             }
//         }
//         if(i>1 && flag==0){
//             console.log(i)
//         }
//     }
   
//Q15.JavaScript Program to Find the Factorial of a Number
// let num=20;
// let fact=1;
// if(num<0){
//     console.log("ERROR")
// }
// else if(num==0){
//     console.log("1")
// }
// else{
// for(let i=1;i<=num;i++){
//     fact *=i;
// }
// console.log(fact)
// }

//Q16.JavaScript Program to Display the Multiplication Table
// const table=5;
// for(let i=1;i<=10;i++){
//     const result=table*i;
//     console.log(result)
// }

//Q17.JavaScript Program to Prvar the Fibonacci Sequence
// const num=10;
// let n1=0,n2=1,nextTerm;
// for(let i=1;i<=num;i++){
//     console.log(n1);
//     nextTerm=n1+n2;
//     n1=n2;
//     n2=nextTerm;
    
// }

//Q18.JavaScript Program to Check Armstrong Number
// const num=153;
// let sum=0;
// let tem=num;
// while(tem>0){
//     let remainder=tem%10;
//     sum += remainder * remainder * remainder;
//     tem=parsevar(tem/10);
// }
// if(sum==num){
//     console.log("is Armstrong number")
// }
// else{
//     console.log("is not Armstrong number")
// }

//Q19.JavaScript Program to Find Armstrong Number in an varerval
// const lowNumber=5;
// const highNumber=500;
// for(let i=lowNumber;i<=highNumber;i++){
//     let numberOfDigit=i.toString().length;
//     let sum=0;
//     let temp=i;
//     while(temp>0){
//         let remainder = temp%10;
//         sum += remainder **numberOfDigit;
//         temp=parsevar(temp/10);
//     }
//     if(sum==i){
//         console.log(i);
//     }
// }

//Q20.JavaScript Program to Make a Simple Calculator
// const num1=prompt("Enter first number");
// const num2=prompt("Enter second number");
// const operator=prompt("choose operator");
// let result;
// if(operator=="+"){
//     result=num1 + num2;
// }
// else if(operator=="-"){
//     result=num1 - num2;
// }
// else if(operator=="*"){
//     result=num1 * num2;
// }
// else {
//     result=num1 / num2;
// }
// console.log(result);

//Q21.JavaScript Program to Find the Sum of Natural Numbers
// const num=100;
// let sum=0;
// for(let i=1;i<=num;i++){
//     sum +=i;
//     console.log("step "+i)
// }
// console.log(sum)

//Q22.JavaScript Program to Check if the Numbers Have Same Last Digit
// const a=22;
// const b=222;
// const c=2222;
// const result1=a%10;
// const result2=b%10;
// const result3=c%10;
// if(result1==result2 && result1==result3){
//     console.log(a,b,c)
// }
// else{
//     console.log("have the not same number")
// }

//Q23.JavaScript Program to Find HCF or GCD
// let hcf;
// const num1=60;
// const num2=72;
// for(let i=1;i<=num1 && i<=num2;i++){
//     if(num1 % i==0 && num2 % i==0){
//         hcf=i;
//     }
// }
// console.log(hcf);

//Q24.JavaScript Program to Find LCM
// const num1=16;
// const num2=8;
// let min=(num1>num2)?num1:num2;
// while(true){
//     if(min%num1==0 && min%num2==0){
//         console.log(min);
//         break;
//     }
//     min++;
// }

//Q25.JavaScript Program to Find the Factors of a Number
// const num=12;
// for(let i=0;i<=num;i++){
//     if(num%i==0){
//         console.log(i)
//     }
// }

//Q26.JavaScript Program to Find Sum of Natural Numbers Using Recursion
// function sum(num){
//     if(num>0){
//         return num+sum(num-1);
//     }
//     else{
//         return num;
//     }
// }
// const number=12;
// const result=sum(number);
// console.log(result);

//Q27.JavaScript Program to Guess a Random Number
// function guessNumber() {
//     const random = Math.floor(Math.random() * 10) + 1;
//     let number = parsevar(prompt('Guess a number from 1 to 10: '));
//     while(number !== random) {
//         number = parsevar(prompt('Guess a number from 1 to 10: '));
//     }

//     if(number == random) {
//         console.log('You guessed the correct number.');
//     }

//   }


// guessNumber();

//28.JavaScript Program to Shuffle Deck of Cards
// const suits = ["Spades", "Diamonds", "Club", "Heart"];
// const values = [
//   "Ace",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "Jack",
//   "Queen",
//   "King",
// ];


// let deck = [];


// for (let i = 0; i < suits.length; i++) {
//     for (let x = 0; x < values.length; x++) {
//         let card = { Value: values[x], Suit: suits[i] };
//         deck.push(card);
//     }
// }


// for (let i = deck.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * i);
//     let temp = deck[i];
//     deck[i] = deck[j];
//     deck[j] = temp;
// }

// console.log('The first five cards are:');


// for (let i = 0; i < 5; i++) {
//     console.log(`${deck[i].Value} of ${deck[i].Suit}`)
// }

//Q29.JavaScript Program to Display Fibonacci Sequence Using Recursion
// function Fibonacci(num){
//     if(num<2){
//         return num;
//     }
//     else{
//         return Fibonacci(num-1)+Fibonacci(num-2);
//     }
// }
// const nTerms=12;
// if(nTerms<=0){

//     console.log("enter a positive number")
// }else{
//     for(let i=0;i<nTerms;i++){
//         console.log(Fibonacci(i))
//     }
// }

//Q30.JavaScript Program to Find Factorial of Number Using Recursion
// function factorial(x){
//     if(x==0){
//         return 1;
//     }
//     else{
//         return x*factorial(x-1);
//     }
// }
// const num=5;
// if(num>=0){
//     const result=factorial(num);
//     console.log(result)
// }else{

//     console.log('Enter a positive number')
// }

//Q31.