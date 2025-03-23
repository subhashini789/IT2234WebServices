console.time();
console.timeEnd();
let river = "Making";
let character = river.charAt(0);
console.log(character);
let str = "java is language";
console.log(str.slice(0,4));
console.log(str.split(' '));

let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4
   
names.push("Amelia");
console.log(names.length); // -> 5
console.log(names); 
names.unshift("sanduni");
console.log(names);

let age = 32;
age = age + 1;
console.log(age);

let height = 180;
{
let height = 200;
height = height + 10;
}
console.log(height);
let x = 100/0;
console.log(x);