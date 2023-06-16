<?php
header('Content-Type: application/json');

$postData = file_get_contents('php://input');
$data = empty($_POST) ? json_decode($postData, true) : $_POST;

var_dump($_POST);
var_dump($data);
var_dump($postData);

http_response_code(500);

$lastname = htmlspecialchars($data['lastname']);
$firstname = htmlspecialchars($data['firstname']);
$mail = htmlspecialchars($data['mail']);
$tel = htmlspecialchars($data['tel']);
$demand = htmlspecialchars($data['demand']);
$conditions = $_POST['conditions'];

function response($status, $message = null) {
    http_response_code($status);
    $response = [
        'status' => $status,
        'message' => $message,
    ];
    $response = array_filter($response, fn($value) => $value !== null);
    echo json_encode($response);
    exit();
}

if (empty($firstname) || empty($lastname) || empty($mail)) {
    response(401, "Les champs obligatoires ne sont pas tous remplis");
} elseif (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
    response(401, "L'email est invalide");
} elseif(!preg_match("/^\d+$/", $tel)){
    response(401, "Le numéro de téléphone est invalide");
}
    

$to = "contact@fromtok.fr";
$from = "formulaire@fromtok.fr";
$subject = "Nouvelle demande de ".$lastname." ".$firstname;
$message = "Nom : ".$lastname."\r\n";
$message .= "Prénom : ".$firstname."\r\n";
$message .= "Adresse mail : ".$mail."\r\n";
$message .= "Numéro de téléphone : ".$tel."\r\n\n";
$message .= "Demande : ".$demand."\r\n";
$headers = "From: ".$from."\r\n";

$success = mail($to, $subject, $message, $headers);

if ($success) {
    response(200, "Le message a été envoyé avec succès");
} else {
    response(501, "Echec de l'envoi du mail");
}

echo json_encode($response);


?>
