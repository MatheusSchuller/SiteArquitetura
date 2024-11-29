const selectElement = function (element) {
    return document.querySelector(element);
  };

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

/* SCROLL REVEAL */
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-form', {
    origin: 'bottom',
    duration: 1000,
    distance: '15rem',
    delay: 800, // Ajuste o delay conforme necessário
    reset: false // Se você quiser que a animação seja repetida quando a seção for novamente visível
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Impede o envio tradicional do formulário

    // Pega os valores dos campos
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Mostra a mensagem de resposta
    document.getElementById("responseMessage").textContent = `Obrigado, ${name}! Entraremos em contato com você em breve.`;

    // Limpa os campos do formulário
    document.getElementById("contactForm").reset();
});
