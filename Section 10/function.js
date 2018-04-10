
function isEven(number) {
	return number % 2 === 0;
}

function factorial(num) {
	// if (num === 0 ) {
	// 	return 1;
	// } else {
	// 	var result = 1
	// 	while (num > 0) {
	// 		result *= num;
	// 		num--;
	// 	}
	// 	return result;
	// }

	var result = 1
	for(var i = 2; i <= num; i++) {
		result *= num;
	}
	return result;
}


function kababToSnake(string) {
	// for (var i = 0; i < string.lenght; i++) {
	// 	if (string[i] === "-") {
	// 		string.replace(i, "_");
	// 	}
	// }
	return string.replace("-","_");
}