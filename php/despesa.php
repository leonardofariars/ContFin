<?php
require_once 'connector.php';

function incluiDespesa($categoria,$data,$valor,$descricao){
    $banco = getConnection();
    $sql = "INSERT INTO movimentacao (`tipo`, `categoria`, `data`, `valor`, `descricao`) VALUES ('2', '".$categoria."', '".$data."', '".$valor."', '".$descricao."')";
    mysqli_query($banco,$sql);
}

function excluiDespesa($id){
    $banco = getConnection();
    $sql = "DELETE FROM movimentacao WHERE `id` = '".$id."'";
    mysqli_query($banco,$sql);
    
}

?>