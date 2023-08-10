<?php
    class Produto{
        public $id;
        public $nome;
        public $tel;
        public $email;
        public $cep;
        public $cpf;

        function __construct($id, $nome, $tel, $email, $cep, $cpf) {
            $this->id = $id;
            $this->nome = $nome;
            $this->tel = $tel;
            $this->email = $email;
            $this->cep = $cep;
            $this->cpf = $cpf;
        }
    }
?>