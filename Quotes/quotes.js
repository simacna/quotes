// CSE 154
// JavaScript code for "Quote of the Day" example
// (uses Ajax to fetch quotes from a server script)
//
// e.g.
// https://webster.cs.washington.edu/stepp/quote/quote.php
// or
// https://webster.cs.washington.edu/stepp/quote/quote.php?count=10

window.onload = function() {
	document.getElementById("fetch").onclick = fetchClick;
};

function fetchClick() {
	var request = new XMLHttpRequest();
	request.open("GET", "https://webster.cs.washington.edu/stepp/quote/quote.php", false);
	request.send();
	document.getElementById("quote").innerHTML = request.responseText;
}
