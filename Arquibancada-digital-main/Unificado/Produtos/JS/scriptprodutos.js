function scrollEsquerda1() {
    const wrapper = document.querySelector("#carrossel1 .produtos-wrapper");
    wrapper.scrollLeft -= 376;
    
}

function scrollDireita1() {
    const wrapper = document.querySelector("#carrossel1 .produtos-wrapper");
    wrapper.scrollLeft += 376;
    
}

function scrollEsquerda2() {
    const wrapper = document.querySelector("#carrossel2 .produtos-wrapper");
    wrapper.scrollLeft -= 376;
    
}

function scrollDireita2() {
    const wrapper = document.querySelector("#carrossel2 .produtos-wrapper");
    wrapper.scrollLeft += 376;
    
}

function scrollEsquerda3() {
    const wrapper = document.querySelector("#carrossel3 .produtos-wrapper");
    wrapper.scrollLeft -= 376;
    
}

function scrollDireita3() {
    const wrapper = document.querySelector("#carrossel3 .produtos-wrapper");
    wrapper.scrollLeft += 376;
    
}

function scrollEsquerda4() {
    const wrapper = document.querySelector("#carrossel4 .produtos-wrapper");
    wrapper.scrollLeft -= 376;
    
}

function scrollDireita4() {
    const wrapper = document.querySelector("#carrossel4 .produtos-wrapper");
    wrapper.scrollLeft += 376;
    
}

function filtrarProdutosPorCheckbox(carrosselId) {
  const carrossel = document.getElementById(carrosselId);
  const produtos = carrossel.querySelectorAll('.produto-detalhes');

  const checkboxes = document.querySelectorAll('input[name="time"]:checked');
  const timesSelecionados = Array.from(checkboxes).map(cb => cb.value);

  produtos.forEach(produto => {
    if(timesSelecionados.length === 0) {
      produto.style.display = 'block';
    } else {
      produto.style.display = timesSelecionados.includes(produto.dataset.time) ? 'block' : 'none';
    }
  });
}

const checkboxes = document.querySelectorAll('input[name="time"]');
checkboxes.forEach(cb => {
  cb.addEventListener('change', () => filtrarProdutosPorCheckbox('carrossel1'));
  cb.addEventListener('change', () => filtrarProdutosPorCheckbox('carrossel2'));
  cb.addEventListener('change', () => filtrarProdutosPorCheckbox('carrossel3'));
  cb.addEventListener('change', () => filtrarProdutosPorCheckbox('carrossel4'));
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