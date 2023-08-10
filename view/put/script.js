var formulario = document.querySelector('form');
var inputId = formulario.idUser
var inputNome = formulario.nomeUser
var inputTel = formulario.telUser
var inputEmail = formulario.emailUser
var inputCep = formulario.cepUser
var inputCpf = formulario.cpfUser
var btn = document.querySelector('.btn')

btn.addEventListener('click', buscarProduto)


function buscarProduto(event) {
    event.preventDefault();
    
    let idUser = inputId.value
    let nomeUser = inputNome.value
    let telUser = inputTel.value
    let emailUser = inputEmail.value
    let cepUser = inputCep.value
    let cpfUser = inputCpf.value
    
    formulario.reset()

    let usuario = {
        id: idUser,
        nome: nomeUser,
        tel: telUser, 
        email: emailUser, 
        cep: cepUser, 
        cpf: cpfUser
    }

    let url = "../../controller/PUT_produto.php"

    fetch(url,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario)
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (response) {
        console.log(response)
    })
    
}




