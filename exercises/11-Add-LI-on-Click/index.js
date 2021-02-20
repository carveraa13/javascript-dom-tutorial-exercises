let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let elem = document.createElement("LI");
	elem.innerHTML = "Fourth element";
	document.querySelector("#myList").appendChild(elem);
});
