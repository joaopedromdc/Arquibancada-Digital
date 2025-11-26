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

    function abrirFormulario() {
      document.getElementById('formModal').style.display = 'block';
    }

    function fecharFormulario() {
      document.getElementById('formModal').style.display = 'none';
    }

    function redirecionar(event) {
      event.preventDefault(); 
      const timeSelecionado = document.getElementById('time').value;
      if (timeSelecionado) {
        window.location.href = timeSelecionado;
      }
    }

    window.onclick = function(event) {
      const modal = document.getElementById('formModal');
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }

function abrirFormulario() {
  document.getElementById("formModal").style.display = "block";
}

function fecharFormulario() {
  document.getElementById("formModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("formModal");
  if (event.target === modal) {
    fecharFormulario();
  }
};

window.onload = function() {
  if (localStorage.getItem("usuario")) {
    document.getElementById("btnLoginNav").style.display = "none";
    document.getElementById("btnLogoutNav").style.display = "inline-block";
  }
};

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

  document.getElementById("btnLoginNav").style.display = "none";
  document.getElementById("btnLogoutNav").style.display = "inline-block";
}

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

    document.getElementById("btnLoginNav").style.display = "none";
    document.getElementById("btnLogoutNav").style.display = "inline-block";

  } else {
    alert("Usuário ou senha incorretos!");
  }
}

function fazerLogout() {

  localStorage.removeItem("usuario");
  localStorage.removeItem("senha");

  alert("Você saiu da conta!");

  document.getElementById("btnLoginNav").style.display = "inline-block";
  document.getElementById("btnLogoutNav").style.display = "none";
}