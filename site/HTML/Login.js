function logar() {

    var usuario = document.getElementById('usuario').value;

    var email = document.getElementById('email').value;
   
    var senha = document.getElementById('senha').value;

    if (usuario == 'admin' && email == 'sixxtnt08@gmail.com' && senha == 'admin') {

        console.log('Login efetuado com sucesso!');
        alert('Login efetuado com sucesso!');
location.href = "../index.html";
    } else {

        alert('Usuário ou senha inválidos!');
        console.log('Usuário ou Email ou Senha estão inválidos!');


    }





}