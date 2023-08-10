var formulario = document.querySelector('form');
var inputId = formulario.idUser
var inputNome = formulario.nomeUser
var inputPreco = formulario.telUser
var btn = document.querySelector('.btn')

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

    let url = "../../controller/PATCH_produto.php"

    fetch(url,{
        method: "PATCH",
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
    })
    
}




