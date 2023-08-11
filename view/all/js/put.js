
export default function editar(event){
    let tr = event.target.parentNode.parentNode

    let id = tr.children[0].textContent
    let nome = tr.children[1].textContent
    let tel = tr.children[2].textContent
    let email = tr.children[3].textContent
    let cep = tr.children[4].textContent
    let cpf = tr.children[5].textContent

    //console.log(tr.children[0].value)
    window.location.href = `../../view/all/put.html?id=${id}&nome=${nome}&tel=${tel}&email=${email}&cep=${cep}&cpf=${cpf}`
    //console.log(`${id}  -  ${nome}   -   ${preco} `)
}