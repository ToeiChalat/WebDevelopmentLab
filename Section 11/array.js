

function printReverse(array) {
	var reverse = new Array();
	for(var i = array.length - 1; i >= 0; i--) {
		reverse.push(array[i]);
	}
	return reverse;
}

function isUniform(array) {
	var firstItem = array[0];
	var result = true;
	array.forEach(function(item) {
		if (item !== firstItem) {
			result = false;
		} 
	});
	return result;
}

function sumArray(array) {
	var sum = 0;
	array.forEach(function(item) {
		sum += item;
	});
	return sum;
}

function max(array) {
	var max = array[0];
	array.forEach(function(item) {
		if (item > max)  max = item;
	});
	return max;
}