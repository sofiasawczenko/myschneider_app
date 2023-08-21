// Adicione funcionalidade para mudar a cor do botão quando é clicado
document.getElementById('botao-muda-cor').addEventListener('click', function() {
    var botao = document.getElementById('botao-muda-cor');
    var cores = ['#007bff', '#33cc33']; // Lista de cores que o botão irá alternar

    // Obtenha a cor atual do botão
    var corAtual = botao.style.backgroundColor;

    // Encontre o índice da cor atual no array de cores
    var indiceCorAtual = cores.indexOf(corAtual);

    // Determine a próxima cor com base no índice
    var proximaCor = cores[(indiceCorAtual + 1) % cores.length];

    // Atualize a cor de fundo do botão
    botao.style.backgroundColor = proximaCor;
});