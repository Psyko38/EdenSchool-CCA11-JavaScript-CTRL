character = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

function encodePassword(password, encodeFunction) {
	return encodeFunction(password);
}

function encodeRot8(password) {
	let SplitText = password.split();
	for (let i = 0; i > 8; i++) {}
}

function encodeRot16(password) {
	// Écrire le code ici
}

console.log(encodePassword("abc", encodeRot8)); // Résultat attendu: "ijk";
console.log(encodePassword("abc", encodeRot16)); // Résultat attendu: "qrs";
console.log(encodePassword("xyz", encodeRot8)); // Résultat attendu: "fgh";
console.log(encodePassword("xyz", encodeRot16)); // Résultat attendu: "nop";
