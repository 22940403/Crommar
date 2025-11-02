<?php
// Conexión a la base de datos
$host = 'localhost';
$user = 'root';
$pass = 'Chapala.123';
$db = 'crommar';
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die('Error de conexión: ' . $conn->connect_error);
}

$nombre = isset($_POST['nombre']) ? $conn->real_escape_string($_POST['nombre']) : '';
$email = isset($_POST['email']) ? $conn->real_escape_string($_POST['email']) : '';
$mensaje = isset($_POST['mensaje']) ? $conn->real_escape_string($_POST['mensaje']) : '';
if (strlen($nombre) < 3 || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($mensaje) < 10) {
    echo 'Datos inválidos.';
    exit;
}

$sql = "INSERT INTO contactos (nombre, email, mensaje) VALUES ('$nombre', '$email', '$mensaje')";
if ($conn->query($sql) === TRUE) {
    $conn->close();
    header('Location: index.html?enviado=1#contacto');
    exit;
} else {
    $conn->close();
    header('Location: index.html?enviado=0#contacto');
    exit;
}
$conn->close();
?>
