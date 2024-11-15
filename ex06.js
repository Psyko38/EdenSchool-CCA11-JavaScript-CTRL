function getReduction(price, age) {
	if (age > 25) {
		return price * 1.0;
	} else if (age <= 25 && age > 18) {
		return price * 0.3;
	} else if (age <= 18 && age >= 5) {
		return price * 0.5;
	} else if (age < 5) {
		return price * 0.0;
	}
}

console.log(getReduction(10, 5)); // Résultat attendu: 0
console.log(getReduction(150, 25)); // Résultat attendu: 45
