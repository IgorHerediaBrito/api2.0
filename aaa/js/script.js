document.getElementById("btn").onclick = function cep(){
    fetch("https://api.thedogapi.com/v1/images/search").then(resposta=>{
    return resposta.json()

}).then(corpo=>{
    var html = corpo[0]["url"];
    document.getElementById("foto").src = html


})
}
