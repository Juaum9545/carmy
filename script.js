// Em seu arquivo script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DO MENU HAMBÚRGUER (já existente) ---
    const menuHamburger = document.querySelector('.menu-hamburger');
    const navegacao = document.querySelector('.navegacao');

    if (menuHamburger && navegacao) {
        menuHamburger.addEventListener('click', () => {
            navegacao.classList.toggle('ativo');
        });
    }

    // --- NOVA LÓGICA PARA O BOTÃO SELECIONADO ---

    // 1. Seleciona todos os botões dentro da navegação principal
    // (excluindo o botão de suporte do menu mobile para não ter o destaque)
    const botoesNavegacao = document.querySelectorAll('.navegacao button:not(.btn-suporte-mobile)');

    // 2. Define o primeiro botão ("ALUGAR") como selecionado por padrão ao carregar a página
    if (botoesNavegacao.length > 0) {
        botoesNavegacao[0].classList.add('selecionado');
    }

    // 3. Adiciona um "ouvinte de clique" para cada botão
    botoesNavegacao.forEach(botao => {
        botao.addEventListener('click', () => {
            // Primeiro, remove a classe 'selecionado' de TODOS os botões
            botoesNavegacao.forEach(btn => {
                btn.classList.remove('selecionado');
            });

            // Depois, adiciona a classe 'selecionado' APENAS no botão que foi clicado
            botao.classList.add('selecionado');
        });
    });
});