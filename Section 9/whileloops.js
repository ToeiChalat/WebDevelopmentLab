console.log("Print all numbers between -10 and 19");
// var num = -10;
// while(num <= 19) {
// 	console.log(num);
// 	num++;
// }
for (var i = -10; i <= 19; i++) {
	console.log(i);
}

console.log("Print all even numbers between 10 and 40");
// num = 10;
// while (num <= 40) {
// 	if (num % 2 === 0) {
// 		console.log(num);
// 	}
// 	num++;
// }
for (var i = 10; i <= 40; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

console.log("Print all odd numbers between 300 and 333");
// num = 300;
// while (num <= 333) {
// 	if (num % 2 !== 0) {
// 		console.log(num);
// 	}
// 	num++;
// }
for (var i = 300; i <= 330; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
// num = 5;
// while (num <= 50) {
// 	if (num % 3 === 0 && num % 5 === 0) {
// 		console.log(num);
// 	}
// 	num++;
// }

for (var i = 5; i <= 50; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(i);
	}
}
