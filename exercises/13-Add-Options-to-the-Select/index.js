window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	let x = document.getElementById("mySelect");
	for (let i = 0; i < countries.length; i++) {
		x.innerHTML += "<option>" + countries[i] + "</option>";
	}
	x.addEventListener("change", function() {
		// alert(x.options[x.selectedIndex].text);
		alert(x.value);
	});
};
