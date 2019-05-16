<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once "vendor/autoload.php";

$name = $_GET["name"];
$surname = $_GET["surname"];
$email = $_GET["email"];
$msg = $_GET["msg-area"];

echo ("name" . $name);
echo "<br>";
echo ("surname" . $surname);
echo "<br>";
echo ("email" . $email);
echo "<br>";
echo ("msg" . $msg);




$mail = new PHPMailer(true);



$mail->From = "";
$mail->FromName = "Full Name";

$mail->addAddress("soschyhd@gmail.com", "Recipient Name");

//Provide file path and name of the attachments


$mail->isHTML(true);

$mail->Subject = "Subject Text";
$mail->Body = "<i>Mail body in HTML</i>";
$mail->AltBody = "This is the plain text version of the email content";
$mail->send();

if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message has been sent successfully";
}
