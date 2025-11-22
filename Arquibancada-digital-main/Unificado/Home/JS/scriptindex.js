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

