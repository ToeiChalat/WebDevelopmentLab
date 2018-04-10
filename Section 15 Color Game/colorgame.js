var numberOfSquares = 6;
var colors;
var pickedColor;

var header = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messsge = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var buttonMode = document.querySelectorAll(".buttonMode");

init();

function init() {
	setUpModeButton();
	setUpSquares();
	resetButton.addEventListener("click", resetGame);
	resetGame();
}

function setUpModeButton() {
	for (var i = 0; i < buttonMode.length; i++) {
		buttonMode[i].addEventListener("click", function() {
			buttonMode[0].classList.remove("selected");
			buttonMode[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numberOfSquares = 3;
			} else {
				numberOfSquares = 6;
			}
			resetGame();
		});
	}
}

function setUpSquares() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function(){
			var selectColor = this.style.backgroundColor
			if (selectColor !== pickedColor) {
				onWrongColorPick(this);
			} else {
				onRightColorPick(selectColor);
			}
		});
	}
}

function resetGame() {
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
	message.textContent = ""
	header.style.backgroundColor = "steelblue"
}

function generateRandomColors(size) {
	var colors = []
	for (var i = 0; i < size; i++) {
		colors.push(randomColor());
	}
	return colors;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}

function pickColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

function onRightColorPick(selectColor) {
	header.style.backgroundColor = selectColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = selectColor;
	}
	message.textContent = "Correct!";
	resetButton.textContent = "Play Again?";
}

function onWrongColorPick(square) {
	message.textContent = "Try Again";
	square.style.backgroundColor = "#232323";
}
