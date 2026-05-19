// ---------------------------------------------------------
// ------------------ VARIÁVEIS GERAIS --------------------
// ---------------------------------------------------------

// Telas principais
const authView = document.getElementById('auth-view');
const appView = document.getElementById('app-view');
const viewFaltas = document.getElementById('view-faltas');
const viewNotas = document.getElementById('view-notas');
const viewEventos = document.getElementById('view-eventos');

// Navegação Inferior
const navFaltas = document.getElementById('nav-faltas');
const navNotas = document.getElementById('nav-notas');
const navEventos = document.getElementById('nav-eventos');

// Autenticação
const formLogin = document.getElementById('form-login');
const formRegister = document.getElementById('form-register');
const btnShowRegister = document.querySelector('.btn-show-register');
const btnCancelRegister = document.querySelector('.btn-cancel-register');
const btnQuickLogout = document.getElementById('btn-quick-logout');

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
const listaDisciplinas = document.getElementById('lista-disciplinas');
const listaNotas = document.getElementById('lista-notas');

// Botão Flutuante e Modal de Criação
const fabMain = document.getElementById('fab-main');
const fabMenu = document.getElementById('fab-menu');
const btnFabDisciplina = document.getElementById('btn-fab-disciplina');
const btnFabEvento = document.getElementById('btn-fab-evento');

const createDisciplinaModal = document.getElementById('create-disciplina-modal');
const inputCreateNome = document.getElementById('input-create-nome');
const inputCreateProfessor = document.getElementById('input-create-professor');
const inputCreateSala = document.getElementById('input-create-sala');
const inputCreateLimite = document.getElementById('input-create-limite');
const btnSaveNewDisciplina = document.getElementById('btn-save-new-disciplina');
const btnCancelNewDisciplina = document.getElementById('btn-cancel-new-disciplina');

// Modal de Edição
let indiceEdicao = null;
const editModal = document.getElementById('edit-modal');
const inputEditName = document.getElementById('input-edit-nome');
const inputEditProfessor = document.getElementById('input-edit-professor');
const inputEditSala = document.getElementById('input-edit-sala');
const inputEditLimite = document.getElementById('input-edit-limite');
const btnSaveEdit = document.getElementById('btn-save-edit');
const btnCancelEdit = document.getElementById('btn-cancel-edit');

// Modal de Nova Nota
let indiceMateriaParaNota = null;
const modalNovaNota = document.getElementById('modal-nova-nota');
const inputNotaNome = document.getElementById('input-nota-nome');
const inputNotaValor = document.getElementById('input-nota-valor');
const btnSaveNota = document.getElementById('btn-save-nota');
const btnCancelNota = document.getElementById('btn-cancel-nota');

// Modal de Historico
let indiceNotaParaEdicao = null;
const modalHistorico = document.getElementById('modal-historico');
const listaHistorico = document.getElementById('lista-historico');
const btnCloseHistorico = document.getElementById('btn-close-historico');
const tituloModalNota = document.getElementById('titulo-modal-nota');

// --- ÍCONES VETORIAIS (SVG) PADRONIZADOS ---
const SVGLapis = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`;
const SVGLixeira = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8d0404" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`;
const SVGBook = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`;
const SVGCalendar = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
const SVGExport = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`
const SVGImport = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`
const SVGLogout = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`

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
    atualizarNotas();
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

// FORMULARIO CADASTRO USUARIO
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


// FORMULARIO LOGIN
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
    const professor = inputCreateProfessor.value.trim();
    const sala = inputCreateSala.value.trim();
    const limiteFaltas = inputCreateLimite.value;

    if(nomeDisciplina === '' || limiteFaltas === ''){
        alert('Verifique se todos campos foram preenchidos');
        return;
    }

    const usuarioLogado = localStorage.getItem('loggedUser');
    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));

    const novaDisciplina = {
        nome: nomeDisciplina,
        professor: professor,
        sala: sala,
        limite: parseInt(limiteFaltas),
        faltas: 0,
        atividades: [] 
    };

    dadosSalvos.disciplinas.push(novaDisciplina);
    localStorage.setItem(usuarioLogado, JSON.stringify(dadosSalvos));

    inputCreateNome.value = '';
    inputCreateProfessor.value = '';
    inputCreateSala.value = '';
    inputCreateLimite.value = '';

    createDisciplinaModal.style.display = 'none';
    atualizarDisciplinas(); 
    atualizarNotas();
});


// ---------------------------------------------------------
// RENDERIZAÇÃO E FILTRO 
// ---------------------------------------------------------

function atualizarDisciplinas(termoPesquisa = ''){
    const usuarioLogado = localStorage.getItem('loggedUser');
    if(!usuarioLogado) return;

    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));
    listaDisciplinas.innerHTML = '';

    const disciplinasFiltradas = dadosSalvos.disciplinas.filter(function(disciplina){
        const nomeMateria = disciplina.nome.toLowerCase();
        const textoPesquisado = termoPesquisa.toLowerCase();
        return nomeMateria.includes(textoPesquisado);
    });

    if(disciplinasFiltradas.length === 0){
        listaDisciplinas.innerHTML = `
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
                <div class="card" style="background: #fff; padding: 16px; border-radius: 12px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); position: relative;">
                    
                    <div style="position: absolute; top: 16px; right: 16px; display: flex; gap: 12px;">
                        <button onclick="abrirModalEditar(${index})" style="background: transparent; border: none; cursor: pointer; padding: 4px;" title="Editar Disciplina">${SVGLapis}</button>
                        <button onclick="excluirDisciplina(${index})" style="background: transparent; border: none; cursor: pointer; padding: 4px;" title="Excluir Disciplina">${SVGLixeira}</button>
                    </div>

                    <h3 style="margin-top: 0; color: var(--brand-color); padding-right: 60px; text-transform: uppercase; font-size: 18px;">${disciplina.nome}</h3>
                    <p style="margin: 8px 0 12px 0; color: #555;">Faltas: ${disciplina.faltas} / ${disciplina.limite}</p>
                    
                    <div style="width: 100%; background: #eee; border-radius: 10px; height: 10px; margin-bottom: 8px; overflow: hidden;">
                        <div style="height: 100%; background: ${corBarra}; width: ${porcentagemFaltas}%; transition: width 0.3s ease, background-color 0.3s ease;"></div>
                    </div>

                    ${avisoHTML}

                    <div style="display: flex; gap: 8px; margin-top: 16px;">
                        <button onclick="adicionarFalta(${index})" style="flex: 1; padding: 10px; border: none; border-radius: 6px; background: var(--brand-color); color: #fff; font-weight: bold; cursor: pointer;">+ Falta</button>
                        <button onclick="removerFalta(${index})" style="flex: 1; padding: 10px; border: none; border-radius: 6px; background: #ccc; font-weight: bold; color: #333; cursor: pointer;">- Falta</button>
                    </div>
                </div>
            `;
            listaDisciplinas.innerHTML += cardHTML;
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

function calcularGradienteNota(nota) {
    let r, g, b;

    if (nota <= 50) {
        const ratio = nota / 50;
        r = 255;
        g = Math.round(255 * ratio); // Vai subindo o verde (vira amarelo)
        b = 0;
    } else {
        const ratio = (nota - 50) / 50;
        r = Math.round(255 - (255 * ratio)); // Vai tirando o vermelho (vira verde)
        g = 200; 
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
    inputEditProfessor.value = materia.professor;
    inputEditSala.value = materia.sala;
    inputEditLimite.value = materia.limite;
    editModal.style.display = 'flex';
}

// FUNCAO EDITAR NOTA
function abrirModalEditarNota(indexMateria, indexNota){
    indiceMateriaParaNota = indexMateria;
    indiceNotaParaEdicao = indexNota;

    const usuarioLogado = localStorage.getItem('loggedUser');
    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));
    const materia = dadosSalvos.disciplinas[indexMateria];
    const notaAntiga = materia.atividades[indexNota];

    inputNotaNome.value = notaAntiga.nome;
    inputNotaValor.value = notaAntiga.nota;

    modalHistorico.style.display = 'none';
    tituloModalNota.innerText = 'Editar Nota';
    modalNovaNota.style.display = 'flex';
    
}


btnSaveEdit.addEventListener('click', function(){
    const newNomeDisciplina = inputEditName.value.trim();
    const newProfessor = inputEditProfessor.value.trim();
    const newSala = inputEditSala.value.trim();
    const newLimiteDisciplina = inputEditLimite.value;
    
    if (newNomeDisciplina === '' || newLimiteDisciplina === '') {
        alert('Preencha todos os campos!');
        return;
    }

    const usuarioLogado = localStorage.getItem('loggedUser');
    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));
    
    dadosSalvos.disciplinas[indiceEdicao].nome = newNomeDisciplina;
    dadosSalvos.disciplinas[indiceEdicao].professor = newProfessor;
    dadosSalvos.disciplinas[indiceEdicao].sala = newSala;
    dadosSalvos.disciplinas[indiceEdicao].limite = parseInt(newLimiteDisciplina);

    localStorage.setItem(usuarioLogado, JSON.stringify(dadosSalvos));
    atualizarDisciplinas();

    editModal.style.display = 'none';
    indiceEdicao = null;

    atualizarDisciplinas();
    atualizarNotas();
});

btnCancelEdit.addEventListener('click', function(){
    editModal.style.display = 'none';
    indiceEdicao = null;
});


// --- ESQUELETOS DOS MODAIS DE NOTAS ---
function abrirModalNovaNota(index) {
    indiceMateriaParaNota = index;

    inputNotaNome.value = '';
    inputNotaValor.value = '';
    tituloModalNota.innerText = 'Lançar Nota';
    modalNovaNota.style.display='flex';
    
}

btnSaveNota.addEventListener('click', function(){

    const novaNotaNome = inputNotaNome.value.trim();
    const novaNotaValor = inputNotaValor.value;

    if (novaNotaNome === '' || novaNotaValor === ''){
        alert('Favor preencher os campos');
        return;
    }

    const usuarioLogado = localStorage.getItem('loggedUser');
    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));

    const novaNota = {
        nome: novaNotaNome,
        nota: parseFloat(novaNotaValor)
    }

    if (indiceNotaParaEdicao === null) {
    
        dadosSalvos.disciplinas[indiceMateriaParaNota].atividades.push(novaNota);
    } else {
        dadosSalvos.disciplinas[indiceMateriaParaNota].atividades[indiceNotaParaEdicao] = novaNota;
    }

    localStorage.setItem(usuarioLogado, JSON.stringify(dadosSalvos));

    modalNovaNota.style.display='none';
    indiceMateriaParaNota = null;
    indiceNotaParaEdicao = null;

    atualizarNotas();
});

btnCancelNota.addEventListener('click', function(){

    modalNovaNota.style.display='none';
    indiceMateriaParaNota = null;
    indiceNotaParaEdicao = null;
});


// RENDERIZAR HISTORICO DE NOTAS
function abrirModalHistorico(index) {
    const usuarioLogado = localStorage.getItem('loggedUser');
    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));
    const materia = dadosSalvos.disciplinas[index];

    listaHistorico.innerHTML = '';

    if(materia.atividades.length === 0){
        listaHistorico.innerHTML = `
            <div style="text-align: center; margin-top: 8px; margin-bottom: 20px; color: #616161;">
                <p style="font-size: 40px; margin-bottom: 8px;">📚</p>
                <p>Nenhuma nota lançada ainda.</p>
            </div>
        `;
    } else {
        materia.atividades.forEach(function(ativ, indiceNota){
            const notasHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; border-bottom: 1px solid #eee;">
                    
                    <div>
                        <strong style="color: var(--brand-color); text-transform: capitalize;">${ativ.nome}</strong>
                        <span style="color: #555; margin-left: 8px;">${ativ.nota} pts</span>
                    </div>

                    <div style="display: flex; gap: 14px; align-items: center;">
                        <button onclick="abrirModalEditarNota(${index}, ${indiceNota})" style="background: transparent; border: none; cursor: pointer; padding: 2px;" title="Editar Nota">${SVGLapis}</button>
                        <button onclick="excluirNota(${index}, ${indiceNota})" style="background: transparent; border: none; cursor: pointer; padding: 2px;" title="Excluir Nota">${SVGLixeira}</button>
                    </div>

                </div>
            `;
            listaHistorico.innerHTML += notasHTML;
        });
    }

    document.getElementById('modal-historico').style.display = 'flex';
}


// EXCLUIR NOTA DO HISTORICO
// EXCLUIR NOTA DO HISTORICO
function excluirNota(indexMateria, indexNota) {
    const confirmacao = confirm('Excluir nota?');

    if(!confirmacao) {
        return;
    }

    const usuarioLogado = localStorage.getItem('loggedUser');
    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));


    dadosSalvos.disciplinas[indexMateria].atividades.splice(indexNota, 1);

    localStorage.setItem(usuarioLogado, JSON.stringify(dadosSalvos));

    atualizarNotas();
    abrirModalHistorico(indexMateria); 
}

// FECHAR MODAL DE HISTORICO
btnCloseHistorico.addEventListener('click', function(){

    modalHistorico.style.display = 'none';
});


// RENDERIZAR TELA DE NOTAS
function atualizarNotas(termoPesquisa = ''){
    const usuarioLogado = localStorage.getItem('loggedUser');
    if(!usuarioLogado) return;

    const dadosSalvos = JSON.parse(localStorage.getItem(usuarioLogado));
    listaNotas.innerHTML = '';

    const disciplinasFiltradas = dadosSalvos.disciplinas.filter(function(disciplina){
        const nomeMateria = disciplina.nome.toLowerCase();
        const textoPesquisado = termoPesquisa.toLowerCase();
        return nomeMateria.includes(textoPesquisado);
    });

    if(disciplinasFiltradas.length === 0){
        listaNotas.innerHTML = `
            <div style="text-align: center; margin-top: 40px; color: #777;">
                <p style="font-size: 40px; margin-bottom: 8px;">📚</p>
                <p>Nenhuma disciplina encontrada.<br>Adicione no botão + abaixo!</p>
            </div>
        `;
    } else {
        disciplinasFiltradas.forEach(function(disciplina, index) {
            let notaTotal = 0;

            if (disciplina.atividades && disciplina.atividades.length > 0) {
                disciplina.atividades.forEach(function(ativ) {
                    notaTotal += parseFloat(ativ.nota);
                });
            }

            let statusHTML = '';
            if(notaTotal >= 60) {
                statusHTML = `<span style="background: #e6f4ea; color: #1e8e3e; padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-left: 8px; font-weight: bold;">Aprovado</span>`;
            } else  {
                statusHTML = `<span style="background: #fff5d2; color: #9e7f01; padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-left: 8px; font-weight: bold;">Pendente</span>`;
            }

            let porcentagemNota = notaTotal > 100 ? 100 : notaTotal;
            const corBarraNota = calcularGradienteNota(porcentagemNota);

            let subtituloHTML = '';
            if (disciplina.professor || disciplina.sala) {
                let prof = disciplina.professor ? `Prof. ${disciplina.professor}` : '';
                let sala = disciplina.sala ? `Sala ${disciplina.sala}` : '';
                let separador = (prof && sala) ? ' - ' : '';
                subtituloHTML = `<p style="margin: 4px 0 12px 0; color: #777; font-size: 14px; text-transform: capitalize;">${prof}${separador}${sala}</p>`;
            }

            const cardHTML = `
                <div class="card" style="background: #fff; padding: 16px; border-radius: 12px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); position: relative;">
                    
                    <div style="position: absolute; top: 16px; right: 16px; display: flex; gap: 12px;">
                        <button onclick="abrirModalEditar(${index})" style="background: transparent; border: none; cursor: pointer; padding: 4px;" title="Editar Disciplina">${SVGLapis}</button>
                        <button onclick="excluirDisciplina(${index})" style="background: transparent; border: none; cursor: pointer; padding: 4px;" title="Excluir Disciplina">${SVGLixeira}</button>
                    </div>

                    <h3 style="margin-top: 0; color: var(--brand-color); padding-right: 60px; text-transform: uppercase; font-size: 18px;">${disciplina.nome}</h3>
                    
                    ${subtituloHTML}

                    <p style="margin: 8px 0; color: #555; font-weight: bold; font-size: 18px;">Nota Total: ${notaTotal} <span style="font-size: 14px; font-weight: normal; color: #888;">/ 100</span> ${statusHTML}</p>

                    <div style="width: 100%; background: #eee; border-radius: 10px; height: 12px; margin-bottom: 16px; overflow: hidden;">
                        <div style="height: 100%; background: ${corBarraNota}; width: ${porcentagemNota}%; transition: width 0.5s ease, background-color 0.5s ease;"></div>
                    </div>

                    <div style="display: flex; gap: 8px;">
                        <button onclick="abrirModalNovaNota(${index})" style="flex: 1; padding: 10px; border: none; border-radius: 6px; background: var(--brand-color); color: #fff; font-weight: bold; cursor: pointer;">+ Nota</button>
                        <button onclick="abrirModalHistorico(${index})" style="flex: 1; padding: 10px; border: none; border-radius: 6px; background: #eee; font-weight: bold; color: #333; cursor: pointer;">Histórico</button>
                    </div>
                </div>
            `;
            listaNotas.innerHTML += cardHTML;
        });
    }
}



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
    const confirmacao = confirm('Deseja mesmo sair da sua conta?');
    if (confirmacao) {
        localStorage.removeItem('loggedUser');
        appView.style.display = 'none';
        authView.style.display = 'flex';
        modalSettings.style.display = 'none';
    }
});

btnQuickLogout.addEventListener('click', function() {
    const confirmacao = confirm('Deseja mesmo sair da sua conta?');
    if (confirmacao) {
        localStorage.removeItem('loggedUser');
        appView.style.display = 'none';
        authView.style.display = 'flex';
    }
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


