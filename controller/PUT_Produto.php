<?php
    
    require_once './ler.php';
    require_once './escrever.php';
    
    $dados = json_decode(file_get_contents('php://input'));

    $id = $dados->id;
    $nome = $dados->nome;
    $tel = $dados->tel;
    $email = $dados->email;
    $cep = $dados->cep;
    $cpf = $dados->cpf;
    
    $usuarios = json_decode(realizarLeitura());
    
    foreach($usuarios as $u) {
        if($u->id == $id){
            $u->nome = $nome;
            $u->tel = $tel;
            $u->email = $email;
            $u->cep = $cep;
            $u->cpf = $cpf;
            break;
        }
    }

    $json = json_encode($usuarios);
    escrever($json);

    echo json_encode($json);
    
    
?>