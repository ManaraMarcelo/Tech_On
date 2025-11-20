// ===================================================
// FUNÇÃO DE VALIDAÇÃO DE CPF
// ===================================================
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) { return false; }
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
}

// ===================================================
// LÓGICA PRINCIPAL (EXECUTADA QUANDO A PÁGINA CARREGA)
// ===================================================
document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA DO MODAL DE BOAS-VINDAS (PRIMEIRA VISITA) ---
    const welcomeModalEl = document.getElementById('welcomeModal');
    // Só executa se o modal de boas-vindas existir na página (geralmente só no index.html)
    if (welcomeModalEl) { 
        const storageKey = 'techonWelcomeModalShown';
        if (!localStorage.getItem(storageKey)) {
            const welcomeModal = new bootstrap.Modal(welcomeModalEl);
            setTimeout(function() {
                welcomeModal.show();
            }, 2000);
            localStorage.setItem(storageKey, 'true');
        }
    }
    
    // --- LÓGICA DE LOGIN (usando form submit do modal) ---
const loginModalEl = document.getElementById('loginModal');
const loginError = document.getElementById('loginError');

// Se a URL contiver ?login=failed, abre o modal e mostra o erro
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('login') === 'failed' && loginModalEl && loginError) {
    const loginModal = new bootstrap.Modal(loginModalEl);
    loginModal.show();
    loginError.classList.remove('d-none');
}

// Limpa alerta quando usuário abre o modal manualmente
if (loginModalEl) {
    loginModalEl.addEventListener('show.bs.modal', () => {
        if (loginError) loginError.classList.add('d-none');
    });
}

    // --- LÓGICA PARA A NOTIFICAÇÃO (TOAST) ---
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('login') === 'failed' && loginModalEl && loginError) {
        const loginModal = new bootstrap.Modal(loginModalEl);
        loginModal.show();
        loginError.classList.remove('d-none');
    }

    // Opcional: limpar alerta se usuário abrir modal manualmente
    if (loginModalEl) {
        loginModalEl.addEventListener('show.bs.modal', () => {
            if (loginError) loginError.classList.add('d-none');
        });
    }
});