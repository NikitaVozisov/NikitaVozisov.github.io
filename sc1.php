<?php
$quote = file_get_contents("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en");
$json = json_decode($quote);
echo $json->quoteText;
?> 