<?php
require_once 'connector.php';

function incluiReceita($categoria,$data,$valor,$descricao){
  $banco = getConnection();
  $sql = "INSERT INTO movimentacao (`tipo`, `categoria`, `data`, `valor`, `descricao`) VALUES ('1', '".$categoria."', '".$data."', '".$valor."', '".$descricao."')";
  mysqli_query($banco,$sql);
}

function excluiReceita($id){
  $banco = getConnection();
  $sql = "DELETE FROM movimentacao WHERE `id` = '".$id."'";
  mysqli_query($banco,$sql);
}

?>
