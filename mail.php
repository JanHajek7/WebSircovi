<?php

$name = $_GET["name"];
$surname = $_GET["surname"];
$email = $_GET["email"];
$msg = $_GET["msg-area"];


$to = 'uctarna@sircovi.cz';

$subject = 'Web - Dotaz';

$message = "
<html>

<style>
html {
    font-size: 15px
  }
</style>
<div>$msg</div>
<br>
<br>
<div>
    <strong>$name  $surname</stong>
</div>

</html>
";

$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

mail($to, $subject, $message, $headers);

header('Location: http://www.sircovi.cz');
