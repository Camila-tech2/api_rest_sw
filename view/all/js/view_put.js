const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id")
const nome = urlParams.get("nome")
const preco = urlParams.get("preco")
//alert('deu certo')

var formulario = document.querySelector('form');
var inputId = formulario.idUser
var inputNome = formulario.nomeUser
var inputPreco = formulario.telUser
var btn = document.querySelector('.btn')

inputId.value = id
inputNome.value = nome
inputPreco.value = preco


btn.addEventListener('click', buscarProduto)


function buscarProduto(event) {
    event.preventDefault();
    
    let idUser = inputId.value
    let nomeUser = inputNome.value
    let telUser = inputPreco.value
    
    formulario.reset()

    let produto = {
        id: idUser,
        nome: nomeUser,
        preco: telUser
    }

    let url = "../../controller/PUT_produto.php"

    fetch(url,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(produto)
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (response) {
        console.log(response)
        window.location.href = '../../view/all/index.html'
    })
    
}




