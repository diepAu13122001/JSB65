// variable-----------------------------
// var
// var a = 10;
// console.log(a);

// // var f = 0;
// // while(f < 10) {
// //     console.log(f);
// //     f++;
// // }

// for (var index = 0; index < 5; index++) {
//   console.log(index);
// }

// console.log(index); // 5

// // let/ const
// let x = 10;
// const y = 5;
// y += 10;
// console.log(y);

// for (let ind = 0; ind < 5; ind++) {
//   console.log(ind);
// }

// console.log(ind); // error (not defined)

// data type
// string
// let string_example = "What's your full name?";
// let string_example2 = "What's your full name?";
// let code = `<h1> Error </h1>`;

// const full_name = prompt("What's your full name?");
// // validate - DOM -----------------------------------
// if (!full_name) {
//   document.getElementsByTagName("body")[0].innerHTML += code;
// } else {
//   const h2 = document.createElement("h2");
//   h2.innerText = "Your full name: " + full_name;
//   // add in body
//   document.getElementsByTagName("body")[0].prepend(h2);
// }

// number
// let age = parseInt(prompt("How old are you?"));
// // convert str => number: parseFloat/ parseInt
// age++;
// console.log("Your age in next year is: " + age);
// document.writeln("Your age in next year is: " + age);
// age--;
// document.writeln("Now your age is: " + age);

// let x = 15;
// if (x % 2 == 0) {
//   alert("So chan");
// } else if (x % 2 == 1) {
//   alert("So le");
// }

// function + arrow function----------------
// func
// function sum(x, y) {
//   return x + y;
// }

// console.log("Sum", sum(12, 7));

// // arrow func
// const sum1 = (x, y) => {
//   return x + y;
// };

// console.log(sum1(12, 9));

// code challenges
function cutString(str) {
  return str.slice(0, 2);
}

const cutStr = (str) => str.slice(0, 2);
console.log(cutStr("Hello"));

// function submitForm(email, name, message) {}

// array------------------------------------
