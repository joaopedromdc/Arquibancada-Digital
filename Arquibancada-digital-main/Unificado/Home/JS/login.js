// --- Abrir modal ---
function abrirFormulario() {
  document.getElementById("formModal").style.display = "block";
}

// --- Fechar modal ---
function fecharFormulario() {
  document.getElementById("formModal").style.display = "none";
}

// --- Fechar ao clicar fora ---
window.onclick = function(event) {
  const modal = document.getElementById("formModal");
  if (event.target === modal) {
    fecharFormulario();
  }
};

// --- Quando a página carrega, verifica se está logado ---
window.onload = function() {
  if (localStorage.getItem("usuario")) {
    document.getElementById("btnLoginNav").style.display = "none";
    document.getElementById("btnLogoutNav").style.display = "inline-block";
  }
};

// --- Função de CADASTRO ---
function fazerCadastro() {
  const nome = document.getElementById("nome").value;
  const senha = document.getElementById("senha").value;

  if (nome === "" || senha === "") {
    alert("Preencha todos os campos!");
    return;
  }

  localStorage.setItem("usuario", nome);
  localStorage.setItem("senha", senha);

  alert("Cadastro realizado com sucesso!");

  fecharFormulario();

  // Esconde login e mostra logout
  document.getElementById("btnLoginNav").style.display = "none";
  document.getElementById("btnLogoutNav").style.display = "inline-block";
}

// --- Função de LOGIN ---
function fazerLogin() {
  const nome = document.getElementById("nome").value;
  const senha = document.getElementById("senha").value;

  const usuarioSalvo = localStorage.getItem("usuario");
  const senhaSalva = localStorage.getItem("senha");

  if (!usuarioSalvo) {
    alert("Nenhum cadastro encontrado! Cadastre-se primeiro.");
    return;
  }

  if (nome === usuarioSalvo && senha === senhaSalva) {
    alert("Login realizado com sucesso!");
    fecharFormulario();

    // Esconde login e mostra logout
    document.getElementById("btnLoginNav").style.display = "none";
    document.getElementById("btnLogoutNav").style.display = "inline-block";

  } else {
    alert("Usuário ou senha incorretos!");
  }
}

// --- Função SAIR ---
function fazerLogout() {
  // Limpa localStorage
  localStorage.removeItem("usuario");
  localStorage.removeItem("senha");

  alert("Você saiu da conta!");

  // Mostrar Login / esconder Logout
  document.getElementById("btnLoginNav").style.display = "inline-block";
  document.getElementById("btnLogoutNav").style.display = "none";
}