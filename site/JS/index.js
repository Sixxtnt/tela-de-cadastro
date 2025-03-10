function logar() {

    var usuario = document.getElementById('usuario').value;

    var senha = document.getElementById('senha').value;

    if (usuario == 'admin' && senha == 'admin') {

        console.log('Login efetuado com sucesso!');
        alert('Login efetuado com sucesso!');
location.href = "./HTML/home.html";
    } else {

        alert('Usuário ou senha inválidos!');
        console.log('Usuário ou senha inválidos!');


    }





}