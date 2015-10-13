var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var F = []
var D = []
var C = []
var B = []
var A = []

lowestScore = 101;
highestScore = 0;


for (var i = 0; i < scores.length; i++) {
	var score = scores[i];

	if (score <= 60) {
		console.log("F", score);
		F.push(score);
	}

	else if (score <= 70) {
		score = "D";
		console.log("D", score);
		D.push(score);
	}

	else if (score <= 80) {
		score = "C";
		console.log("C", score);
		C.push(score);
	}

	else if (score <= 90) {
		score = "B";
		console.log("B", score);
		B.push(score);
	}

	else if (score <= 100) {
		score = "A";
		console.log("A", score);
		A.push(score);
	}

	if (score < lowestScore) {
		lowestScore = score;
	}

	if (score > highestScore) {
		highestScore = score;
	}
}

console.log("NumA", A.length);
console.log("NumB", B.length);
console.log("NumC", C.length);
console.log("NumD", D.length);
console.log("numF", F.length);

console.log("highestScore", highestScore);
console.log("lowestScore", lowestScore);
