<?php
$quote = file_get_contents("https://api.forismatic.com/api/1.0/?method=getQuote&forma..");
$json = json_decode($quote);
echo $json->quoteText;
?> 