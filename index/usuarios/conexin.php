<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $nomusuario = $_POST["nomusuario"];
    $email = $_POST["email"];
    $confirm_email = $_POST["confirm_email"];
    $contraseña = $_POST["contraseña"];
    $dia = $_POST["dia"];
    $mes = $_POST["mes"];
    $año = $_POST["año"];
}
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "usuarios";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Error en la conexión: " . $conn->connect_error);
    }

    $sql = "INSERT INTO usuarios(nombre, apellido, nombreusuario, email, confirm_email, contraseña, dia, mes, año) VALUES 
  ('$nombre','$apellido','$nomusuario','$email','$confirm_email','$contraseña','$dia','$mes','$año')";
  
{
  if ($conn->query($sql) === TRUE) {
    
    // Redirige al usuario al index o a cualquier otra página después del éxito
    header("Location:../mitos/Index.html");
    exit; // Asegúrate de que no haya más salida después de la redirección
} else {
     echo "Error al registrar los datos: " . $conn->error;
}

    $conn->close();
    }
?>
