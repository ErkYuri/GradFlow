// variaveis para autenticacao do usuario
const authView = document.getElementById('auth-view');
const appView = document.getElementById('app-view');

// define variaveis para os formularios de cadastro e login
const formLogin = document.getElementById('form-login'); // variavel pra form login
const formRegister = document.getElementById('form-register'); // variavel para form cadastro

// variaveis para botoes de cadastrar e cancelar cadastro
const btnShowRegister = document.querySelector('.btn-show-register');
const btnCancelRegister = document.querySelector('.btn-cancel-register');

// logica para exibir formlario cadastro ao clicar no botao
btnShowRegister.addEventListener('click', function(){

    formLogin.style.display = 'none'; // esconde formulario de login
    formRegister.style.display = 'flex'; // exibe formulario de cadastro
});


// logica para cancelar formulario cadastro e voltar pro login
btnCancelRegister.addEventListener('click', function(){

    formRegister.style.display = 'none'; // oculta formulario cadastro
    formLogin.style.display = 'flex'; // exibe form login
});


// logica para autenticacao do usuario
formLogin.addEventListener('submit', function(evento){

    evento.preventDefault(); // impede que a pagina recarrega

    authView.style.display = 'none';
    appView.style.display = 'block';
})



// --------------------------------------- CADASTRO DE NOVO USUARIO ---------------------------------------------------------------------------

// registrar cadastro
formRegister.addEventListener('submit', function(evento) {

    evento.preventDefault();

    // capturando os inputs do formulario
    const newUser = document.getElementById('register-user').value.trim(); // .trim() remove espacos vazios acidentais
    const newPass = document.getElementById('register-pass').value;
    const ConfirmPass = document.getElementById('confirm-register-pass').value;


    // validando senha
    if(newPass !== ConfirmPass){
        alert('As senhas não conferem. Favor verificar')
        return;
    }

    // validando usuario disponivel
    if(localStorage.getItem(newUser) !== null){
        alert('Usuário já existente. Tente outro.')
        return;
    }

    // salvando dados do usuario no localstorage
    const dadosUsuario = {
        password: newPass,
        disciplinas: []
    };

    // transforma dados do usuario em string para salvar no localstorage
    localStorage.setItem(newUser, JSON.stringify(dadosUsuario));

    // confirma criacao do usuario e volta pra tela de login
    alert('Usuário cadastrado!');

    formRegister.reset();

    formRegister.style.display = 'none';
    formLogin.style.display = 'flex';
});



// --------------------------------------- LOGIN DE USUARIO -----------------------------------------------------------------

// realizar login
formLogin.addEventListener('submit', function(){


});


