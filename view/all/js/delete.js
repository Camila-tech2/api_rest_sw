
export default function _delete(event) {
    let tr = event.target.parentNode.parentNode

    let idUser = tr.children[0].textContent

    let produto = {
        id: idUser
    }

    let url = "../../controller/DELETE_produto.php"

    fetch(url,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(produto)
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (response) {
        //console.log(response)
        location.reload()
    })
    
}