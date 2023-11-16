/**
 * == Functions
 *  -- built in functions == Done
 *  -- user defined functions == Done
 *      == function statement , function declaration == Done
 *      == function expression == Done
 *      -- (call back function)(anonymous function)
 *
 * -- default values == Done
 * -- Hoisting  === Done
 * -- How js Works == Done
 * -- String Object
 * -- Array
 * -- Math Object
 *
 * Date Object (self study)
 *
 *
 */

// functions params , 2
// user defined function
// function statement
// function add(x, y) {
// 	console.log("x : ", x);
// 	console.log("y : ", y);
// 	console.log(x + y);
// }

// // built in function
// var result = Number("10");
// console.log(result);
// console.log(add(3, 6));

// var result = add(2, 6);
// console.log(result + 10);

// console.log("---------------");

// console.log(add(3, 8));

// console.log("---------");
// add( "mona", "ali" );

// add("mona", 122);
// console.log("--------------");
// add("ahmed", "ali");
// console.log("---------");
// add(true, true);
// console.log("-----------");
// add(5, 7);
// add(3, 6, 177);
// // functions arguments , 2
// add(3, 4);
// console.log("-------");
// add(10, 15);
// console.log("-------");
// add(5, 10);

// function expression
// var add = function (x, y) {
// 	x = x || 0;
// 	y = x || 0;
// 	console.log("x : ", x);
// 	console.log("y : ", y);
// 	console.log(x + y);
// };
// add();

// console.log(fname);
// var fname = "mona";
// console.log(fname);
// console.log(window);
// console.log(fname);

// console.log(fname);
// var fname = "mona";
// console.log(fname);

// console.log("///// Hoisting/////////");
// var fname;
// console.log(fname);
// fname = "mona";

// console.log(fname);
/** */

// add(4, 5);
// function add(x, y) {
// 	console.log(x + y);
// }

/** anonymous function */
// var result = function (x, y) {
// 	console.log(x + y);
// };
// result(3, 4);
/** Call Back Functions */

// var frontTrack = function (instructorName) {
// 	console.log("Welcome Front, your instructor is : ", instructorName);
// };

// function welcome(myFun) {
// 	myFun("Mona Ali");
// }

// welcome(function () {
// 	console.log("Welcome dot net");
// });

// console.log("-------");
// welcome(frontTrack);
/**--------string
 * length -->
 *
 * ------------
 * == charAt
 * == indexOf -->
 * == lastIndexOf
 * == toUpperCase
 * == split
 *
 * ----- */

// var fname = "username=mona;password=123";

// var result = fname.split(";");
// console.log(result[0]);
// console.log(result[0].split("=")[1]);
// console.log(result[0].split("=")[1]);
// var result = fname.charAt(2);
// var result = fname.lastIndexOf("h");
// console.log(result);
// console.log(fname.length);
// for (var i = 0; i < fname.length; i++) {
// 	console.log(fname[i]);
// }

// var studentsNames = [
// 	"mona",
// 	function () {
// 		console.log("Welcome from arr");
// 	},
// 	"Ali",
// 	true,
// 	[30, 50, 79],
// ];

// var result = studentsNames[1];
// result();
// studentsNames[0] = "mona"; // set
// studentsNames[1] = "ali";

// console.log(studentsNames); // get
// for (var i = 0; i < studentsNames.length; i++) {
// 	console.log("Welcome ", studentsNames[i]);
// }

/**-------------------- */
/**
 * Array
 * ----------------
 * length
 * ----------------
 * == push
 * == unshift
 * == pop
 * == shift
 * == reverse
 *
 */

// var arr = ["mona", "ali", "ahmed", "ala"];

// var result = arr.join();
// console.log(result);
// var arr = [20, 10, 33, 1, 6, 3, 1, 2];
// arr.sort(); // ascii code -- call back function
// // arr.reverse();
// arr.shift();
// arr.shift();
// arr.shift();

// arr.unshift("shimaa");
// arr.unshift("1223");
// for (var i = 0; i < 10; i++) {
// 	arr.push(i + 1);
// }
// console.log(arr);

// var str = "ITI"; // aras

// var reveredString = str.split("").reverse().join("");
// console.log(reveredString == str);

// 3 -> fizz
// 5 -- > buzz
// 15 -- > fizzBuzz
// 7 -- > none

// 21-->
