function login() {
	var corUsername = "bry";
	var corPassword = "123";

	var typeUsername = document.getElementById("username").value;
	var typePassword = document.getElementById("password").value;

	var usernameError = document.getElementById("usernameError");
	var passwordError = document.getElementById("passwordError");

	usernameError.innerText = "";
	passwordError.innerText = "";

	if (typeUsername !== corUsername) {
		usernameError.innerText = "Incorrect Username";
}

	if (typePassword !== corPassword) {
	passwordError.innerText = "Incorrect Password";
}
	if (typeUsername === corUsername && typePassword === corPassword) {
	alert("Login successful!");
	window.location.href = "index1.html";
	}
}