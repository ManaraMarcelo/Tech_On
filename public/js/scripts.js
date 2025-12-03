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

document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. MODAL DE BOAS-VINDAS (PRIMEIRA VISITA) ---
    const welcomeModalEl = document.getElementById('welcomeModal');
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
    
    // --- 2. LÓGICA DE LOGIN (ERRO) ---
    const loginModalEl = document.getElementById('loginModal');
    const loginError = document.getElementById('loginError');

    // Pega os parametros da URL
    const urlParams = new URLSearchParams(window.location.search);
    
    // Se login falhou, abre o modal e mostra o erro
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

    // --- 3. TOASTS / NOTIFICAÇÕES ---
    
    // Sucesso no Contato
    if (urlParams.get('status') === 'sucesso') {
        const toastEl = document.getElementById('notificationToast');
        if (toastEl) {
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        }
    }

    // Erro de Acesso Negado
    if (urlParams.get('error') === 'access_denied') {
        const errorToastEl = document.getElementById('accessDeniedToast');
        if (errorToastEl) {
            const toast = new bootstrap.Toast(errorToastEl);
            toast.show();
            // Remove o erro da URL
            window.history.replaceState({}, document.title, "/");
        }
    }

    // --- 4. RECUPERAÇÃO DE SENHA (MODO ACADÊMICO) ---
    
    // Código enviado para o terminal
    if (urlParams.get('reset') === 'codeSent') {
        // Mostra o aviso amarelo
        const terminalToastEl = document.getElementById('terminalToast');
        if (terminalToastEl) {
            const toast = new bootstrap.Toast(terminalToastEl);
            toast.show();
        }

        // Abre o modal de reset
        const resetModalEl = document.getElementById('resetModal');
        if (resetModalEl) {
            const resetModal = new bootstrap.Modal(resetModalEl);
            // Preenche o email no campo oculto
            const email = urlParams.get('email');
            const emailHiddenInput = document.getElementById('resetEmailHidden');
            if (email && emailHiddenInput) {
                emailHiddenInput.value = email;
            }
            resetModal.show();
        }
    }

    // Código inválido
    if (urlParams.get('reset') === 'invalid') {
        alert('Código inválido ou expirado. Tente novamente.');
    }
    
    // Sucesso na troca de senha
    if (urlParams.get('reset') === 'success') {
        alert('Senha alterada com sucesso! Faça login com sua nova senha.');
        if (loginModalEl) {
            const loginModal = new bootstrap.Modal(loginModalEl);
            loginModal.show();
        }
    }

    // --- 5. FORMULÁRIO DE CONTATO (CPF) ---
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
                    if(feedbackEl) feedbackEl.style.display = 'block';
                } else {
                    cpfInput.classList.remove('is-invalid');
                    cpfInput.classList.add('is-valid');
                    if(feedbackEl) feedbackEl.style.display = 'none';
                }
            }
        });

        const cpfInput = document.querySelector('#cpf');
        if (cpfInput) {
            cpfInput.addEventListener('input', function() {
                const feedbackEl = document.querySelector('#cpfFeedback');
                if (this.value === '') {
                    this.classList.remove('is-valid', 'is-invalid');
                    if(feedbackEl) feedbackEl.style.display = 'none';
                    return;
                }
                if (validarCPF(this.value)) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    if(feedbackEl) feedbackEl.style.display = 'none';
                } else {
                    this.classList.add('is-invalid');
                    this.classList.remove('is-valid');
                }
            });
        }
    }

    // --- 6. LÓGICA DE CADASTRO (SUCESSO E ERRO) ---
    const registerParam = urlParams.get('register');

    // Cenario 1: Sucesso
    if (registerParam === 'success') {
        // Mostra o Toast Verde
        const successToastEl = document.getElementById('registerSuccessToast');
        if (successToastEl) {
            const toast = new bootstrap.Toast(successToastEl);
            toast.show();
        }
        // Abre o modal de Login automaticamente para facilitar
        if (loginModalEl) {
            const loginModal = new bootstrap.Modal(loginModalEl);
            loginModal.show();
        }
        // Limpa a URL
        window.history.replaceState({}, document.title, "/");
    }

    // Cenario 2: Erro (Senhas não conferem ou Email já existe)
    if (registerParam === 'failed' || registerParam === 'error_password') {
        const registerModalEl = document.getElementById('registerModal');
        const registerErrorEl = document.getElementById('registerError');
        
        if (registerModalEl && registerErrorEl) {
            // Define a mensagem correta
            if (registerParam === 'error_password') {
                registerErrorEl.innerText = "As senhas não conferem.";
            } else {
                registerErrorEl.innerText = "Erro: E-mail já cadastrado ou inválido.";
            }
            
            // Abre o modal e mostra o erro
            const registerModal = new bootstrap.Modal(registerModalEl);
            registerModal.show();
            registerErrorEl.classList.remove('d-none');
        }
    }
    
    // Limpa o erro ao abrir o modal manualmente
    const registerModalEl = document.getElementById('registerModal');
    if (registerModalEl) {
        registerModalEl.addEventListener('show.bs.modal', () => {
            const errDiv = document.getElementById('registerError');
            if(errDiv) errDiv.classList.add('d-none');
        });
    }
});