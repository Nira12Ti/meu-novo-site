document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);

function validaFormulario() {
    if( document.getElementById("nome").value != "" && 
        document.getElementById("email").value != "" && 
        document.getElementById("telefone").value != "") {//se (o campo de nome e campo de email estiverem preenchidos) {
    
    alert("Prontinho! Você receberá as novidades por email.");
} else{
    alert("Por favor, preencha os campos nome e email antes de enviar.");
} //função enviarFormulario
     //exibe no console a mensagem "Formulário enviado!"
}



    