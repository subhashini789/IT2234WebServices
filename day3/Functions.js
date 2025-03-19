//Function
function PrintMsg(){
	console.log("Hello JS")
}
PrintMsg()

function sum(){
	return 5+6
}
console.log(sum())

function sub( a, b){
	return a-b
}
console.log(sub(5,3))
console.log("***********prime**********")
//write a boolean function to find a given number is prime
function isPrime(num) {
    if (num < 2) return false; // 0 and 1 are not prime
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false; // Not a prime number
        }
    }
    return true; // Prime number
}


console.log(isPrime(5)); // true
console.log(isPrime(10)); // false

console.log("****recursive function to print numbers from 1 to n*****")
//write recursive function to print numbers from 1 to n
function printNumbers(num, n) {
    if (num > n) return; // Base condition
    console.log(num);
    printNumbers(num + 1, n); // Recursive call
}


printNumbers(1, 5);

 
//arrow Function
const msg = ()=>{return console.log("Hello Js")}
//console.log(msg)
msg()


//write an arrow function to sum 2 numbers
const sum1 = ()=> {return console.log(5+2)}
sum1()
const add = (a,b)=> {return a+b}
console.log(add(4,5))

//default parameter
const mult = (a,b=2)=> {return a*b}
console.log(mult(4,5))
console.log(mult(4))

//reset parameter
/*const mysum = (...n)=>{
	console.log(n)
}
mysum(4,5,6,89,2)
*/
console.log("************************************")
const mysum = (...n)=>{
	let t=0
	n.forEach((i)=>t=t+i)
	console.log(t)
}
mysum(4,5,6,89,2)


/*
const mysum = (...n)=>{
 return	n.reduce((t,i)=>t=t+i)
}
console.log(mysum(4,5,6,89,2))*/

//callback function
//a function passed as an argumet


const greet =(msg,fun)=>{
	console.log("Hi..."+msg)
	fun()
}
greet("Good Morning",()=>{console.log("My name is david")})






const multwo = (n)=>n*3

const myarr = (mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))

}
myarr(multwo,4,5,6,8,2)