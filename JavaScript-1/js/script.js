"use strict";

let Tc = 21;
let Tf = (9/5) * Tc + 32;

alert(Tf);

let name = 'Vasiliy';
let admin = name;

alert(name);

alert(1000 +'108'); /* The result is unsatisfying -
 browser thinks that 108 is just a text and adds it to the number without mathematical operation. */

let message = prompt('Sensei, where is task number 3 in the homework?..');
alert(message);
<<<<<<< Updated upstream
=======

let result1 = 10 + 10 + '10';
console.log(result1);
/* '10' is not recognized as a number and added to the sum of first two as a text = 2010 */
let result2 = 10 + '10' + 10;
console.log(result2);
/* The '10' in between made operation add the first and third numbers to the string = 101010 */
let result3 = 10 + 10 + +'10';
console.log(result3);
/* +'10' made the text number and operation was completed succesfully = 30 */
let result4 = 10 / -"";
console.log(result4);
/* Due to impossibility to make operation to Infinity and - before it = the result is -Infinity */ 
let result5 = 10 / +"2.5";
console.log(result5); 
/* With . instead of , operation made working - otherwise it`s NaN */ 

let mode = "normal"; /* Correct */
let my_valu3 = 102; /* Still correct */
/* let 3my_value3 = "102";  Incorrect because of first number in value name */
let __hello__ = "world"; 
alert(__hello__); /* Working allright */
let $$$ = "money"; 
alert($$$); /* Yep, still working */
let !0_world = true; /* Nope, the value is completely incorrect */
>>>>>>> Stashed changes
