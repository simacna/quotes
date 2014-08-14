

window.onload = function() {
	document.getElementById("fetch").onclick = fetchClick;
};

function fetchClick() {
	var request = new XMLHttpRequest();
	request.open("GET", "https://webster.cs.washington.edu/stepp/quote/quote.php", false);
	request.send();
	document.getElementById("quote").innerHTML = request.responseText;
}
