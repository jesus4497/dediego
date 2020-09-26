<?php
header("Content-Type: text/html;charset=utf-8");
$pagina = "gracias.asp";
Header("Location: $pagina");
?>
<?php
$para = 'TU@TUASESORENLAISLA.ES';
$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];
$contenido .= "Este mensaje fue enviado por: " . $nombre . " \r\n";
$contenido .= "Número de teléfono: " . $telefono . " \r\n";
$contenido .= "Correo electrónico: " . $mail . " \r\n";
$contenido .= "Mensaje: " . $mensaje . " \r\n";
$contenido .= "Acepto la política de Privacidad" . $checkbox . " \r\n";
mail($para, $nombre, $contenido);
?>