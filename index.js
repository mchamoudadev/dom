// const age = 18;

// console.log(17 <= age);
// console.log("greater than 18");
// console.log("less than 18");


// if (age > 18) {
//     // code block
//     console.log("age is greater than 18");
// } else if (age == 18) {
//     console.log("age is equal to 18");
// } else {
//     console.log("age is less than 18");
// }

// another example
const weather = "";

// rainy umbrella 
// sunny t-shirt
// cold jacket
// cloudy shirt

// if (weather == "rainy") {
//     console.log("weather is rainy take your umbrella");
// } else if (weather == "sunny") {
//     console.log("weather is sunny take your t-shirt");
// } else if (weather == "cold") {
//     console.log("weather is cold take your jacket");
// } else {
//     console.log("weather is cloudy take your shirt");
// }

// switch statement

// const grade = "F";

// switch (grade) {
//     case "A":
//         console.log("grade is A");
//         break;
//     case "B":
//         console.log("grade is B");
//         break;
//     case "C":
//         console.log("grade is C");
//         break;
//     default:
//         console.log("grade is unknown");
// }

/*
100-90 A+
90-80 B+
80-70 C+
70-60 D+
59-----0 Failed
*/

// let car1 = "susuko";
// let car2 = "toyota";
// let car3 = "ford";
// let car4 = "honda";

// // arrays

// let cars = ["susuko", "toyota", "ford", "honda", 38];

// length
// index = arr[indexNumber]
// console.log(cars);
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);
// console.log(cars[4]);

// const student1 = "hamuuda";
// const student2 = "najax";
// const student3 = "kim";

// const students = new Array("Hamuuda", "najax", "kim", "mohamed");
// console.log(students[1]);

// students[1] = "najax Bashiir";

// students[0] = "gsggs";
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[4]);

// const names = "mcdev";
// let ages = 245;

// console.log(typeof ages);
// console.log(typeof names);
// console.log(typeof (students));
// console.log(students);

// // push adding at end of the list
// students.push("Zaki");

// console.log(students);

// // removing at end of the list
// students.pop();

// console.log(students);

// // unshit -- adding  at the beginning of the list

// students.unshift("Farhio");

// console.log(students);


// // shift removing at the beginning of the list

// students.shift();

// console.log(students);

// find the index of the student

// const studentIndex = students.indexOf("kim");

// console.log(students);

// students.splice(studentIndex, students.length);

// console.log(students);

// let students = ["Hamuuda"];

// key value pairs
// key : value


// let students = [
//     {
//         name: "Hamuuda",
//         className: "CA141",
//         phone: "123455",
//         address: "warta nabada"
//     },
//     {
//         name: "Najax Bashiir",
//         className: "CA171",
//         phone: "42432434",
//         address: "warta nabada"
//     },
//     {
//         name: "kim",
//         className: "CA172",
//         phone: "96798697",
//         address: "bakaaro"
//     }
// ];

// console.log(students[1].phone);
// console.log(students[1].name);
// console.log(students[1].address);
// console.log(students[1].className);

// console.log("++++++++");

// console.log(students[0].name);
// console.log(students[0].className);
// console.log(students[0].address);
// console.log(students[0].phone);

// console.log("++++++++");

// console.log(students[2].name);
// console.log(students[2].address);
// console.log(students[2].phone);
// console.log(students[2].className);

// console.log(students.indexOf("kim"));

// console.log(students.filter(student => student.name == "kim")[0]);


// create a list of students each of the students in the list should have

// name, phone , className, address, (hobbies--- is array), address(object)

// const teachers = ["mcdev", "najma", "sacdiya"];


// starting point
// ending point
// driver /jumping

// 1 ilaa 10

// and ,or, not

// if(hebel ==  sidasi && hebel == 09)

// for (let sp = 1; sp <= 10; sp++) {
//     console.log("give me a second", sp);
// }

// for (let sp = 1; sp <= 12; sp++) {
//     console.log("give me a third", sp);
// }





// loops in array 

// let students = [
//     {
//         name: "Hamuuda",
//         className: "CA141",
//         phone: "123455",
//         address: "warta nabada"
//     },
//     {
//         name: "Najax Bashiir",
//         className: "CA171",
//         phone: "42432434",
//         address: "warta nabada"
//     },
//     {
//         name: "kim",
//         className: "CA172",
//         phone: "96798697",
//         address: "bakaaro"
//     }
// ];

// console.log(students[1].phone);
// console.log(students[1].name);
// console.log(students[1].address);
// console.log(students[1].className);

// console.log("++++++++");

// console.log(students[0].name);
// console.log(students[0].className);
// console.log(students[0].address);
// console.log(students[0].phone);

// console.log("++++++++");

// console.log(students[2].name);
// console.log(students[2].address);
// console.log(students[2].phone);
// console.log(students[2].className);

// let cars = ["car1", "car2", "car3", "car4", "car5", "car6", "car7", "car8", "car9", "car10"];

// console.log(cars[3]);
// start point 1
// ending point : length
// jumping : 1

// console.log(cars.length);
// //length 10
// for (let sp = 0; sp < cars.length; sp++) {
//     console.log(cars[sp]);
// }



// let students = [
//     {
//         name: "Hamuuda",
//         className: "CA141",
//         phone: "123455",
//         address: "warta nabada"
//     },
//     {
//         name: "Najax Bashiir",
//         className: "CA171",
//         phone: "42432434",
//         address: "warta nabada"
//     },
//     {
//         name: "kim",
//         className: "CA172",
//         phone: "96798697",
//         address: "bakaaro"
//     }
// ];

// sp = 0;
// sp students.length
// 1

// for (let sp = 0; sp < students.length; sp++) {
//     console.log(students[sp].name, students[sp].className, students[sp].address);
// }

// while loop

// sp = 1;
// sp = 10
// 1

// alert("Good night");

// let sp = 1;
// while (sp < 1) {
//     alert("Good night");
//     console.log("inside sp1", sp);
//     // infinity loop
//     sp++;
// }

// let sp2 = 1;
// do {
//     console.log("inside sp2", sp2);
//     alert("Good night p2");
//     sp2++;
// } while (sp2 < 1);


// foreach loop

let studentssss = [
    {
        name: "Hamuuda",
        className: "CA141",
        phone: "123455",
        address: "warta nabada"
    },
    {
        name: "Najax Bashiir",
        className: "CA171",
        phone: "42432434",
        address: "warta nabada"
    },
    {
        name: "kim",
        className: "CA172",
        phone: "96798697",
        address: "bakaaro"
    }
];


// for each loop 

// callback

// students.forEach(function (student) {
//     console.log(student.name);
// });

// function declaration

// function sayMyName(name, age) {
//     console.log("Your Name is " + name);
//     console.log("Your age is " + age);
// }

// //calling the function
// sayMyName("Mcdev", 20);
// sayMyName("Hamuuda", 90);
// sayMyName("Kalid", 10);

// concatenation 


// function getStudentInfo(studentName, age) {
//     console.log("Magaca Ardayga waa " + studentName + " sanadkiisuna waa " + age + " Sano");
// }


// getStudentInfo("Kasim", 25);
// getStudentInfo("Farah", 45);


// function calculation(num1, symbol, num2) {

//     // template literals ` backticks
//     let result;
//     if (symbol === "+") {
//         result = num1 + num2;
//         console.log(`resultig waa : ${num1}${symbol}${num2}=${result}`);
//     } else if (symbol === "-") {
//         result = num1 - num2;
//         console.log(`resultig waa : ${num1}${symbol}${num2}=${result}`);
//     } else if (symbol === "*") {
//         result = num1 * num2;
//         console.log(`resultig waa : ${num1}${symbol}${num2}=${result}`);
//     } else {
//         result = num1 / num2;
//         console.log(`resultig waa : ${num1}${symbol}${num2}=${result}`);
//     }
// }

// calculation(20, "+", 60,);
// calculation(40, "-", 60,);
// calculation(50, "*", 60,);
// calculation(50, "/", 60);

// Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array. For example, given the array [1, 2, 3, 4, 5], the function should return 15.

// function sumOfTheArray(numbers) {

//     // for loop over the numbers

//     // starting point ---0
//     // ending point --- array.length
//     // drive / jump point ---1
//     let result = 0;
//     for (let sp = 0; sp < numbers.length; sp++) {
//         result += numbers[sp];
//     }
//     console.log(result);
// }

// sumOfTheArray([5, 4]);

// function  return types
// ways to write the functions in js
// array methods
// json
// making api calls


// sum of two numbers
//void  function : no return value
// return function : return value

// function sumOfTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

// call the function

// sumOfTwoNumbers(20, 30);

// function takes studentInformation
/*

parameters:
    birthDate
    name
    class
    age: function
    placeOfBirth:
*/


// function getAge(name, country, city, street) {

//     const studentInfo = {
//         name: name,
//         className: "CA141",
//         phone: "123455",
//         address: {
//             country: country,
//             city: city,
//             street: street
//         },

//         age: function (birthDate) {
//             return 2023 - birthDate;
//         }
//     };
//     return studentInfo;
// }


// console.log(`Student Name: ${studentName} \n PlaceOfBirth: ${placeOfBirth} \n`);

// console.log(getAge().age(2010));

// const student = getAge(2010);
// console.log(student.age(1231), student.name);
// if (age < 15) {
//     console.log("caruur", age);
// } else {
//     console.log("qof wayn baa thay", age);
// }

// es6 -> Ecmascript

// function declaration

// sumOfTwoNumbers(20, 30);

// function sumOfTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }


// const myName = "";

// const studentInfo = function (num1, num2) {

//     return num1 + num2;

// };

// console.log(studentInfo(10, 20));
// console.log(studentInfo(62, 20));
// console.log(studentInfo(60, 20));


// function getStudentInfo(studentdName, studentClass, birthDate, studentBob) {
//     let studentInfo = {
//         stdName: studentdName,
//         stdClass: studentClass,
//         stdAge: 2023 - birthDate,
//         stdBob: studentBob,
//     };

//     return studentInfo;

// };

// const std = getStudentInfo("zaki", "CA205", "2010", "wartanabada");
// const std1 = getStudentInfo("Hamuuda", "CA141", 2014, "Waaberi");

// console.log(std.stdName, std.stdBob, std.stdClass, std.stdAge);
// console.log(std1, std1.stdAge);


// higher order array methods

// map

const numbers = [1, 2, 3, 4];

/*
1
4
9
16
*/
let squares = numbers.map(function (number) {
    return number * number;
});

let forEachSquare = numbers.forEach(function (sq) {
    return sq * sq;
});

// console.log(numbers);
// console.log("map", squares);
// console.log("foreach", forEachSquare);

// arrow methods

// function declaration

// sayMyName("Hy dear");

// // function declaration
// function sayMyName(name) {
//     console.log("Your Name is " + name);
// }

// // function expression
// const getMyAge = function (name) {
//     console.log(name);
// };

// getMyAge("Hamuuda");

// // arrow function
// const getMyAddress = (id) => {
//     console.log("Id", id);
// };

// getMyAddress("3435");

// const getMyPhone = id => console.log("id", id);

// getMyPhone("65465465465");

// sayMyName("Mcdev");
// sayMyName("Najax");


// player info
/*
    magaca
    kooxda
    joiningTime
    position
*/

// function declaration

// function getPlayerInfo(name, club, position, joinTime) {
//     return `Player Name : ${name} \nClub : ${club} Position : ${position} Life Time: ${2023 - joinTime}`;
// }


// expression

// const getPlayerInfo2 = function (name, club, position, joinTime) {
//     return `Player Name : ${name} \nClub : ${club} Position : ${position} Life Time: ${2023 - joinTime}`;
// };

// arrow function

// const getPlayerInfo3 = (name, club, position, joinTime) => {
//     return `Player Name : ${name} \nClub : ${club} Position : ${position} Life Time: ${2023 - joinTime}`;
// };

// const sendEvc = (number, money) => {
//     console.log(`$${money}  ayaad u wareejisay ${number}`);
// };

// sendEvc(685376720, 10);
// sendEvc(615378952, 20);


// arrow function
// function expression

// console.log(getPlayerInfo("Empape", "Psg", "7", 2020));
// console.log(getPlayerInfo("Rashford", "Manu", "7", 2016));
// console.log(getPlayerInfo("Leo Messi", "PSG", "10", 2022));
// console.log(getPlayerInfo("CR7", "Nasri", "7", 2020));
// console.log(getPlayerInfo("Haland", "MC", "7", 2023));
// console.log(getPlayerInfo("Neymar", "PSG", "11", 2022));

// filter method
// const players = ["messi", "neymar", "rashford", "cr7"];

// const newPlayer = players.filter(function (player) {
//     return player != "cr7";
// });

// console.log(newPlayer);
/*
messi = no
neymar = yes
rashford = no
cr7 = no
*/


const players = [
    {
        name: "Messi",
        club: "PSG"
    },
    {
        name: "Neymar",
        club: "PSG"
    },
    {
        name: "Rashford",
        club: "Man United"
    },
    {
        name: "CR7",
        club: "Nasri"
    },
    {
        name: "Zaki",
        club: "Dugsiiye"
    }

];
/*
*/

// const newPlayers = players.filter(function (player) {
//     return player.name == "Zaki";
// });

// console.log(newPlayers);

const list = ["one", "thirty", "hundred", "thousand"];

const newList = list.findIndex(function (index) {
    return index == "hundred";
});

// console.log(newList);

let afterRemove = list.splice(newList, 1);

// console.log(list);

const bigPlayers = [
    {
        name: "Messi",
        club: "PSG"
    },
    {
        name: "Neymar",
        club: "PSG"
    },
    {
        name: "Rashford",
        club: "Man United"
    },
    {
        name: "CR7",
        club: "Nasri"
    },
    {
        name: "Zaki",
        club: "Dugsiiye"
    }

];

// function accepts player name , remove from the list and returns reminding players

// function removePlayer(playerName) {

//     const bigPlayers = [
//         {
//             name: "Messi",
//             club: "PSG"
//         },
//         {
//             name: "Neymar",
//             club: "PSG"
//         },
//         {
//             name: "Rashford",
//             club: "Man United"
//         },
//         {
//             name: "CR7",
//             club: "Nasri"
//         },
//         {
//             name: "Zaki",
//             club: "Dugsiiye"
//         }
//     ];

//     // find the player index in the list using the playerName property

//     const currentPlayer = bigPlayers.findIndex(function (player) {
//         return player.name == playerName;
//     });
//     // remove the player from the list
//     bigPlayers.splice(currentPlayer, 1);

//     return bigPlayers;

// }

// console.log(removePlayer("Messi"));
// console.log(removePlayer("Zaki"));

// function acceptes player name and return the player information

// GPA totalMarks/totalSubjects

// function getPlayerInfo(playerName) {

//     const bigPlayers = [
//         {
//             name: "Messi",
//             club: "PSG",
//             goals: []
//         },
//         {
//             name: "Neymar",
//             club: "PSG"
//         },
//         {
//             name: "Rashford",
//             club: "Man United"
//         },
//         {
//             name: "CR7",
//             club: "Nasri"
//         },
//         {
//             name: "Zaki",
//             club: "Dugsiiye"
//         }
//     ];

//     // find the player info from the list
//     const playerInfo = bigPlayers.filter(function (player) {
//         return player.name == playerName;
//     });
//     return playerInfo;
// }

// console.log(getPlayerInfo("Messi"));


let students = [
    {
        name: "John Doe",
        subjects: ["Math", "English", "Science"],
        grades: [3, 4, 2]
    },
    {
        name: "Jane Smith",
        subjects: ["Math", "English", "Art"],
        grades: [4, 4, 4]
    },
    {
        name: "Billy Bob",
        subjects: ["English", "Art", "History"],
        grades: [2, 1, 3]
    },
    {
        name: "Alice Johnson",
        subjects: ["Math", "History", "Science"],
        grades: [4, 3, 2]
    },
    {
        name: "Charlie Brown",
        subjects: ["Math", "Art", "English"],
        grades: [2, 4, 4]
    },
    {
        name: "Emily Davis",
        subjects: ["Science", "Math", "Art"],
        grades: [3, 3, 3]
    },
    {
        name: "George Thompson",
        subjects: ["English", "History", "Science"],
        grades: [4, 4, 2]
    },
    {
        name: "Hannah Wilson",
        subjects: ["History", "Art", "Math"],
        grades: [2, 3, 4]
    },
    {
        name: "Ivan Clark",
        subjects: ["Math", "Science", "History"],
        grades: [3, 4, 3]
    },
    {
        name: "Jennifer Lopez",
        subjects: ["English", "Art", "Science"],
        grades: [4, 4, 3]
    }
];

// const studentGrades = students.map(
//   (student) => student.grades);
//  const sumOfGrades = studentGrades.reduce;
//   console.log(studentGrades);
// const studentGrades = students.map((student) => ({
//     ...student,
//     GPA: student.grades.reduce((total, grade) => total + grade / 3, 0)
// }));

// console.log(studentGrades);


// const calculateGpa = (student) => {


//     let students = [
//         {
//             name: "John Doe",
//             subjects: ["Math", "English", "Science"],
//             grades: [3, 4, 2],
//             gpa: 0

//         },
//         {
//             name: "Jane Smith",
//             subjects: ["Math", "English", "Art"],
//             grades: [4, 4, 4],
//             gpa: 0

//         },
//         {
//             name: "Billy Bob",
//             subjects: ["English", "Art", "History"],
//             grades: [2, 1, 3],
//             gpa: 0

//         },
//         {
//             name: "Alice Johnson",
//             subjects: ["Math", "History", "Science"],
//             grades: [4, 3, 2],
//             gpa: 0


//         },
//         {
//             name: "Charlie Brown",
//             subjects: ["Math", "Art", "English"],
//             grades: [2, 4, 4],
//             gpa: 0

//         },
//         {
//             name: "Emily Davis",
//             subjects: ["Science", "Math", "Art"],
//             grades: [3, 3, 3],
//             gpa: 0

//         },
//         {
//             name: "George Thompson",
//             subjects: ["English", "History", "Science"],
//             grades: [4, 4, 2],
//             gpa: 0

//         },
//         {
//             name: "Hannah Wilson",
//             subjects: ["History", "Art", "Math"],
//             grades: [2, 3, 4],
//             gpa: 0

//         },
//         {
//             name: "Ivan Clark",
//             subjects: ["Math", "Science", "History"],
//             grades: [3, 4, 3],
//             gpa: 0

//         },
//         {
//             name: "Jennifer Lopez",
//             subjects: ["English", "Art", "Science"],
//             grades: [4, 4, 3],
//             gpa: 0

//         }
//     ];

//     let total_Subjects = 0;
//     const stddata = students.filter((std) => std.name == student);
//     // console.log(stddata)
//     stddata.forEach((sub) => {
//         total_Subjects += sub.subjects.length;
//     });

//     let sum = 0;

//     // console.log(stddata)
//     stddata.forEach((g) => {


//         g.grades.forEach(s => {

//             sum += s;
//         });
//     });
//     console.log(sum);

//     gpa = sum / total_Subjects;

//     // console.log(gpa)



//     stddata.map((std) => {
//         std.gpa = gpa;
//     });

//     // students.filter((std) => {

//     //     if (std.name == student) {

//     //         std.gpa = gpa
//     //     }
//     // })



//     return students;





// };

// console.log(calculateGpa("Jane Smith"));
// console.log(calculateGpa("Jennifer Lopez"));
// console.log(calculateGpa("Ivan Clark"));



// const studnetsInfo = {
//     "name": "Mcdev",
//     "className": "CA161",
//     "phoneNumber": 088287852
// };

// console.log(studnetsInfo.className);


// json file contains a list of employee information 

// every employee has , name, id, phone, address--{} streen, home , neghbor, hobies : []
// salary 

let employeeInformation = `[
	{
		"firstName": "Mc",
		"lastName": "Hamouda",
		"phone": 565656,
		"subjects": [
			{
				"maths": {
					"marks": [1, 2, 3, 4, 5]
				}
			},
			"english",
			"science"
		]
	},
	{
		"firstName": "Najma",
		"lastName": "Abdi",
		"phone": 23,
		"subjects": [
			{
				"maths": {
					"marks": [1, 2, 3, 4, 5]
				}
			},
			"english",
			"science"
		]
	}
]`;

// from string to json
employeeInformation = JSON.parse(employeeInformation);

console.log(employeeInformation);

console.log(employeeInformation[0].firstName);
console.log(employeeInformation[0].lastName);

console.log(employeeInformation[1].firstName);
console.log(employeeInformation[1].lastName);

// from object to json string
employeeInformation = JSON.stringify(employeeInformation);

console.log(employeeInformation);