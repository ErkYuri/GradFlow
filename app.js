// variaveis para autenticacao do usuario
const authView = document.getElementById('auth-view');
const appView = document.getElementById('app-view');

// define variaveis para os formularios de cadastro e login
const formLogin = document.getElementById('form-login'); // variavel pra form login
const formRegister = document.getElementById('form-register'); // variavel para form cadastro

// variaveis para botoes de cadastrar e cancelar cadastro
const btnShowRegister = document.querySelector('.btn-show-register');
const btnCancelRegister = document.querySelector('.btn-cancel-register');

// variavel para modal de configuracoes
const btnSettings = document.getElementById('btn-settings');
const modalSettings = document.getElementById('settings-modal');
const btnCloseSettings = document.getElementById('btn-close-settings');

// variavel para logout
const btnLogout = document.getElementById('btn-logout');

// variavel para exportar dados
const btnExportar = document.getElementById('btn-exportar');

// variaveis para importar dados
const btnImportar = document.getElementById('btn-importar');
const inputImportar = document.getElementById('input-importar');

// variaveis para alterar senha
const inputNewPass = document.getElementById('input-new-pass');

// variaveis para alterar usuario
const inputNewUser = document.getElementById('input-new-user');
const btnSaveChanges = document.getElementById('btn-save-changes');


// variavel para barra de pesquisa
const inputPesquisa = document.getElementById('input-pesquisa');




// ------------------------------------------ LOGICAS DO APLICATIVO ------------------------------------------------------

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
formLogin.addEventListener('submit', function(evento){

    evento.preventDefault(); // impede a pagina de recarregar ao dar submit

    const user = document.getElementById('login-user').value.trim();
    const pass = document.getElementById('login-pass').value;

    // valida usuario
    if(localStorage.getItem(user) == null){
        alert('Usuario não encontrado!');
        return;
    }

    const dadosSalvos = JSON.parse(localStorage.getItem(user));

    if(pass !== dadosSalvos.password){
        alert('Senha incorreta.');
        return;
    }

    localStorage.setItem('loggedUser', user);

    authView.style.display='none';
    appView.style.display='block';

    atualizarDisciplinas();

});



// --------------------------------------- AREA DO APP -----------------------------------------------------------------

// selecionando inputs de adicionar disciplina

const inputDisciplina = document.getElementById('input-disciplina');
const inputLimite = document.getElementById('input-limite');
const btnAddDisciplina = document.getElementById('btn-add-disciplina');

btnAddDisciplina.addEventListener('click', function(){

    // capturando os valores
    const nomeDisciplina = inputDisciplina.value.trim();
    const limiteFaltas = inputLimite.value;

    if(nomeDisciplina == '' || limiteFaltas == ''){
        alert('Verifique se todos campos foram preenchidos');
        return;
    }

    const usuarioLogado = localStorage.getItem('loggedUser');

    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));


    const novaDisciplina = {
        nome: nomeDisciplina,
        limite: parseInt(limiteFaltas),
        faltas: 0
    };

    // salva na variavel de nova disciplina
    dadosSalvos.disciplinas.push(novaDisciplina);

    // converte em texto no bd json
    localStorage.setItem(usuarioLogado, JSON.stringify(dadosSalvos));

    // limpa os campos
    inputDisciplina.value = '';
    inputLimite.value = '';

    alert('Disciplina adicionada');

    atualizarDisciplinas(); //renderiza as disciplinas cadastradas
})

const ListaDisciplinas = document.getElementById('lista-disciplinas');

function atualizarDisciplinas(termoPesquisa = ''){

    // verificar user logado
    const usuarioLogado = localStorage.getItem('loggedUser');
    if(!usuarioLogado) return;

    // pega os dados dele no banco
    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));

    // limpa tela antes de renderizar
    ListaDisciplinas.innerHTML = '';

    const disciplinasFiltradas = dadosSalvos.disciplinas.filter(function(disciplina){
        const nomeMateria = disciplina.nome.toLowerCase();
        const textoPesquisado = termoPesquisa.toLowerCase();
        return nomeMateria.includes(textoPesquisado);
    })

    if(disciplinasFiltradas.length === 0){
        // Se estiver vazia, INJETA o HTML da mensagem
        ListaDisciplinas.innerHTML = `
            <div style="text-align: center; margin-top: 40px; color: #777;">
                <p style="font-size: 40px; margin-bottom: 8px;">📚</p>
                <p>Nenhuma disciplina cadastrada.<br>Adicione sua primeira matéria acima!</p>
            </div>
        `;
    } else {
        
        disciplinasFiltradas.forEach(function(disciplina, index) {
            // 1. Regra de 3 e Cor
            const porcentagemFaltas = (disciplina.faltas / disciplina.limite) * 100;
            const corBarra = calcularGradiente(porcentagemFaltas);

            // 2. Lógica do Aviso
            let avisoHTML = '';
            if (porcentagemFaltas >= 100) {
                avisoHTML = `<p style="color: #cc0000; font-weight: bold; font-size: 13px; margin-top: 8px;">⛔ Limite de faltas atingido!</p>`;
            } else if (porcentagemFaltas >= 80) {
                avisoHTML = `<p style="color: #e6a700; font-weight: bold; font-size: 13px; margin-top: 8px;">⚠️ Atenção: 80% do limite atingido.</p>`;
            }

            // 3. Atualizando o HTML do Card
            const cardHTML = `
                <div class="card" style="background: #fff; padding: 16px; border-radius: 12px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                    <h3 style="margin-top: 0; color: var(--brand-color);">${disciplina.nome}</h3>
                    <p style="margin: 8px 0; color: #555;">Faltas: ${disciplina.faltas} / ${disciplina.limite}</p>
                    
                    <div style="width: 100%; background: #eee; border-radius: 10px; height: 10px; margin-bottom: 8px; overflow: hidden;">
                        <div style="height: 100%; background: ${corBarra}; width: ${porcentagemFaltas}%; transition: width 0.3s ease, background-color 0.3s ease;"></div>
                    </div>

                    ${avisoHTML}

                    <div style="display: flex; gap: 8px; margin-top: 12px;">
                        <button onclick="adicionarFalta(${index})" style="flex: 1; padding: 8px; border: none; border-radius: 6px; background: var(--brand-color); color: #fff; font-weight: bold; cursor: pointer;">+ Falta</button>
                        <button onclick="removerFalta(${index})" style="flex: 1; padding: 8px; border: none; border-radius: 6px; background: #ccc; font-weight: bold; color: #333; cursor: pointer;">- Falta</button>
                        <button onclick="abrirModalEditar(${index})" style="flex: 1; padding: 8px; border: none; border-radius: 6px; background: #e6a700; color: #222; font-weight: bold; cursor: pointer;">Editar</button>
                        <button onclick="excluirDisciplina(${index})" style="flex: 1; padding: 8px; border: none; border-radius: 6px; background: #480000; color: #fff; font-weight: bold; cursor: pointer;">Excluir</button>
                    </div>
                </div>
            `;

            ListaDisciplinas.innerHTML += cardHTML;
        });
    }

    
}


inputPesquisa.addEventListener('input', function(evento){
    const textoDigitado = evento.target.value;
    atualizarDisciplinas(textoDigitado);
});



// adicionar falta
function adicionarFalta(indexMateria){

    const usuarioLogado = localStorage.getItem('loggedUser');

    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));

    const materia = dadosSalvos.disciplinas[indexMateria];

    if(materia.faltas < materia.limite){
        materia.faltas += 1

        localStorage.setItem(usuarioLogado, JSON.stringify(dadosSalvos));

        atualizarDisciplinas();
    } else {
        alert('Limite de faltas atingido!')
    }
}


// remover falta
function removerFalta(indexMateria){
    const usuarioLogado = localStorage.getItem('loggedUser');

    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));

    const materia = dadosSalvos.disciplinas[indexMateria];

    if(materia.faltas > 0){
        materia.faltas -= 1;

        localStorage.setItem(usuarioLogado, JSON.stringify(dadosSalvos));

        atualizarDisciplinas();

    } // nao precisa de else pois usuario vai entender que faltas já é zero e n dá pra subtrair
}



// calcular porcentagem para barra de progresso de faltas
function calcularGradiente(perc) {
    let r, g, b;

    if(perc <= 50) {
        const ratio = perc / 50;
        r = Math.round(0 + (255 - 0) * ratio);
        g = 200;
        b = 0;
    } else {
        const ratio = (perc - 50) / 50;
        r = 255 - Math.round((255 - 200) * ratio);
        g = 200 - Math.round(200 * ratio);
        b = 0;
    }
    return `rgb(${r},${g},${b})`;
}


// Excluir materia
function excluirDisciplina(indexMateria){
    const confirmacao = confirm('Excluir disciplina?');

    if(!confirmacao) {
        return;
    }

    const usuarioLogado = localStorage.getItem('loggedUser');
    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));

    dadosSalvos.disciplinas.splice(indexMateria, 1);

    localStorage.setItem(usuarioLogado, JSON.stringify(dadosSalvos));

    atualizarDisciplinas();
}



// abrir modal de configuracoes
btnSettings.addEventListener('click', function(){

    modalSettings.style.display = 'flex';

    const user = localStorage.getItem('loggedUser');
   
});

btnCloseSettings.addEventListener('click', function(){

    modalSettings.style.display = 'none';
});

// LOGOUT
btnLogout.addEventListener('click', function(){

    localStorage.removeItem('loggedUser');

    appView.style.display = 'none';
    authView.style.display = 'flex';
    modalSettings.style.display = 'none';
});

// EXPORTAR DADOS (Backup)
btnExportar.addEventListener('click', function() {
    const usuarioLogado = localStorage.getItem('loggedUser');
    const dadosSalvos = localStorage.getItem(usuarioLogado); // Pega o JSON cru (texto)

    // 1. Cria um "arquivo virtual" (.json) na memória do navegador
    const blob = new Blob([dadosSalvos], { type: 'application/json' });
    
    // 2. Cria um link <a> invisível
    const linkInvisivel = document.createElement('a');
    
    // 3. Aponta o link para o nosso arquivo virtual
    linkInvisivel.href = URL.createObjectURL(blob);
    
    // 4. Define o nome do arquivo que será baixado
    linkInvisivel.download = `gradflow_backup_${usuarioLogado}.json`;
    
    // 5. O JS clica no link!
    linkInvisivel.click();
});


// Restaurar Backup
btnImportar.addEventListener('click', function() {
    inputImportar.click(); 
});

// usuário escolhe um arquivo do computador
inputImportar.addEventListener('change', function(evento) {
    const arquivo = evento.target.files[0]; // Pega o primeiro arquivo que o usuário selecionou

    if (!arquivo) {
        return;
    }

    // leitor de arquivos do JS
    const leitor = new FileReader();


    leitor.onload = function(e) {
        try {
            const conteudoDeTexto = e.target.result; 
            
            // Tenta transformar o texto de volta em objeto JavaScript
            const dadosImportados = JSON.parse(conteudoDeTexto);

            // Validação de Segurança
            if (dadosImportados.password === undefined || dadosImportados.disciplinas === undefined) {
                alert('Arquivo de backup inválido ou corrompido.');
                return;
            }

            // salva no banco de dados do usuário atual e atualiza a tela
            const usuarioLogado = localStorage.getItem('loggedUser');
            localStorage.setItem(usuarioLogado, JSON.stringify(dadosImportados));
            
            atualizarDisciplinas();
            alert('Backup restaurado com sucesso!');
            
            // Limpa o input para caso o usuário queira importar de novo depois
            inputImportar.value = ''; 
            
        } catch (erro) {
            // Se o JSON.parse falhar
            alert('Erro ao ler o arquivo. Certifique-se de que é um arquivo .json válido.');
        }
    };

    
    leitor.readAsText(arquivo);
});


// Salvar Alterações (Usuário e/ou Senha)
btnSaveChanges.addEventListener('click', function() {
    const newUser = inputNewUser.value.trim();
    const newPass = inputNewPass.value.trim();
    let currentUser = localStorage.getItem('loggedUser');
    
    // Se não digitou nada em nenhum campo
    if (newUser === '' && newPass === '') {
        alert('Preencha pelo menos um dos campos para salvar.');
        return;
    }

    let alterouAlgo = false;

    // Lógica de mudar USUÁRIO
    if (newUser !== '') {
        if (newUser === currentUser) {
            alert('O novo usuário deve ser diferente do atual!');
            return; 
        }
        if (localStorage.getItem(newUser) !== null) {
            alert('Este usuário já existe. Escolha outro nome!');
            return;
        }
        
        
        const dadosSalvos = localStorage.getItem(currentUser);
        localStorage.setItem(newUser, dadosSalvos); // Cria a nova
        localStorage.removeItem(currentUser); // Apaga a velha
        localStorage.setItem('loggedUser', newUser); // Atualiza a sessão
        
        currentUser = newUser;
        alterouAlgo = true;
    }

    // Lógica de mudar SENHA
    if (newPass !== '') {
        
        const dadosSalvos = JSON.parse(localStorage.getItem(currentUser));
        
        dadosSalvos.password = newPass; // Troca a senha
        
        // Empacota de volta
        localStorage.setItem(currentUser, JSON.stringify(dadosSalvos));
        alterouAlgo = true;
    }

    
    if (alterouAlgo) {
        inputNewUser.value = '';
        inputNewPass.value = '';
        alert('Alterações salvas com sucesso!');
        modalSettings.style.display = 'none'; 
    }
});


// ---------------------------------------------------------
// LÓGICA DE EDITAR DISCIPLINA
// ---------------------------------------------------------
let indiceEdicao = null;

// Variáveis do DOM (Certifique-se de que o ID do HTML bate com esses aqui)
const inputEditName = document.getElementById('input-edit-nome');
const inputEditLimite = document.getElementById('input-edit-limite');
const editModal = document.getElementById('edit-modal');
const btnSaveEdit = document.getElementById('btn-save-edit');
const btnCancelEdit = document.getElementById('btn-cancel-edit');

function abrirModalEditar(index) {
    indiceEdicao = index;

    // Pega os dados do banco
    const usuarioLogado = localStorage.getItem('loggedUser'); // Corrigido para usuarioLogado
    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));

    const materia = dadosSalvos.disciplinas[index];

    // Preenche os campos
    inputEditName.value = materia.nome;
    inputEditLimite.value = materia.limite;

    // Abre o modal
    editModal.style.display = 'flex';
}

btnSaveEdit.addEventListener('click', function(){
    const newNomeDisciplina = inputEditName.value.trim();
    const newLimiteDisciplina = inputEditLimite.value;
    
    if (newNomeDisciplina === '' || newLimiteDisciplina === '') {
        alert('Preencha todos os campos!');
        return;
    }

    const usuarioLogado = localStorage.getItem('loggedUser');
    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));
    
    // Atualiza a matéria específica
    dadosSalvos.disciplinas[indiceEdicao].nome = newNomeDisciplina;
    dadosSalvos.disciplinas[indiceEdicao].limite = parseInt(newLimiteDisciplina);

    // Salva no banco de volta
    localStorage.setItem(usuarioLogado, JSON.stringify(dadosSalvos));

    // Atualiza a tela
    atualizarDisciplinas();

    // Fecha o modal (usando a variável correta)
    editModal.style.display = 'none';
    indiceEdicao = null;
});

btnCancelEdit.addEventListener('click', function(){
    editModal.style.display = 'none';
    indiceEdicao = null;
});