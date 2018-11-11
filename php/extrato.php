<?php
require_once 'connector.php';

function listaMovimentos($mes,$ano,$tipo){
  $dtIni = strtotime($ano.'/'.$mes.'/01');
  $dtFin = date("Y/m/d",strtotime("+1 month", $dtIni));
  $dtFin = date("Y/m/d",strtotime("-1 day",$dtFin));

  $dtIni = date_format($dtIni,'Y/m/d');
  $dtFin = date_format($dtFin,'Y/m/d');

  $consulta = "SELECT id, tipo, categoria, data, valor from movimentacao where data between '".$dtIni."' AND '".$dtFin."'";

  switch ($tipo) {
    case 1:
      $consulta = $consulta."AND tipo = 1";
      break;
    case 2:
      $consulta = $consulta."AND tipo = 2";
      break;
  }

  $banco = getConnection();
  $ret = mysqli_query($banco,$consulta);

  $mov = array();
  while ($item = mysqli_fetch_assoc($ret)) {
    array_push($mov,$item);
  }

  return $mov;
}
?>
