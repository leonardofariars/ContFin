<?php
function getConnection(){
	$server = 'web.farroupilha.ifrs.edu.br:1080';
	$user = 'Leonardofaria';
	$password = 'Leonardo';
	$database = 'Leonardofaria';

	$connection = mysqli_connect($server, $user, $password, $database);

	if (!$connection) {
		echo "Não foi possível conectar: " . mysql_error();
		exit;
	} else {
		return $connection;
	}
}
 ?>
