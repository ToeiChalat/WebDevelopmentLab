var age = prompt("How old are you?");
alert(age + " year is roughly " + age * 365 + " days");

if (age < 0 ) {
	alert("error age is negative");
} 

if (age === 21) {
	console.log("happy 21st birthday!!");
}

if (age % 2 === 1) {
	console.log("your age is odd!");
}

if (Number.isInteger(age / age)) {
	console.log("perfect square");
}