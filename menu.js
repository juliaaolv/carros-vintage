 const btn = document.getElementById('menuToggle');
    const esquerda = document.getElementById('menuEsquerda');
    const direita = document.getElementById('menuDireita');

    btn.addEventListener('click', () => {
      esquerda.classList.toggle('aberto');
      direita.classList.toggle('aberto');
    });