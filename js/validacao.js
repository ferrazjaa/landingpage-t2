function validacao(event) {
    event.preventDefault();

    var nome = document.getElementById('nome-reserve').value;
    var email = document.getElementById('e-mail').value;
    var message = document.getElementById('mensagem').value;
    if (!nome || !email || !message) {
        alert("Por favor, preencha os campos corretamente");
        return;
    }

    document.getElementById('resposta').innerText = `${nome}, obrigada por entrar em contato! Retornaremos em breve.`;

    return false;


}