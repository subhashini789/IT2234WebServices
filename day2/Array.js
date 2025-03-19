


	
//ARRAY
console.log("***Print array ***")
let numarray=[1,4,5,3]
console.log(numarray);
/*for(let i=0;i<numarray.length;i++){
	console.log(numarray[i])
	
}
numarray.forEach((n)=>{
	console.log(n)
})*/
//find the max number in the array using forEach
console.log("***find the max number in the array using forEach***")
let max=0;
numarray.forEach((n)=>{
	/*if(max<n){
		max=n
	}*/
	(max<n)&&(max=n)
})
console.log("Max is "+max)
	



//print the nested array[[1,2,30],[5,6],[8,5,3]]
console.log("***print the nested array[[1,2,30],[5,6],[8,5,3]] ***");
let nestedArray=[[1,2,30],[5,6],[8,5,3]]
  console.log(nestedArray);
  nestedArray.forEach((n)=>{
	  n.forEach((i)=>{
	  console.log(i);
	  })
  })
  
  console.log("                                              ")
 
/*
a=[4,5,6,3,7]
b=[8,3,2,1,5]
find the common elements between a and back
*/
console.log("***find the common elements between a and back***");
commonArraya=[4,5,6,3,7]
commonArrayb=[8,3,2,1,5]
commonArraya.forEach((n)=>{
	commonArrayb.forEach((i)=>{
		if(n==i){
			 console.log(i);
		}
	})
}
)





 console.log("***write a code find the all pairs that sum up to the target***")
  
//arr = [1,2,3,4,5,6]
//target = 7;
//write a code find the all pairs that sum up to the target
function findPairs(arr, target) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}

const arr = [1, 2, 3, 4, 5, 6];
const target = 7;
console.log(findPairs(arr, target));


console.log("***find the most frequent element in the array***")
//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in the array
function mostFrequentElement(arr1) {
    let frequency = {};
    let maxCount = 0;
    let mostFrequent = null;

    for (let num of arr1) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mostFrequent = num;
        }
    }

    return mostFrequent;
}

const arr1 = [4, 8, 3, 4, 3, 2, 1, 8, 4];
console.log(mostFrequentElement(arr1)); 

console.log("***Array operation***")
//Array operation
//push
arr3=['a','b','d']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)


console.log("...reverse the array using push and pop...")
//reverse the array using push and pop
//a b c d -> d c b a 
array=["a","b","c","d"]
for(let i=0;i<array.length;i++) {
arr3.forEach((n)=>{
	arr3.pop();
	console.log(n)
}) 
}
console.log("...JSON...")
//JSON
//{key:value}
let student ={regno:'2021/ICT/01',name:'James',age:21,course:'IT',skills:['java','JS','c++']}
console.log(student)
console.log(student.name)
let student1=[
{regno:'2021/ICT/02',name:'James',age:21,course:'IT'},
	{regno:'2021/ICT/03',name:'ravi',age:22,course:'IT'},
		{regno:'2021/ICT/04',name:'gaya',age:21,course:'IT'}]
		console.log(student1)

//Define the 10 student JSON
//Store it in an array
//find the female students
//Print the students who are following iT course
//Print the max and average GPA among the student 

console.log("...Define 10 students in JSON format and store in an array...")		

const students = [
    { name: "Ama", gender: "Female", course: "IT", gpa: 3.8 },
    { name: "Bimal", gender: "Male", course: "Engineering", gpa: 3.2 },
    { name: "Citha", gender: "Female", course: "Business", gpa: 3.6 },
    { name: "Danial", gender: "Male", course: "IT", gpa: 3.9 },
    { name: "Emly", gender: "Female", course: "IT", gpa: 4.0 },
    { name: "Frankline", gender: "Male", course: "Medicine", gpa: 3.5 },
    { name: "Gihashi", gender: "Female", course: "IT", gpa: 3.7 },
    { name: "Hima", gender: "Male", course: "Law", gpa: 3.1 },
    { name: "Isla", gender: "Female", course: "Engineering", gpa: 3.4 },
    { name: "Jim", gender: "Male", course: "IT", gpa: 3.3 }
];

console.log("...Find female students using forEach...")
let femaleStudents = [];
students.forEach(students => {
    if (students.gender === "Female") {
        femaleStudents.push(students);
    }
});
console.log("Female Students:", femaleStudents);


console.log("...Print students following IT course using forEach...")

let itStudents = [];
students.forEach(students => {
    if (students.course === "IT") {
        itStudents.push(students);
    }
});
console.log("IT Students:", itStudents);


console.log("... Find max and average GPA using forEach...")

let maxGPA = 0;
let totalGPA = 0;

students.forEach(students => {
    if (student.gpa > maxGPA) {
        maxGPA = students.gpa;
    }
    totalGPA += students.gpa;
});

let avgGPA = totalGPA / students.length;

console.log("Max GPA:", maxGPA);
console.log("Average GPA:", avgGPA.toFixed(2));
