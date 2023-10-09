const myCarousel = document.getElementById("myCarousel");
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 4000,
});

const publications = [
  {
    foto: "https://source.unsplash.com/random/50x60/?man",
    nomeCompleto: "João Oliveira",
    cargo: "Analista de Sustentabilidade",
    postagem:
      "Orgulhosos em compartilhar que implementamos programas de reciclagem em todos os escritórios, reduzindo nosso desperdício de papel em 50%! Juntos, fazemos a diferença. ♻️🌍 #Sustentabilidade #Reciclagem",
  },
  {
    foto: "https://source.unsplash.com/random/50x60/?woman",
    nomeCompleto: "Laura Santos",
    cargo: "Coordenadora de Meio Ambiente",
    imagemPostagem: "https://source.unsplash.com/random/300%C3%97300/?ocean",
    postagem:
      "Hoje é o Dia Mundial dos Oceanos! Vamos lembrar a importância dos oceanos para a vida na Terra e nos comprometer a reduzir o plástico de uso único. 💙🌊 #DiaMundialDosOceanos #PlasticoZero",
  },
  {
    foto: "https://source.unsplash.com/random/50x59/?man",
    nomeCompleto: "Rafael Almeida",
    cargo: "Engenheiro Ambiental",
    postagem:
      "Estamos entusiasmados em anunciar que nosso projeto de reflorestamento atingiu a marca de 10.000 árvores plantadas! Cuidar do planeta é uma responsabilidade de todos. 🌳🌎 #Reflorestamento #MeioAmbiente",
  },
  {
    foto: "https://source.unsplash.com/random/50x58/?woman",
    nomeCompleto: "Ana Ferreira",
    cargo: "Especialista em Energias Renováveis",
    imagemPostagem: "https://source.unsplash.com/random/300%C3%97300/?sun",
    postagem:
      "O sol é uma fonte inesgotável de energia limpa e renovável. Nosso parque solar acaba de começar a operar, fornecendo eletricidade sustentável para a comunidade local. ☀️🔌 #EnergiaSolar #Renovavel",
  },
  {
    foto: "https://source.unsplash.com/random/50x58/?man",
    nomeCompleto: "Pedro Carvalho",
    cargo: "Gerente de Responsabilidade Social",
    postagem:
      "Hoje é o Dia Mundial do Voluntariado! Agradecemos a todos os nossos voluntários que contribuem para tornar nossas comunidades mais fortes e resilientes. 💪❤️ #Voluntariado #ResponsabilidadeSocial",
  },
  {
    foto: "https://source.unsplash.com/random/50x57/?woman",
    nomeCompleto: "Mariana Gomes",
    cargo: "Analista de Impacto Ambiental",
    postagem:
      "Concluímos com sucesso nossa avaliação de impacto ambiental para o novo projeto de conservação marinha. Trabalhar em prol da biodiversidade é uma missão inspiradora. 🐠🌿 #ConservacaoMarinha #Biodiversidade",
  },
  {
    foto: "https://source.unsplash.com/random/50x57/?man",
    nomeCompleto: "Gustavo Pereira",
    cargo: "Engenheiro de Eficiência Energética",
    postagem:
      "Reduzir nosso consumo de energia não apenas economiza dinheiro, mas também ajuda a preservar os recursos naturais. Nosso novo sistema de iluminação LED já está reduzindo nosso consumo em 30%! 💡💰 #EficienciaEnergetica #Economia",
  },
  {
    foto: "https://source.unsplash.com/random/50x56/?woman",
    nomeCompleto: "Isabela Rodrigues",
    cargo: "Analista de Sustentabilidade",
    postagem:
      "Estamos felizes em compartilhar que alcançamos a certificação de empresa neutra em carbono! Continuaremos a implementar práticas sustentáveis para um futuro melhor. 🌿🌎 #NeutralidadeCarbono #Sustentavel",
  },
  {
    foto: "https://source.unsplash.com/random/50x56/?man",
    nomeCompleto: "Lucas Oliveira",
    cargo: "Especialista em Educação Ambiental",
    postagem:
      "Educação é a chave para a mudança! Nossa oficina sobre reciclagem e conservação ambiental envolveu mais de 500 alunos locais. Juntos, estamos formando cidadãos conscientes. 📚🌱 #EducacaoAmbiental #Consciencia",
  },
  {
    foto: "https://source.unsplash.com/random/50x55/?man",
    nomeCompleto: "Camila Silva",
    cargo: "Coordenadora de Sustentabilidade",
    postagem:
      "Celebramos um marco importante: alcançamos zero resíduos em nosso escritório central. A jornada rumo à sustentabilidade é constante e repleta de conquistas. ♻️🌍 #ZeroResiduos #Compromisso",
  },
];

const DOM = {
  publishContainer: document.querySelector("#publish-container"),
  ownerPublishContainer: document.querySelector("#new-publish"),
  addPublish(perfil) {
    const publish = document.createElement("div");
    publish.innerHTML = DOM.innerHTMLPublish(perfil);

    DOM.publishContainer.appendChild(publish);
  },
  innerHTMLPublish(perfil) {
    const html = `
    <div class="bg-white p-4 border">
    <div class="d-flex flex-column gap-2">
      <div class="d-flex justify-content-between">
        <span class="d-flex align-items-center gap-4">
          <img src=${
            perfil.foto
          } style="border-radius:999px" alt="foto de perfil" />
          <span class="d-flex flex-column">
            <p style="margin-bottom: -0.1rem;">${perfil.nomeCompleto}</p>
            <small class="text-secondary">${perfil.cargo}</small>
          </span>
        </span>

        <p class="text-primary text-end fs-6">
          <img
          src="img/check-arrow.svg"
          alt="seta de seguindo perfil"
          />
          Seguindo
        </p>
      </div>

      <div>
        <p>
          ${perfil.postagem}
        </p>
        ${
          perfil.imagemPostagem
            ? `<img
          src=${perfil.imagemPostagem}
          class="img-fluid"
          alt="random image"
        />`
            : ""
        }
      </div>

      <hr class="divider">
      <div class="ms-2 d-flex gap-5">
        <div class="icons me-1"
        role="button"
        onclick="alert('WIP: WORK IN PROGRESS')">
          <img class="img-fluid" src="img/like-icon.svg" alt="curtir postagem">
          <small>Gostei</small>
        </div>
        <div class="icons me-2"
        role="button"
        onclick="alert('WIP: WORK IN PROGRESS')">
          <img class="img-fluid" src="img/comment-icon.svg" alt="comentar na postagem">
          <small>Comentar</small>
        </div>
        <div class="icons mx-2"
        role="button"
        onclick="alert('WIP: WORK IN PROGRESS')">
          <img class="img-fluid" src="img/share-icon.svg" alt="compartilhar postagem">
          <small>Compartilhar</small>
        </div>
      </div>
    </div>
  </div>
        `;

    return html;
  },

  addOwnerPublish(ownerPublish) {
    const publish = document.createElement("div");
    publish.innerHTML = DOM.innerHTMLOwnerPublish(ownerPublish);

    DOM.ownerPublishContainer.insertBefore(
      publish,
      DOM.ownerPublishContainer.firstChild
    );
  },
  innerHTMLOwnerPublish(publish) {
    const html = `
    <div class="bg-white p-4 border">
    <div class="d-flex flex-column gap-3">
      <div class="d-flex justify-content-between">
        <span class="d-flex align-items-center gap-4">
          <img src='img/joana-photo.svg' style="border-radius:999px" alt="foto de perfil" />
          <span class="d-flex flex-column">
            <p style="margin-bottom: -0.1rem;">Joana Ramos</p>
            <small class="text-secondary">Estagiária de Recursos Humanos</small>
          </span>
        </span>

        
      </div>

      <div>
        <p>
          ${publish}
        </p>
      </div>

    </div>
  </div>
        `;

    return html;
  },
};

publications.forEach((perfil) => {
  DOM.addPublish(perfil);
});

const ownerPublishTextArea = document.querySelector("#owner-publish");
const points = document.querySelector('#pontos-adquiridos')

points.innerHTML = '5025xp'

let initialPoints = 5025

const toast = new bootstrap.Toast(document.querySelector('.toast'))

function addOwnerPublish() {
  if (ownerPublishTextArea.value.trim() === "") {
    ownerPublishTextArea.classList.add("is-invalid");
    return;
  }

  initialPoints += 50;
  points.innerHTML = initialPoints + 'xp'

  toast.show()
  ownerPublishTextArea.classList.remove("is-invalid");
  DOM.addOwnerPublish(ownerPublishTextArea.value);
  ownerPublishTextArea.value = "";
}

$(document).ready(function() {
  $('.navbar-toggler').click(function() {
    $('#navbarSuperior').toggle(); // Alterna a visibilidade da navbar superior
  });
});

$(document).ready(function() {
  // Ao carregar a página
  $('.navbar-web').show();  // Mostra a navbar da versão web
  $('.navbar-mobile').hide();  // Esconde a navbar da versão móvel

  // Quando o botão de alternância é clicado
$('.navbar-toggler').click(function() {
  $('.navbar-web').toggle();  // Alterna a visibilidade da navbar da versão web
  $('.navbar-mobile').toggle();  // Alterna a visibilidade da navbar da versão móvel
  });
});
