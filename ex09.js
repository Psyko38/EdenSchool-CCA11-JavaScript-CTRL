function encodePassword(password, encodeFunction) {
	return encodeFunction(password);
}

function encodeRot8(password) {
	for (let i = 0; password.length > i; i++) {
      let varr = password.charCodeAt(i) + 8)
		console.log(password.fromCharCode();
	}
}

function encodeRot16(password) {
	// Écrire le code ici
}

console.log(encodePassword("abc", encodeRot8)); // Résultat attendu: "ijk";
console.log(encodePassword("abc", encodeRot16)); // Résultat attendu: "qrs";
console.log(encodePassword("xyz", encodeRot8)); // Résultat attendu: "fgh";
console.log(encodePassword("xyz", encodeRot16)); // Résultat attendu: "nop";

console.log(indexOf(a, character));
