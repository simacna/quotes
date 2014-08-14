<?php

# sleep(1);

# randomly fail 1/8 of the time
if (isset($_GET["error"])) {
	header("HTTP/1.1 500 Internal Server Error");
	die("The server had an internal error on your request; sorry.");
}

$text = file_get_contents("quotes.txt");
$quotes = preg_split("/\r?\n\r?\n/", $text);
$count = 1;
if (isset($_GET["count"])) {
	$count = max(1, (int) $_GET["count"]);
}

header("Content-type: text/plain");
for ($i = 0; $i < $count; $i++) {
	print(trim($quotes[array_rand($quotes)]) . "\n");
}
