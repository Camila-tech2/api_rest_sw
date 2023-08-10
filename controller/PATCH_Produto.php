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
            if(!$nome == ""){
                $u->nome = $nome;
            }
            if(!$tel == ""){
                $u->tel = $tel;
            }
            if(!$email == ""){
                $u->email = $email;
            }
            if(!$cep == ""){
                $u->cep = $cep;
            }
            if(!$cpf == ""){
                $u->cpf = $cpf;
            }
            break;
        }
    }

    $json = json_encode($usuarios);
    escrever($json);

    echo json_encode($json);
    
    
?>