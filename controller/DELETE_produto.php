<?php

require_once './ler.php';
require_once './escrever.php';

$dados = json_decode(file_get_contents('php://input'));

$id = $dados->id;

$usuarios = json_decode(realizarLeitura());

for ($i = 0; $i < count($usuarios); $i++)
{
  if ($usuarios[$i]->id == $id)
  {
    unset($usuarios[$i]);
    break;
  }
}
$lista = [];
foreach ($usuarios as $user)
{
  if (!$user == null)
  {
    array_push($lista, $user);
  }
}

$json = json_encode($lista);
escrever($json);

echo $json;

?>