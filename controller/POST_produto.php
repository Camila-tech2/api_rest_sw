<?php
require_once '../model/Produto.php';
require_once './ler.php';
require_once './escrever.php';

// recebendo os dados do front
$dados = json_decode(file_get_contents('php://input'));
$usuarios = json_decode(realizarLeitura());
$postar = true;
for ($i = 0; $i < count($usuarios); $i++)
{
  if ($usuarios[$i]->id == $dados->id)
  {
    $postar = false;
    break;
  }
}
if ($postar)
{
  $usuario = new Produto($dados->id, $dados->nome, $dados->tel, $dados->email, $dados->cep, $dados->cpf);

  // empurrando no registro
  array_push($usuarios, $usuario);

  // escrevendo o novo registro no arquivo
  $json = json_encode($usuarios);
  escrever($json);
  echo json_encode($usuario);
}
else
{
  echo json_encode("vish");
}

?>