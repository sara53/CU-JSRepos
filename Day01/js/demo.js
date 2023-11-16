/**
 *  == Variables
 *
 */

// camelCase
/**
 * first
 * firstName
 * firstSecondThird
 *
 */
// var firstName = "mona"; //string

// var myNum = 30.45; //number

// var flag = true; // boolean

// console.log(typeof firstName);
// console.log(typeof myNum);
// console.log(typeof flag);

// var fname;
// console.log(typeof fname);
// fname = 30; //
// console.log(typeof fname);
// fname = "ali";
// console.log(fname);
/**================================= */

// var fname = "ali";

// fname = "mona";

// fname = 40;

// console.log(typeof fname);
/**================================= */

// var fname = null; // js engine -- fname => empty Object {}
// console.log(typeof fname);
// fname = "ali";
// console.log(typeof fname);
/**================================= */

/** datatypes in js
 * -------------------------
 * Primitive DataType
 * -------------------------
 *  === string
 *  === number
 *  === boolean
 *  === undefined
 *  === null
 * ---------------------------
 *  Reference DataType
 *  == Object
 */

// var fname = "mona"; // literal creation
// var fname = String("Ali"); // method String
// var fname = String(50);

// var fname = 50;
// console.log(fname);
// console.log(typeof fname);

// var num = 30;

// var num = Number("ali");

// console.log(num);
// console.log(typeof num);

/** NaN --> Not a Number */

/** Falsy Values
 * -------------------
 * == [0, false, NaN, null ,"",undefined]
 * Truthy Values
 *
 */
// var flag = true;
// var flag = Boolean(" ");

// console.log(flag);
/**--------
 * 1- Arith --> (+,-,/,*)
 *
 * (+) ==> number + number --> add
 *     ==> string + string --> concat
 *
 * -----
 * == coercion --> js engine convert automatic from datatype to anther datatype
 * ------ */

// var num1 = 20; // number --> "20"
// var num2 = "mona"; //NaN string

// console.log(num1 + num2);
/**================== Comparasion Operation
 *
 *  [==] --> (values),
 *  [===] --> (values & Datatype)
 * false && --> false
 * =================== */
//(coercion)
// var fname = 10; // number
// var lname = "10"; // after coercion ==> 10 number

// console.log(fname === lname);

// var fname = true; // boolean -->  1 --> number

// var lname = "true"; // string --> NaN --> number

// console.log(fname == lname);
/**--------------------------- */

// var str1 = "266"; //  --> 266 --> number
// var str2 = 266; // 266 number

// console.log(str1 === str2);
/**-------------- Logical Operator
 * &&
 * -------------------------
 * true && true --> true
 * true && false --> false
 * false && true --> false
 * false && false --> false
 * ---------------------------------
 * ||
 *---------------------------------
 true || true --> true
 true || false --> true
 false|| true --> true
 false || false --> false
 * ------------- */

//  (4>1) || --> true

// (1>2) || (4<2)
/**============= Not
 * true ==> false
 * false --> true
 * ============== */

/** Short circuit */
// [0, false, NaN, null, "", undefined];
// "mona" && "ola";
// true && true

// 0 && "alaa"

// false && --> false

// "ali" && undefined
//  true && false --> false
// "" && "ahmed"
// false &&
/** */

// "mona" || "ola";

//0 || undefined-- > undefined
// false ||

// 0 || "alaa"

// "alaa" || 0

// "alaa" || undefined

// for (var i = 0; i < 3; i++) {
// 	console.log("Hello");
// }

// var i = 0;
// while (i < 3) {
// 	console.log("Hello");
// 	i++;
// }
// var i = 0;

// do {
// 	i++;
// 	console.log("Hello");
// } while (i < 3);
// k;

// var color = "red";

// if ( color === "red" )
//     console.log( "Your fav color is : red" );
// else
//     console.log( "You don't have any fav colors" );

// ternary operator
// color == "green"
// 	? console.log("Your fav color is : red")
// 	: console.log("You don't have any fav colors");
/** */

// var num1 = Number(prompt("Enter Your num1", 100)); // string
// var num2 = Number(prompt("Enter Your num2", 200)); // string
// console.log(num1 + num2);

// var i = 3;

// for (var i = 1; i < 7; i++) {
// 	document.writeln("<h" + i + ">Welcome from iti </h" + i + ">");
// }

// alert("you deleted this item");

// var result = confirm("are you sure you want to delete this item");

// true
// 	? document.writeln("You deleted this item")
// 	: document.writeln("Operation Canceld");

/** regex in js (self study) */

// document.writeln("<h1 class='test'>ALI</h1>");
