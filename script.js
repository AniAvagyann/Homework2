//1

let a = +prompt('enter number');
let b = +prompt('enter number');

alert(a+b);
alert(a-b);
alert(a/b);
alert(a*b);
alert(a%b);

//2

let name = "Ani";
let age = 18;
let hello = `My name is ${name}, I am ${age} years old.`;
console.log(hello);

//3

let num = prompt("Enter a number");
if(num < 0) {
    alert("yes")
}
else {
    alert("no");
}

//4

let numberr = prompt('enter your number');
if(numberr % 2 === 0) {
    alert("even");
}
else{
    alert("odd");
}

//5

let number1 = prompt("Enter a number");
let number2 = prompt("Enter a number");
if (number1 % number2 === 0 || number2 % number1 === 0 ) {
    console.log(1)
}
else {
    console.log(0)
}
