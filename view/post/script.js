
export default function enviarDados(event) {
    event.preventDefault();
    // selecionando objetos html
    let form = document.querySelector("form")

    let inputId = form.idUser
    let inputNome = form.nomeUser
    let inputPreco = form.telUser

    // obtendo o conteúdo de texto
    let id = inputId.value
    let nome = inputNome.value
    let preco = inputPreco.value

    if (id == "" || nome == "" || preco == "") {
        console.log("vazio")
    } else {
        let produto = {
            id: id,
            nome: nome,
            preco: preco
        }
        form.reset()
        console.log(produto)
        incluirDados(produto)
    }

}

function incluirDados(produto) {
    let url = "../../controller/POST_produto.php"
    fetch(url, {
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
            setTimeout(location.reload(), 5000)
        })
}