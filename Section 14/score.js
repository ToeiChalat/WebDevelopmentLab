var p1Btn = document.querySelector("#p1");
var p2Btn = document.querySelector("#p2");
var rst = document.querySelector("#rst");
var input = document.querySelector("input");
var maxDisplay = document.querySelector("p span");
var h1 = document.querySelector("h1");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var max = 7;
var gameOver = false;

p1Btn.addEventListener("click", function() {
	p1Score = checkScore(p1Score, 1);
	p1Display.textContent = p1Score;
});
p2Btn.addEventListener("click", function() {
	p2Score = checkScore(p2Score, 2);
	p2Display.textContent = p2Score;
})
rst.addEventListener("click", function() {
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	resetView();
});

input.addEventListener("change", function() {
	max = input.value;
	maxDisplay.textContent = max;
});

function checkScore(score, player) {
	if (!gameOver) {
		score++;
		if (score == max) {
			gameOver = true;
			if (player === 1) {
				p1Display.classList.add("winner");
			} else {
				p2Display.classList.add("winner");
			}
		}
	}
	return score;
}

function resetView() {
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}



