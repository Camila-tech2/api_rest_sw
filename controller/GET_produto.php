<?php
    
    require_once './ler.php';
    
    $dados = json_decode(file_get_contents('php://input'));

    $id = $dados->id;
    
    $usuarios = json_decode(realizarLeitura());
    
    foreach($usuarios as $u) {
        if($u->id == $id){
            $usuario = $u;
            break;
        }
    }


    echo json_encode($usuario);
    
    
?>