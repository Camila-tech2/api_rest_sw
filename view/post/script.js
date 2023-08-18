export default function enviarDados(event) {
    event.preventDefault();
    // selecionando objetos html
    let form = document.querySelector("form");
  
    let inputId = form.idUser;
    let inputNome = form.nomeUser;
    let inputTel = form.telUser;
    let inputEmail = form.emailUser;
    let inputCep = form.cepUser;
    let inputCpf = form.cpfUser;
  
    // obtendo o conteúdo de texto
    let id = inputId.value;
    let nome = inputNome.value;
    let tel = inputTel.value;
    let email = inputEmail.value;
    let cep = inputCep.value;
    let cpf = inputCpf.value;
  
    if (
      id == "" ||
      nome == "" ||
      tel == "" ||
      email == "" ||
      cep == "" ||
      cpf == ""
    ) {
      console.log("vazio");
    } else {
      let usuario = {
        id: id,
        nome: nome,
        tel: tel,
        email: email,
        cep: cep,
        cpf: cpf,
      };
      form.reset();
      console.log(usuario);
      Dados(usuario);
    }
  }
  
  function Dados(usuario) {
    let url = "../../controller/POST_produto.php";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        if (response == "vish") {
          alert("id já está sendo utilizado!");
        } else {
          console.log(response);
        }
        location.reload();
      });
  }
  