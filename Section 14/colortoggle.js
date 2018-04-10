// var body = document.querySelector("body");
// var button = document.querySelector("button");
// button.addEventListener("click", function() {
// 	var bg = body.style.backgroundColor;
// 	if (bg != "purple") {
// 	 	body.style.backgroundColor = "purple";
// 	} else {
// 		body.style.backgroundColor = "white";
// 	}
// });

var button = document.querySelector("button");
button.addEventListener("click", function() {
	document.body.classList.toggle("purple");
});