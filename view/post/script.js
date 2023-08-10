let btn = document.querySelector("button")
let form = document.querySelector("form")

btn.addEventListener('click', enviarDados)

function enviarDados(event){
    event.preventDefault();
    // selecionando objetos html
    let inputId = form.idProduto
    let inputNome = form.nomeProduto
    let inputPreco = form.precoProduto
    
    // obtendo o conteúdo de texto
    let id = inputId.value
    let nome = inputNome.value
    let preco = inputPreco.value

    let produto = {
        id: id,
        nome: nome,
        preco: preco
    }
    form.reset()
    
    incluirDados(produto)
}

function incluirDados(produto){
    let url = "../../controller/POST_produto.php"
    fetch(url,{
        method: "POST",
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
