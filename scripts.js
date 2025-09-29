// ===================================================
// FUNÇÃO DE VALIDAÇÃO DE CPF
// ===================================================
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }

    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }
    return true;
}

// ===================================================
// CÓDIGO PARA "CONECTAR" O VALIDADOR E NOTIFICAÇÕES
// ===================================================
document.addEventListener('DOMContentLoaded', function() {
    // --- LÓGICA DO FORMULÁRIO DE CONTATO (CPF) ---
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const cpfInput = document.querySelector('#cpf');
            if (cpfInput) {
                const cpfValue = cpfInput.value;
                const feedbackEl = document.querySelector('#cpfFeedback');
                
                if (!validarCPF(cpfValue)) {
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

    // --- NOVA LÓGICA PARA A NOTIFICAÇÃO (TOAST) ---
    const urlParams = new URLSearchParams(window.location.search);
    const formStatus = urlParams.get('status');

    // Se a URL contiver "?status=sucesso"
    if (formStatus === 'sucesso') {
        const toastEl = document.getElementById('notificationToast');
        if (toastEl) {
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        }
    }
});