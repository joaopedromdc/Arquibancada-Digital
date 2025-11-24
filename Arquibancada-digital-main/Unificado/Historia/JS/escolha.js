    document.addEventListener('DOMContentLoaded', function() {
      const cards = document.querySelectorAll('.team-card');
      
      cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
          this.classList.add('hovered');
        });
        
        card.addEventListener('mouseleave', function() {
          this.classList.remove('hovered');
        });
      });
    });


    // Função para abrir o formulário
    function abrirFormulario() {
      document.getElementById('formModal').style.display = 'block';
    }

    // Função para fechar o formulário
    function fecharFormulario() {
      document.getElementById('formModal').style.display = 'none';
    }

    // Função para redirecionar com base na seleção do time
    function redirecionar(event) {
      event.preventDefault(); // Evita o envio do formulário
      const timeSelecionado = document.getElementById('time').value;
      if (timeSelecionado) {
        window.location.href = timeSelecionado; // Redireciona para a URL do time selecionado
      }
    }

    // Fecha o modal se o usuário clicar fora dele
    window.onclick = function(event) {
      const modal = document.getElementById('formModal');
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }

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