(function() {
    // Função para gerar URL temporária para o áudio
    function gerarLinkTemporario() {
      const url = "/beats/afrozin.mp3"; // URL do seu áudio
      const tempoDeExpiracao = 300000; // 5 minutos em milissegundos
      
      // Cria um link temporário que expira após 5 minutos
      setTimeout(function() {
        console.log("A URL temporária expirou.");
        
        // Aqui você pode remover o áudio ou tornar o link inacessível
        alert("O link do áudio expirou. Por favor, tente novamente.");
        const audioElement = document.querySelector("audio");
        audioElement.pause(); // Pausa o áudio se estiver tocando
        audioElement.src = ""; // Limpa a URL do áudio
        audioElement.load(); // Recarrega o elemento para que não seja possível tocar novamente
      }, tempoDeExpiracao);
      
      return url;
    }
  
    // Desabilitar o clique direito
    document.addEventListener("contextmenu", function(e) {
      e.preventDefault(); // Impede o menu de contexto
    });
  
    // Desabilitar teclas de atalho (F12, Ctrl+Shift+I)
    document.addEventListener("keydown", function(e) {
      if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault(); // Impede o atalho de abrir o DevTools
        alert("Ferramentas de desenvolvedor estão desabilitadas.");
      }
    });
  
    // Detectar ferramentas de desenvolvedor e fechar a aba
    let devtoolsOpen = false;
    const threshold = 160; // Mudança de tamanho da janela que geralmente ocorre quando o DevTools é aberto
  
    setInterval(function() {
      const width = window.outerWidth - window.innerWidth > threshold;
      const height = window.outerHeight - window.innerHeight > threshold;
  
      if (width || height) {
        devtoolsOpen = true;
      }
  
      if (devtoolsOpen) {
        alert("Ferramentas de desenvolvedor detectadas! A aba será fechada.");
        window.close(); // Tenta fechar a aba
      }
    }, 1000);
  
    // Chamar a função ao carregar a página
    window.addEventListener("load", function() {
      const audioElement = document.querySelector("audio");
      const urlTemporario = gerarLinkTemporario();
      
      // Defina o link temporário no elemento de áudio
      audioElement.querySelector("source").setAttribute("src", urlTemporario);
    });
  })();
  