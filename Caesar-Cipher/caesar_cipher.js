/* JavaScript for caesar_cipher.htm */

function Encrypt(random) {
	var plaintext = document.getElementById("plaintext").value;
	var ciphertext = "";
	var key = document.getElementById("key").value;
	var randKey = Math.floor(Math.random() * (25 - 1)) + 1; //Math.random() * (max - min) + min;
	
	if (plaintext.length > 3000) {
		alert("Plaintext excedes 3000 characters. That's too many!");
		return;
	}
	
	if (plaintext.length == 0)
		return;
	
	for (var i = 0; i < plaintext.length; i++) {
		var letter = plaintext.charAt(i);
		if (IsLetter(letter) == true) {
			if (random == true) 
				ciphertext += Shift(letter, randKey); //uses a random integer
			else 
				ciphertext += Shift(letter, key);
		} else {
			ciphertext += letter;
		}
	}
	
	document.getElementById("ciphertext").value = ciphertext;
}

function Decrypt() {
	var ciphertext = document.getElementById("ciphertext").value;
	var plaintext = "";
	var key = document.getElementById("key").value;
	
	if (ciphertext.length > 3000) {
		alert("Cipher excedes 3000 characters. That's too many!");
		return;
	}
	
	if (ciphertext.length == 0)
		return;
	
	for (var i = 0; i < ciphertext.length; i++) {
		var letter = ciphertext.charAt(i);
		if (IsLetter(letter) == true) {
			plaintext += Shift(letter, -key);
		} else {
			plaintext += letter;
		}
	}
	
	document.getElementById("plaintext").value = plaintext;
}

function ForceDecrypt() {
	var ciphertext = document.getElementById("ciphertext").value;
	var plaintext = "";
	
	if (ciphertext.length > 3000) {
		alert("Cipher excedes 3000 characters. That's too many!");
		return;
	}
	
	if (ciphertext.length == 0)
		return;
	
	for (var u = 0; u < 26; u++) {
		plaintext += 26-u + ".\t";
		for (var i = 0; i < ciphertext.length; i++) {
		var letter = ciphertext.charAt(i);
			if (IsLetter(letter) == true) {
				plaintext += Shift(letter, u);
			} else {
				plaintext += letter;
			}
		}
		if (u < 26) plaintext += "\n";
	}
	
	document.getElementById("plaintext").value = plaintext;
}

function Shift(letter, key) {
	var code = letter.charCodeAt(0);
	var key = parseInt(key);
	var upper = false;
	
	if (code >= 65 && code <= 90) {
		code -=65;
		upper = true;
	}
	if (code >= 97 && code <= 122) {
		code -=97;
		upper = false;
	}
	
	code += key;
	code = mod(code, 26);
	
	if (upper) code += 65;
	else code +=97
	
	return String.fromCharCode(code);
}

function IsLetter(c) {
	if (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z')
		return true;
	else
		return false;
}

function Clear(box) {
	if (box == "plaintext") document.getElementById("plaintext").value = "";
	if (box == "ciphertext") document.getElementById("ciphertext").value = "";
	return;
}

function Validate(input) {
	if (input.value < 0) input.value = 0;
	if (input.value > 25) input.value = 25;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}




















