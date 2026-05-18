// ---------------------------------------------------------
// VARIÁVEIS GERAIS
// ---------------------------------------------------------

// Telas principais
const authView = document.getElementById('auth-view');
const appView = document.getElementById('app-view');
const viewFaltas = document.getElementById('view-faltas');
const viewNotas = document.getElementById('view-notas');
const viewEventos = document.getElementById('view-eventos'); // NOVA TELA

// Navegação Inferior
const navFaltas = document.getElementById('nav-faltas');
const navNotas = document.getElementById('nav-notas');
const navEventos = document.getElementById('nav-eventos'); // NOVO BOTÃO

// Autenticação
const formLogin = document.getElementById('form-login');
const formRegister = document.getElementById('form-register');
const btnShowRegister = document.querySelector('.btn-show-register');
const btnCancelRegister = document.querySelector('.btn-cancel-register');

// Configurações e Backup
const btnSettings = document.getElementById('btn-settings');
const modalSettings = document.getElementById('settings-modal');
const btnCloseSettings = document.getElementById('btn-close-settings');
const btnLogout = document.getElementById('btn-logout');
const btnExportar = document.getElementById('btn-exportar');
const btnImportar = document.getElementById('btn-importar');
const inputImportar = document.getElementById('input-importar');
const inputNewPass = document.getElementById('input-new-pass');
const inputNewUser = document.getElementById('input-new-user');
const btnSaveChanges = document.getElementById('btn-save-changes');

// Pesquisa e Listagem
const inputPesquisa = document.getElementById('input-pesquisa');
const ListaDisciplinas = document.getElementById('lista-disciplinas');

// Botão Flutuante e Modal de Criação
const fabMain = document.getElementById('fab-main');
const fabMenu = document.getElementById('fab-menu');
const btnFabDisciplina = document.getElementById('btn-fab-disciplina');
const btnFabEvento = document.getElementById('btn-fab-evento');

const createDisciplinaModal = document.getElementById('create-disciplina-modal');
const inputCreateNome = document.getElementById('input-create-nome');
const inputCreateLimite = document.getElementById('input-create-limite');
const btnSaveNewDisciplina = document.getElementById('btn-save-new-disciplina');
const btnCancelNewDisciplina = document.getElementById('btn-cancel-new-disciplina');

// Modal de Edição
let indiceEdicao = null;
const editModal = document.getElementById('edit-modal');
const inputEditName = document.getElementById('input-edit-nome');
const inputEditLimite = document.getElementById('input-edit-limite');
const btnSaveEdit = document.getElementById('btn-save-edit');
const btnCancelEdit = document.getElementById('btn-cancel-edit');


// ---------------------------------------------------------
// NAVEGAÇÃO DE TELAS
// ---------------------------------------------------------

function esconderTodasAsTelas() {
    viewFaltas.style.display = 'none';
    viewNotas.style.display = 'none';
    viewEventos.style.display = 'none';
    navFaltas.className = 'nav-btn';
    navNotas.className = 'nav-btn';
    navEventos.className = 'nav-btn';
}

navFaltas.addEventListener('click', function(){
    esconderTodasAsTelas();
    viewFaltas.style.display = 'block';
    navFaltas.className = 'nav-btn-active';
});

navNotas.addEventListener('click', function(){
    esconderTodasAsTelas();
    viewNotas.style.display = 'block';
    navNotas.className = 'nav-btn-active';
});

navEventos.addEventListener('click', function(){
    esconderTodasAsTelas();
    viewEventos.style.display = 'block';
    navEventos.className = 'nav-btn-active';
});


// ---------------------------------------------------------
// AUTENTICAÇÃO 
// ---------------------------------------------------------

btnShowRegister.addEventListener('click', function(){
    formLogin.style.display = 'none';
    formRegister.style.display = 'flex';
});

btnCancelRegister.addEventListener('click', function(){
    formRegister.style.display = 'none';
    formLogin.style.display = 'flex';
});

formRegister.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const newUser = document.getElementById('register-user').value.trim();
    const newPass = document.getElementById('register-pass').value;
    const ConfirmPass = document.getElementById('confirm-register-pass').value;

    if(newPass !== ConfirmPass){
        alert('As senhas não conferem. Favor verificar');
        return;
    }
    if(localStorage.getItem(newUser) !== null){
        alert('Usuário já existente. Tente outro.');
        return;
    }

    const dadosUsuario = {
        password: newPass,
        disciplinas: []
    };

    localStorage.setItem(newUser, JSON.stringify(dadosUsuario));
    alert('Usuário cadastrado!');
    formRegister.reset();
    formRegister.style.display = 'none';
    formLogin.style.display = 'flex';
});

formLogin.addEventListener('submit', function(evento){
    evento.preventDefault(); 

    const user = document.getElementById('login-user').value.trim();
    const pass = document.getElementById('login-pass').value;

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
    authView.style.display = 'none';
    appView.style.display = 'block';
    atualizarDisciplinas();
});


// ---------------------------------------------------------
// BOTÃO FAB E CRIAÇÃO DE DISCIPLINA
// ---------------------------------------------------------

const fabOverlay = document.getElementById('fab-overlay'); // Seleciona o fundo escuro

// Função auxiliar para fechar tudo do FAB de uma vez
function fecharFabMenu() {
    fabMenu.style.display = 'none';
    fabMain.classList.remove('active');
    fabOverlay.style.display = 'none'; // Esconde o fundo escuro
}

// Abre/Fecha o Menu do botão +
fabMain.addEventListener('click', function() {
    if (fabMenu.style.display === 'none' || fabMenu.style.display === '') {
        // Abre o menu
        fabMenu.style.display = 'flex';
        fabMain.classList.add('active'); 
        fabOverlay.style.display = 'block'; // Mostra o fundo escuro
    } else {
        // Fecha o menu
        fecharFabMenu();
    }
});

// Clica no fundo escuro fora do botão também fecha o menu
fabOverlay.addEventListener('click', fecharFabMenu);

// Clica em "Nova Disciplina"
btnFabDisciplina.addEventListener('click', function() {
    fecharFabMenu(); // Usa a função auxiliar para recolher o botão e o fundo
    createDisciplinaModal.style.display = 'flex';
});

// Clica em "Novo Evento"
btnFabEvento.addEventListener('click', function() {
    fecharFabMenu();
    alert('A criação de eventos será implementada em breve! 🚧');
});

// Cancela a criação da disciplina
btnCancelNewDisciplina.addEventListener('click', function() {
    createDisciplinaModal.style.display = 'none';
});

// Salva a nova disciplina
btnSaveNewDisciplina.addEventListener('click', function(){
    const nomeDisciplina = inputCreateNome.value.trim();
    const limiteFaltas = inputCreateLimite.value;

    if(nomeDisciplina === '' || limiteFaltas === ''){
        alert('Verifique se todos campos foram preenchidos');
        return;
    }

    const usuarioLogado = localStorage.getItem('loggedUser');
    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));

    const novaDisciplina = {
        nome: nomeDisciplina,
        limite: parseInt(limiteFaltas),
        faltas: 0,
        atividades: [] 
    };

    dadosSalvos.disciplinas.push(novaDisciplina);
    localStorage.setItem(usuarioLogado, JSON.stringify(dadosSalvos));

    inputCreateNome.value = '';
    inputCreateLimite.value = '';

    createDisciplinaModal.style.display = 'none';
    atualizarDisciplinas(); 
});


// ---------------------------------------------------------
// RENDERIZAÇÃO E FILTRO (TELA DE FALTAS)
// ---------------------------------------------------------

function atualizarDisciplinas(termoPesquisa = ''){
    const usuarioLogado = localStorage.getItem('loggedUser');
    if(!usuarioLogado) return;

    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));
    ListaDisciplinas.innerHTML = '';

    const disciplinasFiltradas = dadosSalvos.disciplinas.filter(function(disciplina){
        const nomeMateria = disciplina.nome.toLowerCase();
        const textoPesquisado = termoPesquisa.toLowerCase();
        return nomeMateria.includes(textoPesquisado);
    });

    if(disciplinasFiltradas.length === 0){
        ListaDisciplinas.innerHTML = `
            <div style="text-align: center; margin-top: 40px; color: #777;">
                <p style="font-size: 40px; margin-bottom: 8px;">📚</p>
                <p>Nenhuma disciplina encontrada.<br>Adicione no botão + abaixo!</p>
            </div>
        `;
    } else {
        disciplinasFiltradas.forEach(function(disciplina, index) {
            const porcentagemFaltas = (disciplina.faltas / disciplina.limite) * 100;
            const corBarra = calcularGradiente(porcentagemFaltas);

            let avisoHTML = '';
            if (porcentagemFaltas >= 100) {
                avisoHTML = `<p style="color: #cc0000; font-weight: bold; font-size: 13px; margin-top: 8px;">⛔ Limite de faltas atingido!</p>`;
            } else if (porcentagemFaltas >= 80) {
                avisoHTML = `<p style="color: #e6a700; font-weight: bold; font-size: 13px; margin-top: 8px;">⚠️ Atenção: 80% do limite atingido.</p>`;
            }

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

function adicionarFalta(indexMateria){
    const usuarioLogado = localStorage.getItem('loggedUser');
    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));
    const materia = dadosSalvos.disciplinas[indexMateria];

    if(materia.faltas < materia.limite){
        materia.faltas += 1;
        localStorage.setItem(usuarioLogado, JSON.stringify(dadosSalvos));
        atualizarDisciplinas();
    } else {
        alert('Limite de faltas atingido!');
    }
}

function removerFalta(indexMateria){
    const usuarioLogado = localStorage.getItem('loggedUser');
    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));
    const materia = dadosSalvos.disciplinas[indexMateria];

    if(materia.faltas > 0){
        materia.faltas -= 1;
        localStorage.setItem(usuarioLogado, JSON.stringify(dadosSalvos));
        atualizarDisciplinas();
    }
}

function excluirDisciplina(indexMateria){
    const confirmacao = confirm('Excluir disciplina?');
    if(!confirmacao) return;

    const usuarioLogado = localStorage.getItem('loggedUser');
    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));

    dadosSalvos.disciplinas.splice(indexMateria, 1);
    localStorage.setItem(usuarioLogado, JSON.stringify(dadosSalvos));
    atualizarDisciplinas();
}

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


// ---------------------------------------------------------
// LÓGICA DE EDITAR DISCIPLINA
// ---------------------------------------------------------

function abrirModalEditar(index) {
    indiceEdicao = index;
    const usuarioLogado = localStorage.getItem('loggedUser');
    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));
    const materia = dadosSalvos.disciplinas[index];

    inputEditName.value = materia.nome;
    inputEditLimite.value = materia.limite;
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
    
    dadosSalvos.disciplinas[indiceEdicao].nome = newNomeDisciplina;
    dadosSalvos.disciplinas[indiceEdicao].limite = parseInt(newLimiteDisciplina);

    localStorage.setItem(usuarioLogado, JSON.stringify(dadosSalvos));
    atualizarDisciplinas();

    editModal.style.display = 'none';
    indiceEdicao = null;
});

btnCancelEdit.addEventListener('click', function(){
    editModal.style.display = 'none';
    indiceEdicao = null;
});


// ---------------------------------------------------------
// CONFIGURAÇÕES, BACKUP E LOGOUT
// ---------------------------------------------------------

btnSettings.addEventListener('click', function(){
    modalSettings.style.display = 'flex';
});

btnCloseSettings.addEventListener('click', function(){
    modalSettings.style.display = 'none';
});

btnLogout.addEventListener('click', function(){
    localStorage.removeItem('loggedUser');
    appView.style.display = 'none';
    authView.style.display = 'flex';
    modalSettings.style.display = 'none';
});

btnExportar.addEventListener('click', function() {
    const usuarioLogado = localStorage.getItem('loggedUser');
    const dadosSalvos = localStorage.getItem(usuarioLogado); 
    const blob = new Blob([dadosSalvos], { type: 'application/json' });
    const linkInvisivel = document.createElement('a');
    linkInvisivel.href = URL.createObjectURL(blob);
    linkInvisivel.download = `gradflow_backup_${usuarioLogado}.json`;
    linkInvisivel.click();
});

btnImportar.addEventListener('click', function() {
    inputImportar.click(); 
});

inputImportar.addEventListener('change', function(evento) {
    const arquivo = evento.target.files[0]; 
    if (!arquivo) return;

    const leitor = new FileReader();
    leitor.onload = function(e) {
        try {
            const conteudoDeTexto = e.target.result; 
            const dadosImportados = JSON.parse(conteudoDeTexto);

            if (dadosImportados.password === undefined || dadosImportados.disciplinas === undefined) {
                alert('Arquivo de backup inválido ou corrompido.');
                return;
            }

            
            dadosImportados.disciplinas.forEach(disc => {
                if (!disc.atividades) {
                    disc.atividades = [];
                }
            });

            const usuarioLogado = localStorage.getItem('loggedUser');
            localStorage.setItem(usuarioLogado, JSON.stringify(dadosImportados));
            
            atualizarDisciplinas();
            alert('Backup restaurado com sucesso!');
            inputImportar.value = ''; 
        } catch (erro) {
            alert('Erro ao ler o arquivo. Certifique-se de que é um arquivo .json válido.');
        }
    };
    leitor.readAsText(arquivo);
});

btnSaveChanges.addEventListener('click', function() {
    const newUser = inputNewUser.value.trim();
    const newPass = inputNewPass.value.trim();
    let currentUser = localStorage.getItem('loggedUser');
    
    if (newUser === '' && newPass === '') {
        alert('Preencha pelo menos um dos campos para salvar.');
        return;
    }

    let alterouAlgo = false;

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
        localStorage.setItem(newUser, dadosSalvos); 
        localStorage.removeItem(currentUser); 
        localStorage.setItem('loggedUser', newUser); 
        
        currentUser = newUser;
        alterouAlgo = true;
    }

    if (newPass !== '') {
        const dadosSalvos = JSON.parse(localStorage.getItem(currentUser));
        dadosSalvos.password = newPass; 
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