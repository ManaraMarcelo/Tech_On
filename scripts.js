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
    
    // --- LÓGICA DE LOGIN ---
    const loginStatusLink = document.getElementById('loginStatusLink');
    const loginButton = document.getElementById('loginButton');
    const loginModalEl = document.getElementById('loginModal');
    const loginError = document.getElementById('loginError');

    // 1. Função que verifica o status do login em TODA página que carregar
    function checkLoginStatus() {
        if (sessionStorage.getItem('userStatus') === 'loggedIn') {
            if(loginStatusLink) {
                loginStatusLink.innerHTML = '<i class="bi bi-check-circle-fill me-1"></i> Connected';
                loginStatusLink.classList.remove('text-muted');
                loginStatusLink.classList.add('text-success', 'fw-bold');
                loginStatusLink.removeAttribute('data-bs-toggle');
                loginStatusLink.setAttribute('title', 'Clique para sair (Logout)');
            }
        } else {
            if(loginStatusLink) {
                loginStatusLink.innerHTML = '<i class="bi bi-person-fill me-1"></i> Login';
                loginStatusLink.classList.add('text-muted');
                loginStatusLink.classList.remove('text-success', 'fw-bold');
                loginStatusLink.setAttribute('data-bs-toggle', 'modal');
                loginStatusLink.removeAttribute('title');
            }
        }
    }

    // 2. Função para tentar fazer o login
    function attemptLogin() {
        const emailInput = document.getElementById('emailInput').value;
        const passwordInput = document.getElementById('passwordInput').value;
        if (emailInput === 'teste@teste' && passwordInput === 'teste') {
            sessionStorage.setItem('userStatus', 'loggedIn');
            const modalInstance = bootstrap.Modal.getInstance(loginModalEl);
            modalInstance.hide();
            checkLoginStatus();
        } else {
            loginError.classList.remove('d-none');
        }
    }
    
    // 3. Função para fazer logout
    function attemptLogout() {
        if (sessionStorage.getItem('userStatus') === 'loggedIn') {
            sessionStorage.removeItem('userStatus');
            location.reload();
        }
    }

    // --- CONECTANDO AS FUNÇÕES AOS ELEMENTOS (EVENT LISTENERS) ---
    
    checkLoginStatus();
    
    if (loginButton) {
        loginButton.addEventListener('click', attemptLogin);
    }
    
    if(loginStatusLink) {
        loginStatusLink.addEventListener('click', function(event) {
            if (sessionStorage.getItem('userStatus') === 'loggedIn') {
                event.preventDefault();
                attemptLogout();
            }
        });
    }

    // --- LÓGICA DO FORMULÁRIO DE CONTATO (CPF) ---
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const cpfInput = document.querySelector('#cpf');
            if (cpfInput && cpfInput.value) {
                const feedbackEl = document.querySelector('#cpfFeedback');
                if (!validarCPF(cpfInput.value)) {
                    event.preventDefault(); 
                    cpfInput.classList.add('is-invalid');
                    cpfInput.classList.remove('is-valid');
                    feedbackEl.style.display = 'block';
                } else {
                    cpfInput.classList.remove('is-invalid');
                    cpfInput.classList.add('is-valid');
                    feedbackEl.style.display = 'none';
                }
            }
        });

        const cpfInput = document.querySelector('#cpf');
        if (cpfInput) {
            cpfInput.addEventListener('input', function() {
                if (this.value === '') {
                    this.classList.remove('is-valid', 'is-invalid');
                    document.querySelector('#cpfFeedback').style.display = 'none';
                    return;
                }
                if (validarCPF(this.value)) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    document.querySelector('#cpfFeedback').style.display = 'none';
                } else {
                    this.classList.add('is-invalid');
                    this.classList.remove('is-valid');
                }
            });
        }
    }

    // --- LÓGICA PARA A NOTIFICAÇÃO (TOAST) ---
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('status') === 'sucesso') {
        const toastEl = document.getElementById('notificationToast');
        if (toastEl) {
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        }
    }
});