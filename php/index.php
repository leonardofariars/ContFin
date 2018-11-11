<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';
require_once 'receita.php';
require_once 'despesa.php';
require_once 'extrato.php';

$app = new \Slim\App;

$app->get('/extrato/:mes/:ano/:tipo', function ($mes, $ano, $tipo, Response $response) use($app) {

  $movs = listaMovimentos($mes,$ano,$tipo);
  return $response->whthHeader('Content-type','application-jsin')->write(json_encode($movs, JSON_UNESCAPED_UNICODE));
  
});

?>
