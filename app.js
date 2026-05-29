

// ---------------------------------------------------------
// ------------------ VARIÁVEIS GERAIS --------------------
// ---------------------------------------------------------

// Telas principais
const viewDashboards = document.getElementById('view-dashboard');
const authView = document.getElementById('auth-view');
const appView = document.getElementById('app-view');
const viewFaltas = document.getElementById('view-faltas');
const viewNotas = document.getElementById('view-notas');
const viewEventos = document.getElementById('view-eventos');

// Navegação Inferior
const navDashboard = document.getElementById('nav-dashboard');
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

// Modal de Adicionar Evento
const modalCriarEvento = document.getElementById('modal-criar-evento');
const btnSaveEvento = document.getElementById('btn-save-evento');
const btnCancelEvento = document.getElementById('btn-cancel-evento');

// Tela de Eventos
let idEventoEdicao = null; 
let filtroEventoAtual = 'pendentes'; 
const listaEventos = document.getElementById('lista-eventos');

// --- ÍCONES VETORIAIS (SVG) PADRONIZADOS ---
const SVGLapis = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`;
const SVGLixeira = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8d0404" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`;
const SVGBook = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`;
const SVGCalendar = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
const SVGExport = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`
const SVGImport = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`
const SVGLogout = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`
const SVGCheck = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1e8e3e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
const SVGUndo = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>`;

const btnForgotPass = document.getElementById('btn-forgot-pass');
const recoveryModal = document.getElementById('recovery-modal');
const btnRecoverCancel = document.getElementById('btn-recover-cancel');
const btnRecoverFind = document.getElementById('btn-recover-find');
const btnRecoverSave = document.getElementById('btn-recover-save');

const step1 = document.getElementById('recovery-step-1');
const step2 = document.getElementById('recovery-step-2');
const inputRecoverUser = document.getElementById('input-recover-user');
const recoverQuestionText = document.getElementById('recover-question-text');
const inputRecoverAnswer = document.getElementById('input-recover-answer');
const inputRecoverNewPass = document.getElementById('input-recover-new-pass');

// Dicionário de perguntas para exibir bonito na tela
const perguntasDic = {
    'pet': 'Qual o nome do seu primeiro animal de estimação?',
    'cidade': 'Em qual cidade você nasceu?',
    'comida': 'Qual é a sua comida favorita?'
};


// =========================================================
// DATABASE HELPERS
// =========================================================

function getUsuarioLogado() {
    return localStorage.getItem('mygrad_usuarioLogado');
}

function setUsuarioLogado(username) {
    localStorage.setItem('mygrad_usuarioLogado', username);
}

function removerSessao() {
    localStorage.removeItem('mygrad_usuarioLogado');
}

function getDadosUsuario(username) {
    const dados = localStorage.getItem('mygrad_user_' + username);
    return dados ? JSON.parse(dados) : null;
}

function setDadosUsuario(username, data) {
    localStorage.setItem('mygrad_user_' + username, JSON.stringify(data));
}

function existeUsuario(username) {
    return localStorage.getItem('mygrad_user_' + username) !== null;
}

function removerDadosUsuario(username) {
    localStorage.removeItem('mygrad_user_' + username);
}




// =========================================================
// SISTEMA DE ALERTAS E CONFIRMAÇÕES CUSTOMIZADOS
// =========================================================

function mostrarAlerta(mensagem, titulo = 'Atenção') {
    document.getElementById('custom-alert-title').innerText = titulo;
    document.getElementById('custom-alert-message').innerText = mensagem;
    const modal = document.getElementById('custom-alert-modal');
    modal.style.display = 'flex';
    
    document.getElementById('btn-custom-alert-ok').onclick = function() {
        modal.style.display = 'none';
    };
}

function mostrarConfirmacao(mensagem, callbackSim, titulo = 'Confirmação') {
    document.getElementById('custom-confirm-title').innerText = titulo;
    document.getElementById('custom-confirm-message').innerText = mensagem;
    const modal = document.getElementById('custom-confirm-modal');
    modal.style.display = 'flex';

    document.getElementById('btn-custom-confirm-cancel').onclick = function() {
        modal.style.display = 'none';
    };

    document.getElementById('btn-custom-confirm-yes').onclick = function() {
        modal.style.display = 'none';
        if (typeof callbackSim === 'function') callbackSim();
    };
}


// ---------------------------------------------------------
// NAVEGAÇÃO DE TELAS
// ---------------------------------------------------------

function esconderTodasAsTelas() {
    const viewDashboard = document.getElementById('view-dashboard');
    const viewFaltas = document.getElementById('view-faltas');
    const viewNotas = document.getElementById('view-notas');
    const viewEventos = document.getElementById('view-eventos');
    
    if (viewDashboard) viewDashboard.style.display = 'none';
    if (viewFaltas) viewFaltas.style.display = 'none';
    if (viewNotas) viewNotas.style.display = 'none';
    if (viewEventos) viewEventos.style.display = 'none';

    const navDashboard = document.getElementById('nav-dashboard');
    const navFaltas = document.getElementById('nav-faltas');
    const navNotas = document.getElementById('nav-notas');
    const navEventos = document.getElementById('nav-eventos');
    
    if (navDashboard) navDashboard.className = 'nav-btn';
    if (navFaltas) navFaltas.className = 'nav-btn';
    if (navNotas) navNotas.className = 'nav-btn';
    if (navEventos) navEventos.className = 'nav-btn';
}

navDashboard.addEventListener('click', function(){
    esconderTodasAsTelas();
    document.getElementById('view-dashboard').style.display = 'block';
    this.className = 'nav-btn-active';
    atualizarDashboard(); 
});

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
    atualizarEventos();
});


// ---------------------------------------------------------
// AUTENTICAÇÃO E SESSÃO (Usando Helpers)
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
    
    
    const securityQ = document.getElementById('register-security-q').value;
    const securityA = document.getElementById('register-security-a').value.trim().toLowerCase();

    if(newPass !== ConfirmPass){
        alert('As senhas não conferem. Favor verificar');
        return;
    }
    
    if(existeUsuario(newUser)){
        alert('Usuário já existente. Tente outro.');
        return;
    }

    
    const dadosUsuario = {
        password: newPass,
        securityQ: securityQ,
        securityA: securityA,
        disciplinas: [],
        eventos: []
    };

    setDadosUsuario(newUser, dadosUsuario);
    
    alert('Usuário cadastrado com sucesso!');
    formRegister.reset();
    formRegister.style.display = 'none';
    formLogin.style.display = 'flex';
});

formLogin.addEventListener('submit', function(evento){
    evento.preventDefault(); 

    const user = document.getElementById('login-user').value.trim();
    const pass = document.getElementById('login-pass').value;

    if(!existeUsuario(user)){
        alert('Usuario não encontrado!');
        return;
    }

    const dadosSalvos = getDadosUsuario(user);

    if(pass !== dadosSalvos.password){
        alert('Senha incorreta.');
        return;
    }

    setUsuarioLogado(user);
    
    authView.style.display = 'none';
    appView.style.display = 'block';
    
    esconderTodasAsTelas();
    document.getElementById('view-dashboard').style.display = 'block';
    document.getElementById('nav-dashboard').className = 'nav-btn-active';
    
    renderizarSaudacao();
    atualizarDashboard(); 
    if (typeof atualizarDisciplinas === 'function') atualizarDisciplinas();
    if (typeof atualizarEventos === 'function') atualizarEventos();
});


// ---------------------------------------------------------
// RECUPERAÇÃO DE SENHA
// ---------------------------------------------------------

// Abrir Modal
if (btnForgotPass) {
    btnForgotPass.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); 
        
        console.log("Botão Esqueci minha senha clicado com sucesso!"); 
        
        inputRecoverUser.value = '';
        inputRecoverAnswer.value = '';
        inputRecoverNewPass.value = '';
        
        
        if (step1) step1.style.display = 'block'; 
        if (step2) step2.style.display = 'none';
        
        if (recoveryModal) {
            recoveryModal.style.setProperty('display', 'flex', 'important'); 
        }
    });
}

// Cancelar/Fechar Modal
const btnCancel1 = document.querySelector('.btn-cancel-step-1');
const btnCancel2 = document.querySelector('.btn-cancel-step-2');

[btnCancel1, btnCancel2].forEach(btn => {
    if (btn) {
        btn.addEventListener('click', function() {
            if (recoveryModal) recoveryModal.style.display = 'none';
        });
    }
});

// Buscar Conta
btnRecoverFind.addEventListener('click', function() {
    const user = inputRecoverUser.value.trim();
    if (!existeUsuario(user)) {
        alert('Usuário não encontrado!');
        return;
    }
    
    const dadosSalvos = getDadosUsuario(user);
    if (!dadosSalvos.securityQ || !dadosSalvos.securityA) {
        alert('Esta conta é de uma versão anterior e não possui pergunta de segurança cadastrada. Restaure via arquivo de backup.');
        return;
    }

    // Exibe a pergunta na tela 
    recoverQuestionText.innerText = perguntasDic[dadosSalvos.securityQ];
    step1.style.display = 'none';
    step2.style.display = 'block';
});


btnRecoverSave.addEventListener('click', function() {
    const user = inputRecoverUser.value.trim();
    const answerInput = inputRecoverAnswer.value.trim().toLowerCase();
    const newPass = inputRecoverNewPass.value.trim();

    if (answerInput === '' || newPass === '') {
        alert('Preencha a resposta secreta e a nova senha!');
        return;
    }

    const dadosSalvos = getDadosUsuario(user);

    if (answerInput !== dadosSalvos.securityA) {
        alert('Resposta secreta incorreta!');
        return;
    }

  
    dadosSalvos.password = newPass;
    setDadosUsuario(user, dadosSalvos);
    
    alert('Senha redefinida com sucesso! Você já pode fazer login.');
    recoveryModal.style.display = 'none';
});

function renderizarSaudacao() {
    const usuarioLogado = getUsuarioLogado();
    const greetingElement = document.getElementById('user-greeting');
    
    if (usuarioLogado && greetingElement) {
        greetingElement.innerText = `Olá, ${usuarioLogado}`;
    }
}


// ---------------------------------------------------------
// BOTÃO FAB E CRIAÇÃO DE DISCIPLINA
// ---------------------------------------------------------

const fabOverlay = document.getElementById('fab-overlay'); 

function fecharFabMenu() {
    fabMenu.style.display = 'none';
    fabMain.classList.remove('active');
    fabOverlay.style.display = 'none'; 
}

fabMain.addEventListener('click', function() {
    if (fabMenu.style.display === 'none' || fabMenu.style.display === '') {
        fabMenu.style.display = 'flex';
        fabMain.classList.add('active'); 
        fabOverlay.style.display = 'block'; 
    } else {
        fecharFabMenu();
    }
});

fabOverlay.addEventListener('click', fecharFabMenu);

btnFabDisciplina.addEventListener('click', function() {
    fecharFabMenu(); 
    createDisciplinaModal.style.display = 'flex';
});

btnFabEvento.addEventListener('click', function() {
    fecharFabMenu();
    idEventoEdicao = null;
    
    const tituloModal = document.querySelector('#modal-criar-evento h2');
    if (tituloModal) tituloModal.innerText = 'Novo Evento';
    
    document.getElementById('input-evento-titulo').value = '';
    document.getElementById('input-evento-data').value = '';
    document.getElementById('select-evento-tipo').value = 'prova';
    document.getElementById('check-evento-lembrete').checked = true;

    carregarDisciplinasNoSelect();
    modalCriarEvento.style.display = 'flex';
});

btnCancelNewDisciplina.addEventListener('click', function() {
    createDisciplinaModal.style.display = 'none';
});

btnSaveNewDisciplina.addEventListener('click', function(){
    const nomeDisciplina = inputCreateNome.value.trim();
    const professor = inputCreateProfessor.value.trim();
    const sala = inputCreateSala.value.trim();
    const limiteFaltas = inputCreateLimite.value;

    if(nomeDisciplina === '' || limiteFaltas === ''){
        alert('Verifique se todos campos foram preenchidos');
        return;
    }

    const usuarioLogado = getUsuarioLogado();
    const dadosSalvos = getDadosUsuario(usuarioLogado);

    const novaDisciplina = {
        nome: nomeDisciplina,
        professor: professor,
        sala: sala,
        limite: parseInt(limiteFaltas),
        faltas: 0,
        atividades: [] 
    };

    dadosSalvos.disciplinas.push(novaDisciplina);
    setDadosUsuario(usuarioLogado, dadosSalvos);

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

function atualizarDashboard() {
    const container = document.getElementById('container-dashboard');
    if (!container) return;

    const usuarioLogado = getUsuarioLogado();
    if (!usuarioLogado) return;
    const dadosSalvos = getDadosUsuario(usuarioLogado) || {};

    let somaNotasTotais = 0;
    let totalDisciplinas = 0;
    let crGeral = 0;

    if (dadosSalvos.disciplinas && dadosSalvos.disciplinas.length > 0) {
        totalDisciplinas = dadosSalvos.disciplinas.length;
        
        dadosSalvos.disciplinas.forEach(disc => {
            let notaFinalDisciplina = 0;
            if (disc.atividades && disc.atividades.length > 0) {
                disc.atividades.forEach(ativ => {
                    notaFinalDisciplina += parseFloat(ativ.nota) || 0;
                });
            }
            somaNotasTotais += notaFinalDisciplina;
        });
        
        crGeral = ((somaNotasTotais / totalDisciplinas) / 10).toFixed(1); 
    }

    const porcentagemGrafico = (parseFloat(crGeral) * 10) > 100 ? 100 : (parseFloat(crGeral) * 10);

    let piorMateriaFaltas = "Nenhuma disciplina";
    let statusFaltasTexto = "Você está 100% seguro contra reprovação.";
    let corAlertaFaltas = "#1e8e3e"; 

    if (dadosSalvos.disciplinas && dadosSalvos.disciplinas.length > 0) {
        let maiorProporcao = -1;
        dadosSalvos.disciplinas.forEach(disc => {
            const limite = parseInt(disc.limite) || 1; 
            const atuais = parseInt(disc.faltas) || 0;
            const proporcao = atuais / limite;

            if (proporcao > maiorProporcao) {
                maiorProporcao = proporcao;
                piorMateriaFaltas = disc.nome;
                statusFaltasTexto = `Você tem ${atuais} de ${limite} faltas máximas permitidas.`;
                
                if (proporcao >= 0.8) corAlertaFaltas = "#cc0000"; 
                else if (proporcao >= 0.5) corAlertaFaltas = "#b28000"; 
            }
        });
    }

    let eventosProximosContador = 0;
    if (dadosSalvos.eventos && dadosSalvos.eventos.length > 0) {
        const dataHoje = new Date();
        dataHoje.setHours(0, 0, 0, 0);

        dadosSalvos.eventos.forEach(ev => {
            if (!ev.concluido) {
                const dataEv = new Date(ev.data + 'T00:00:00');
                const difTempo = dataEv.getTime() - dataHoje.getTime();
                const difDias = Math.ceil(difTempo / (1000 * 60 * 60 * 24));
                
                if (difDias >= 0 && difDias <= 7) {
                    eventosProximosContador++;
                }
            }
        });
    }

    container.innerHTML = `
        <div style="background: white; padding: 16px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); cursor: pointer; transition: transform 0.2s;" onclick="document.getElementById('nav-notas').click();">
            <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: bold; color: #777; text-transform: uppercase;">Desempenho Geral</p>
            
            <div class="donut-container">
                <div class="donut-chart" style="background: conic-gradient(var(--brand-color) ${porcentagemGrafico}%, #e0e0e0 0%);">
                    <div class="donut-inner">${crGeral}</div>
                </div>
                <div>
                    <h3 style="margin: 0 0 4px 0; color: #333; font-size: 16px;">Coeficiente UFOP</h3>
                    <p style="margin: 0; font-size: 13px; color: #777;">Sua média atual no semestre.</p>
                </div>
            </div>
        </div>

        <div style="background: white; padding: 16px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-left: 6px solid ${corAlertaFaltas}; cursor: pointer;" onclick="document.getElementById('nav-faltas').click();">
            <p style="margin: 0; font-size: 12px; font-weight: bold; color: #777; text-transform: uppercase;">Atenção com Faltas</p>
            <h3 style="margin: 6px 0 2px 0; color: #333; font-size: 18px; text-transform: uppercase;">${piorMateriaFaltas}</h3>
            <p style="margin: 0; font-size: 14px; color: #555;">${statusFaltasTexto}</p>
        </div>

        <div style="background: white; padding: 16px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-left: 6px solid ${eventosProximosContador > 0 ? '#b28000' : '#1e8e3e'}; cursor: pointer;" onclick="document.getElementById('nav-eventos').click();">
            <p style="margin: 0; font-size: 12px; font-weight: bold; color: #777; text-transform: uppercase;">Prazos da Semana</p>
            <h3 style="margin: 6px 0 2px 0; color: #333; font-size: 24px; font-weight: bold;">
                ${eventosProximosContador} ${eventosProximosContador === 1 ? 'Compromisso' : 'Compromissos'}
            </h3>
            <p style="margin: 0; font-size: 14px; color: #555;">Agendados para os próximos 7 dias.</p>
        </div>
    `;
}

function atualizarDisciplinas(termoPesquisa = ''){
    const usuarioLogado = getUsuarioLogado();
    if(!usuarioLogado) return;

    const dadosSalvos = getDadosUsuario(usuarioLogado);
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
                    <p style="margin: 8px 0 12px 0; font-weight: bold; color: #555;">Faltas: ${disciplina.faltas} / ${disciplina.limite}</p>
                    
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
    const usuarioLogado = getUsuarioLogado();
    const dadosSalvos = getDadosUsuario(usuarioLogado);
    const materia = dadosSalvos.disciplinas[indexMateria];

    if(materia.faltas < materia.limite){
        materia.faltas += 1;
        setDadosUsuario(usuarioLogado, dadosSalvos);
        atualizarDisciplinas();
    } else {
        alert('Limite de faltas atingido!');
    }
}

function removerFalta(indexMateria){
    const usuarioLogado = getUsuarioLogado();
    const dadosSalvos = getDadosUsuario(usuarioLogado);
    const materia = dadosSalvos.disciplinas[indexMateria];

    if(materia.faltas > 0){
        materia.faltas -= 1;
        setDadosUsuario(usuarioLogado, dadosSalvos);
        atualizarDisciplinas();
    }
}

function excluirDisciplina(indexMateria){
    mostrarConfirmacao('Deseja realmente excluir esta disciplina?', function() {
        const usuarioLogado = getUsuarioLogado();
        const dadosSalvos = getDadosUsuario(usuarioLogado);
        dadosSalvos.disciplinas.splice(indexMateria, 1);
        setDadosUsuario(usuarioLogado, dadosSalvos);
        atualizarDisciplinas();
    });
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
        g = Math.round(255 * ratio); 
        b = 0;
    } else {
        const ratio = (nota - 50) / 50;
        r = Math.round(255 - (255 * ratio)); 
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
    const usuarioLogado = getUsuarioLogado();
    const dadosSalvos = getDadosUsuario(usuarioLogado);
    const materia = dadosSalvos.disciplinas[index];

    inputEditName.value = materia.nome;
    inputEditProfessor.value = materia.professor;
    inputEditSala.value = materia.sala;
    inputEditLimite.value = materia.limite;
    editModal.style.display = 'flex';
}

function abrirModalEditarNota(indexMateria, indexNota){
    indiceMateriaParaNota = indexMateria;
    indiceNotaParaEdicao = indexNota;

    const usuarioLogado = getUsuarioLogado();
    const dadosSalvos = getDadosUsuario(usuarioLogado);
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

    const usuarioLogado = getUsuarioLogado();
    const dadosSalvos = getDadosUsuario(usuarioLogado);
    
    dadosSalvos.disciplinas[indiceEdicao].nome = newNomeDisciplina;
    dadosSalvos.disciplinas[indiceEdicao].professor = newProfessor;
    dadosSalvos.disciplinas[indiceEdicao].sala = newSala;
    dadosSalvos.disciplinas[indiceEdicao].limite = parseInt(newLimiteDisciplina);

    setDadosUsuario(usuarioLogado, dadosSalvos);

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

    const usuarioLogado = getUsuarioLogado();
    const dadosSalvos = getDadosUsuario(usuarioLogado);

    const novaNota = {
        nome: novaNotaNome,
        nota: parseFloat(novaNotaValor)
    }

    if (indiceNotaParaEdicao === null) {
        dadosSalvos.disciplinas[indiceMateriaParaNota].atividades.push(novaNota);
    } else {
        dadosSalvos.disciplinas[indiceMateriaParaNota].atividades[indiceNotaParaEdicao] = novaNota;
    }

    setDadosUsuario(usuarioLogado, dadosSalvos);

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
    const usuarioLogado = getUsuarioLogado();
    const dadosSalvos = getDadosUsuario(usuarioLogado);
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
function excluirNota(indexMateria, indexNota) {
    mostrarConfirmacao('Deseja realmente excluir esta nota?', function() {
        const usuarioLogado = getUsuarioLogado();
        const dadosSalvos = getDadosUsuario(usuarioLogado);
        dadosSalvos.disciplinas[indexMateria].atividades.splice(indexNota, 1);
        setDadosUsuario(usuarioLogado, dadosSalvos);
        atualizarNotas();
        abrirModalHistorico(indexMateria); 
    });
}

// FECHAR MODAL DE HISTORICO
btnCloseHistorico.addEventListener('click', function(){
    modalHistorico.style.display = 'none';
});


// RENDERIZAR TELA DE NOTAS
function atualizarNotas(termoPesquisa = ''){
    const usuarioLogado = getUsuarioLogado();
    if(!usuarioLogado) return;

    const dadosSalvos = getDadosUsuario(usuarioLogado);
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
                statusHTML = `<span style="background: #fff5d2; color: #9e7f01; padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-left: 8px; font-weight: bold;">Andamento</span>`;
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

                    <p style="margin: 8px 0; color: #555; font-weight: bold; font-size: 16px;">Nota Total: ${notaTotal} <span style="font-size: 14px; font-weight: normal; color: #888;">/ 100</span> ${statusHTML}</p>

                    <div style="width: 100%; background: #eee; border-radius: 10px; height: 12px; margin-bottom: 16px; overflow: hidden;">
                        <div style="height: 100%; background: ${corBarraNota}; width: ${porcentagemNota}%; transition: width 0.5s ease, background-color 0.5s ease;"></div>
                    </div>

                    <div style="display: flex; gap: 8px;">
                        <button onclick="abrirModalNovaNota(${index})" style="flex: 1; padding: 10px; border: none; border-radius: 6px; background: var(--brand-color); color: #fff; font-weight: bold; cursor: pointer;">+ Nota</button>
                        <button onclick="abrirModalHistorico(${index})" style="flex: 1; padding: 10px; border: none; border-radius: 6px; background: #ccc; font-weight: bold; color: #333; cursor: pointer;">Histórico</button>
                    </div>
                </div>
            `;
            listaNotas.innerHTML += cardHTML;
        });
    }
}

// ---------------------------------------------------------
// TELA DE EVENTOS
// ---------------------------------------------------------

function carregarDisciplinasNoSelect(){
    const selectDisciplina = document.getElementById('select-evento-disciplina');

    const usuarioLogado = getUsuarioLogado();
    if(!usuarioLogado) return;
    const dadosSalvos = getDadosUsuario(usuarioLogado);

    selectDisciplina.innerHTML = '<option value="">- Selecione a disciplina -</option>';

    if (dadosSalvos.disciplinas && dadosSalvos.disciplinas.length > 0) {
        dadosSalvos.disciplinas.forEach(function(disciplina, index) {
            selectDisciplina.innerHTML += `<option value="${index}">${disciplina.nome}</option>`;
        });
    }
}

btnSaveEvento.addEventListener('click', function() {
    const titulo = document.getElementById('input-evento-titulo').value.trim();
    const disciplinaValor = document.getElementById('select-evento-disciplina').value; 
    const data = document.getElementById('input-evento-data').value;
    const tipo = document.getElementById('select-evento-tipo').value;
    const lembreteAtivo = document.getElementById('check-evento-lembrete').checked; 

    if (titulo === '' || data === '') {
        alert('Por favor, preencha o título e a data do evento.');
        return;
    }

    const usuarioLogado = getUsuarioLogado();
    const dadosSalvos = getDadosUsuario(usuarioLogado);

    if (!dadosSalvos.eventos) {
        dadosSalvos.eventos = [];
    }

    if (idEventoEdicao === null) {
        const novoEvento = {
            id: Date.now(),
            titulo: titulo,
            disciplinaIndex: disciplinaValor === "" ? null : parseInt(disciplinaValor), 
            data: data,
            tipo: tipo,
            lembreteAtivo: lembreteAtivo,
            concluido: false 
        };
        dadosSalvos.eventos.push(novoEvento);
    } else {
        const indexReal = dadosSalvos.eventos.findIndex(ev => ev.id === idEventoEdicao);
        
        if (indexReal !== -1) {
            dadosSalvos.eventos[indexReal].titulo = titulo;
            dadosSalvos.eventos[indexReal].disciplinaIndex = disciplinaValor === "" ? null : parseInt(disciplinaValor);
            dadosSalvos.eventos[indexReal].data = data;
            dadosSalvos.eventos[indexReal].tipo = tipo;
            dadosSalvos.eventos[indexReal].lembreteAtivo = lembreteAtivo;
        }
    }

    setDadosUsuario(usuarioLogado, dadosSalvos);
    idEventoEdicao = null;

    document.getElementById('input-evento-titulo').value = '';
    document.getElementById('input-evento-data').value = '';
    modalCriarEvento.style.display = 'none';

    esconderTodasAsTelas();
    viewEventos.style.display = 'block';
    navEventos.className = 'nav-btn-active';
    atualizarEventos();
});


btnCancelEvento.addEventListener('click', function(){
    modalCriarEvento.style.display = 'none';
    document.getElementById('input-evento-titulo').value = '';
    document.getElementById('input-evento-data').value = '';
    document.getElementById('select-evento-tipo').value = 'prova'; 
    document.getElementById('check-evento-lembrete').checked = true;
});

function atualizarEventos() {
    const usuarioLogado = getUsuarioLogado();
    if (!usuarioLogado) return;

    const dadosSalvos = getDadosUsuario(usuarioLogado);
    listaEventos.innerHTML = '';

    if (!dadosSalvos.eventos || dadosSalvos.eventos.length === 0) {
        listaEventos.innerHTML = `
            <div style="text-align: center; margin-top: 40px; color: #777; display: flex; flex-direction: column; align-items: center; gap: 12px;">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${SVGCalendar.replace(/<svg[^>]*>|<\/svg>/g, '')}</svg>
                <p>Nenhum evento agendado.<br>Clique no botão + para criar!</p>
            </div>
        `;
        return; 
    }

    dadosSalvos.eventos.sort(function(a, b) {
        return new Date(a.data) - new Date(b.data);
    });

    const eventosFiltrados = dadosSalvos.eventos.filter(function(evento) {
        if (filtroEventoAtual === 'pendentes') {
            return !evento.concluido; 
        } else if (filtroEventoAtual === 'concluidos') {
            return evento.concluido; 
        } else {
            return true; 
        }
    });

    if (eventosFiltrados.length === 0) {
        listaEventos.innerHTML = `
            <div style="text-align: center; margin-top: 40px; color: #777;">
                <p style="font-size: 32px; margin-bottom: 8px;">🎯</p>
                <p>Nenhum evento encontrado nesta categoria.</p>
            </div>
        `;
        return;
    }
    
    eventosFiltrados.forEach(function(evento, index) {
        const dataEvento = new Date(evento.data + 'T00:00:00'); 
        const dataHoje = new Date();
        dataHoje.setHours(0, 0, 0, 0); 

        const diferencaTempo = dataEvento.getTime() - dataHoje.getTime();
        const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));

        let etiquetaHTML = '';
        
        if (evento.concluido) {
            etiquetaHTML = `<span style="background: #e6f4ea; color: #1e8e3e; padding: 5px 10px; border-radius: 4px; font-size: 13px; font-weight: bold;">Concluído</span>`;
        } else if (diferencaDias < 0) {
            etiquetaHTML = `<span style="background: #f5f5f5; color: #333333; padding: 5px 10px; border-radius: 4px; font-size: 13px; font-weight: bold;">Atrasado</span>`;
        } else if (diferencaDias === 0) {
            etiquetaHTML = `<span style="background: #fff0f0; color: #cc0000; padding: 5px 10px; border-radius: 4px; font-size: 13px; font-weight: bold;">É Hoje!</span>`;
        } else if (diferencaDias === 1) {
            etiquetaHTML = `<span style="background: #fff0f0; color: #cc0000; padding: 5px 10px; border-radius: 4px; font-size: 13px; font-weight: bold;">Amanhã</span>`;
        } else if (diferencaDias < 7) {
            etiquetaHTML = `<span style="background: #fff9e6; color: #b28000; padding: 5px 10px; border-radius: 4px; font-size: 13px; font-weight: bold;">Faltam ${diferencaDias} dias</span>`;
        }
        
        let nomeDisciplina = "Geral / Nenhuma";
        if (evento.disciplinaIndex !== null && dadosSalvos.disciplinas[evento.disciplinaIndex]) {
            nomeDisciplina = dadosSalvos.disciplinas[evento.disciplinaIndex].nome;
        }

        const cardHTML = `
            <div class="card" style="background: #fff; padding: 16px; border-radius: 12px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); position: relative;">
                
                <div style="position: absolute; top: 16px; right: 16px; display: flex; gap: 12px; align-items: center;">
                    
                    ${evento.concluido ? 
                        `<button onclick="desfazerConclusaoEvento(${evento.id})" style="background: transparent; border: none; cursor: pointer; padding: 4px;" title="Desfazer Conclusão">${SVGUndo}</button>` 
                        : 
                        `<button onclick="concluirEvento(${evento.id})" style="background: transparent; border: none; cursor: pointer; padding: 4px;" title="Marcar como Concluído">${SVGCheck}</button>`
                    }
                    
                    <button onclick="abrirModalEditarEvento(${evento.id})" style="background: transparent; border: none; cursor: pointer; padding: 4px;" title="Editar Evento">${SVGLapis}</button>
                    <button onclick="excluirEvento(${evento.id})" style="background: transparent; border: none; cursor: pointer; padding: 4px;" title="Excluir Evento">${SVGLixeira}</button>
                </div>

                <h3 style="margin-top: 0; color: var(--brand-color); padding-right: 60px; text-transform: uppercase; font-size: 16px;">
                    ${evento.titulo}
                </h3>
                
                <div style="margin-top: 14px; display: flex; flex-direction: column; gap: 6px;">
                    <p style="margin: 0; color: #555; font-size: 14px;"><strong>Matéria:</strong> <span style="text-transform: uppercase;">${nomeDisciplina}</span></p>
                    <p style="margin: 0; color: #555; font-size: 14px;"><strong>Tipo:</strong> <span style="text-transform: capitalize;">${evento.tipo}</span></p>
                    <p style="margin: 0; color: #555; font-size: 14px;"><strong>Data:</strong> ${evento.data}</p>
                </div>

                <div style="position: absolute; bottom: 25px; right: 25px;">
                    ${etiquetaHTML}
                </div>
                
            </div>
        `;
        
        listaEventos.innerHTML += cardHTML;
    });
}

function alterarFiltroEventos(novoFiltro) {
    filtroEventoAtual = novoFiltro;

    const btnPendentes = document.getElementById('filtro-btn-pendentes');
    const btnConcluidos = document.getElementById('filtro-btn-concluidos');
    const btnTodos = document.getElementById('filtro-btn-todos');

    [btnPendentes, btnConcluidos, btnTodos].forEach(btn => {
        btn.style.background = 'transparent';
        btn.style.color = '#555';
    });

    if (novoFiltro === 'pendentes') {
        btnPendentes.style.background = 'var(--brand-color)';
        btnPendentes.style.color = 'white';
    } else if (novoFiltro === 'concluidos') {
        btnConcluidos.style.background = 'var(--brand-color)';
        btnConcluidos.style.color = 'white';
    } else if (novoFiltro === 'todos') {
        btnTodos.style.background = 'var(--brand-color)';
        btnTodos.style.color = 'white';
    }

    atualizarEventos();
}

document.getElementById('filtro-btn-pendentes').addEventListener('click', function() {
    alterarFiltroEventos('pendentes');
});

document.getElementById('filtro-btn-concluidos').addEventListener('click', function() {
    alterarFiltroEventos('concluidos');
});

document.getElementById('filtro-btn-todos').addEventListener('click', function() {
    alterarFiltroEventos('todos');
});

// CONCLUIR EVENTO
function concluirEvento(idEvento) {
    const usuarioLogado = getUsuarioLogado();
    const dadosSalvos = getDadosUsuario(usuarioLogado);

    const indexReal = dadosSalvos.eventos.findIndex(ev => ev.id === idEvento);

    if (indexReal !== -1) {
        dadosSalvos.eventos[indexReal].concluido = true;
        setDadosUsuario(usuarioLogado, dadosSalvos);
        atualizarEventos();
    }
}

// DESFAZER CONCLUIR EVENTO
function desfazerConclusaoEvento(idEvento) {
    const usuarioLogado = getUsuarioLogado();
    const dadosSalvos = getDadosUsuario(usuarioLogado);

    const indexReal = dadosSalvos.eventos.findIndex(ev => ev.id === idEvento);

    if (indexReal !== -1) {
        dadosSalvos.eventos[indexReal].concluido = false;
        setDadosUsuario(usuarioLogado, dadosSalvos);
        atualizarEventos();
    }
}

function abrirModalEditarEvento(idEvento) {
    idEventoEdicao = idEvento;

    const usuarioLogado = getUsuarioLogado();
    const dadosSalvos = getDadosUsuario(usuarioLogado);

    const evento = dadosSalvos.eventos.find(ev => ev.id === idEvento);
    if (!evento) return;

    carregarDisciplinasNoSelect();

    document.getElementById('input-evento-titulo').value = evento.titulo;
    document.getElementById('select-evento-tipo').value = evento.tipo;
    document.getElementById('select-evento-disciplina').value = evento.disciplinaIndex === null ? "" : evento.disciplinaIndex;
    document.getElementById('input-evento-data').value = evento.data;
    document.getElementById('check-evento-lembrete').checked = evento.lembreteAtivo;

    const tituloModal = document.querySelector('#modal-criar-evento h2');
    if (tituloModal) tituloModal.innerText = 'Editar Evento';

    modalCriarEvento.style.display = 'flex';
}

function excluirEvento(idEvento) {
    mostrarConfirmacao('Deseja realmente excluir este evento?', function() {
        const usuarioLogado = getUsuarioLogado();
        const dadosSalvos = getDadosUsuario(usuarioLogado);
        const indexReal = dadosSalvos.eventos.findIndex(ev => ev.id === idEvento);
        if (indexReal !== -1) {
            dadosSalvos.eventos.splice(indexReal, 1);
            setDadosUsuario(usuarioLogado, dadosSalvos);
            atualizarEventos();
        }
    });
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
    mostrarConfirmacao('Deseja mesmo sair da sua conta?', function() {
        removerSessao();
        appView.style.display = 'none';
        authView.style.display = 'flex';
        modalSettings.style.display = 'none';
    });
});

btnQuickLogout.addEventListener('click', function() {
    mostrarConfirmacao('Deseja mesmo sair da sua conta?', function() {
        removerSessao();
        appView.style.display = 'none';
        authView.style.display = 'flex';
    });
});

btnExportar.addEventListener('click', function() {
    const usuarioLogado = getUsuarioLogado();
    const dadosSalvos = getDadosUsuario(usuarioLogado); 
    const blob = new Blob([JSON.stringify(dadosSalvos)], { type: 'application/json' });
    const linkInvisivel = document.createElement('a');
    linkInvisivel.href = URL.createObjectURL(blob);
    linkInvisivel.download = `mygrad_backup_${usuarioLogado}.json`;
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

            const usuarioLogado = getUsuarioLogado();
            setDadosUsuario(usuarioLogado, dadosImportados);
            
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
    let currentUser = getUsuarioLogado();
    
    const inputCor = document.getElementById('input-cor-tema');
    const novaCor = inputCor ? inputCor.value : '#841D33';

    if (newUser === '' && newPass === '') {
        const dadosAtuais = getDadosUsuario(currentUser) || {};
        if (dadosAtuais.temaCor === novaCor) {
            alert('Preencha pelo menos um dos campos ou altere a cor para salvar.');
            return;
        }
    }

    let alterouAlgo = false;

    if (newUser !== '') {
        if (newUser === currentUser) {
            alert('O novo usuário deve ser diferente do atual!');
            return; 
        }
        if (existeUsuario(newUser)) {
            alert('Este usuário já existe. Escolha outro nome!');
            return;
        }
        
        const dadosSalvos = getDadosUsuario(currentUser);
        setDadosUsuario(newUser, dadosSalvos); 
        removerDadosUsuario(currentUser); 
        setUsuarioLogado(newUser); 
        
        currentUser = newUser;
        alterouAlgo = true;
    }

    if (newPass !== '') {
        const dadosSalvos = getDadosUsuario(currentUser);
        dadosSalvos.password = newPass; 
        setDadosUsuario(currentUser, dadosSalvos);
        alterouAlgo = true;
    }

    const dadosFinais = getDadosUsuario(currentUser) || {};
    dadosFinais.temaCor = novaCor;
    setDadosUsuario(currentUser, dadosFinais);
    
    document.documentElement.style.setProperty('--brand-color', novaCor);
    alterouAlgo = true;

    if (alterouAlgo) {
        inputNewUser.value = '';
        inputNewPass.value = '';
        alert('Alterações salvas com sucesso!');
        modalSettings.style.display = 'none'; 
    }
});

// --- TRAVA DE SESSÃO AUTOMÁTICA ---
function checarSessaoAtiva() {
    const usuarioLogado = getUsuarioLogado();
    
    
    const appView = document.getElementById('app-view');
    const authView = document.getElementById('auth-view'); 
    const viewDashboard = document.getElementById('view-dashboard'); 
    const navDashboard = document.getElementById('nav-dashboard');

    if (usuarioLogado) {
        const dadosSalvos = getDadosUsuario(usuarioLogado) || {};
        if (dadosSalvos.temaCor) {
            document.documentElement.style.setProperty('--brand-color', dadosSalvos.temaCor);
            const inputCor = document.getElementById('input-cor-tema');
            if (inputCor) inputCor.value = dadosSalvos.temaCor;
        }

        if (typeof esconderTodasAsTelas === 'function') esconderTodasAsTelas();
        
       
        if (authView) authView.style.display = 'none';
        if (appView) appView.style.display = 'block';
        
        if (viewDashboard) viewDashboard.style.display = 'block';
        if (navDashboard) navDashboard.className = 'nav-btn-active';
        
        renderizarSaudacao();
        
        if (typeof atualizarDashboard === 'function') atualizarDashboard();
        if (typeof atualizarDisciplinas === 'function') atualizarDisciplinas();
        if (typeof atualizarEventos === 'function') atualizarEventos();
    } else {
        
        if (appView) appView.style.display = 'none';
        if (authView) authView.style.display = 'flex';
    }
}


window.addEventListener('DOMContentLoaded', () => {
    
    
    checarSessaoAtiva();

    // Registra o Service Worker apenas após o carregamento seguro do DOM
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js', { scope: './' })
        .then((reg) => console.log('Service Worker do MyGrad Registrado no Escopo:', reg.scope))
        .catch(err => console.log('Erro ao registrar Service Worker:', err));
    }
});