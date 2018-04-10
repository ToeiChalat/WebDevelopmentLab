
var movieList = [
	{
		name: "Blade Runner",
		rating: 5,
		hasWatch: false
	},
	{
		name: "Spider man",
		rating: 4,
		hasWatch: true
	},
	{
		name: "Geostorm",
		rating: 4,
		hasWatch: false
	},
	{
		name: "Kingsman 2",
		rating: 4,
		hasWatch: true
	}
];

function run() {
	movieList.forEach(function(item) {
		var hasWatch;
		if (item.hasWatch) {
			hasWatch = "watched"
		} else {
			hasWatch = "not seen"
		}
		console.log("You have " + hasWatch + " \"" 
			+ item.name + "\" - " + item.rating + " starts");
	});
}