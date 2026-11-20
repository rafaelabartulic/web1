
const formulario = document.getElementById("formAcademia");

formulario.addEventListener("submit", function(event) {

    // Impede a página de recarregar
    event.preventDefault();

   
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let nascimento = document.getElementById("nascimento").value;
    let sexo = document.getElementById("sexo").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let endereco = document.getElementById("endereco").value;
    let objetivo = document.getElementById("objetivo").value;
    let plano = document.getElementById("plano").value;
    let inicio = document.getElementById("inicio").value;

    // Mostra o que foi cadastrado 
    alert(
        "Aluno cadastrado com sucesso!\n\n" +
       "Nome: " + nome + "\n" +
        "CPF: " + cpf + "\n" +
        "Nascimento: " + nascimento + "\n" +
        "Sexo: " + sexo + "\n" +
        "E-mail: " + email + "\n" +
        "Telefone: " + telefone + "\n" +
        "Endereço: " + endereco + "\n" +
        "Objetivo: " + objetivo + "\n" +
        "Plano: " + plano + "\n" +
        "Início: " + inicio
    );

    // Reseta o formulário depois de feito 
    formulario.reset();

});
