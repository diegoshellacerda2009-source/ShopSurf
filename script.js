// Seleciona o botão com id "mensagemBtn"
const mensagemBtn = document.getElementById("mensagemBtn");

// Adiciona um evento de clique no botão
mensagemBtn.addEventListener("click", () => {

  // Mostra um alerta quando o botão for clicado
  alert("Não temos promoções no momento!");

});


// Seleciona o formulário com id "formContato"
const form = document.getElementById("formContato");

// Adiciona um evento quando o formulário for enviado
form.addEventListener("submit", function(e) {

  // Impede o recarregamento da página
  e.preventDefault();

  // Pega o valor digitado no campo nome
  // trim() remove espaços vazios no começo e fim
  const nome = document.getElementById("nome").value.trim();

  // Pega o valor digitado no email
  const email = document.getElementById("email").value.trim();

  // Pega a mensagem digitada
  const mensagem = document.getElementById("mensagem").value.trim();

  // Verifica se todos os campos foram preenchidos
  if(nome && email && mensagem) {

    // Mostra mensagem de sucesso
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);

    // Limpa os campos do formulário
    form.reset();

  } else {

    // Mostra aviso se algum campo estiver vazio
    alert("Por favor, preencha todos os campos.");

  }
});



// Seleciona o botão do menu mobile
const menuToggle = document.getElementById("menuToggle");

// Seleciona o menu de navegação
const menu = document.querySelector("nav ul.menu");

// Verifica se o botão existe
if(menuToggle) {

  // Adiciona evento de clique no botão
  menuToggle.addEventListener("click", () => {

    // Adiciona ou remove a classe "active"
    // Isso abre e fecha o menu
    menu.classList.toggle("active");

  });
}



// Seleciona o botão de troca de tema
const themeBtn = document.getElementById("themeBtn");

// Adiciona evento de clique
themeBtn.addEventListener("click", () => {

  // Adiciona ou remove a classe dark-theme no body
  // Isso ativa/desativa o modo escuro
  document.body.classList.toggle("dark-theme");

  // Verifica se o body possui a classe dark-theme
  if(document.body.classList.contains("dark-theme")) {

    // Troca o ícone para sol
    // Indica que pode voltar ao tema claro
    themeBtn.textContent = "☀️";

  } else {

    // Troca o ícone para lua
    // Indica que pode ativar o modo escuro
    themeBtn.textContent = "🌙";

  }

});