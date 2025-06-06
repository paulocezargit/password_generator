function Generate(){

	const length = parseInt(document.getElementById('number_characters').value);
	const useUppercase = document.getElementById('uppercase_letters').checked;
	const useLowercase = document.getElementById('lowercase_letters').checked;
	const useNumbers = document.getElementById('numbers').checked;
	const useSymbols = document.getElementById('special_symbols').checked;
	const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
	const numberChars = "0123456789";
	const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?/";

	let allChars = "";
	if (useUppercase) allChars += uppercaseChars;
	if (useLowercase) allChars += lowercaseChars;
	if (useNumbers) allChars += numberChars;
	if (useSymbols) allChars += symbolChars;

	if (!allChars) {
		alert("Please select at least one character type.");
		return;
	}

	if (isNaN(length) || length <= 0) {
		alert("Please enter a valid number of characters.");
		return;
	}

	let password = "";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * allChars.length);
		password += allChars[randomIndex];
	}

	const display = document.querySelector('.p-display');
	display.textContent = password;

}

document.getElementById('button_generate').addEventListener('click', Generate);