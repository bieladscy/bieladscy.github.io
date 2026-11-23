// =====================================================
// PORTFÓLIO GABRIEL | JAVASCRIPT
// Coloque aqui os comportamentos e interações do site.
// =====================================================

// Atualiza automaticamente o ano do rodapé.
const yearElement = document.getElementById("currentYear");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Fecha o menu mobile depois que uma opção é selecionada.
const menuElement = document.getElementById("menuPrincipal");
const menuLinks = document.querySelectorAll(".navbar-nav .nav-link");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuElement && menuElement.classList.contains("show")) {
      const menu = bootstrap.Collapse.getOrCreateInstance(menuElement);
      menu.hide();
    }
  });
});


// INTERESSES: troca o fundo da seção e mostra as fotos conforme a opção selecionada.
const interestsSection = document.getElementById("interesses");
const interestButtons = document.querySelectorAll("[data-interest-theme]");
const interestFeedback = document.getElementById("interestFeedback");
const interestPhotos = document.getElementById("interestPhotos");

// Fotos e textos de cada interesse. Para trocar uma foto, mude o "src".
const interestData = {
  flamengo: {
    feedback: "Mengão! O fundo agora está dividido entre vermelho e preto.",
    photos: [
      { src: "img/flamengo.jpeg", alt: "Gabriel com a camisa do Flamengo no estádio" }
    ]
  },
  catolico: {
    feedback: "Minha fé católica em destaque: bandeira da Santa Sé.",
    photos: [
      { src: "img/catolico.jpeg", alt: "Gabriel servindo na missa" }
    ]
  },
  teatro: {
    feedback: "Teatro: a arte de dar vida a uma história no palco.",
    photos: [
      { src: "img/teatro.jpeg", alt: "Gabriel em uma apresentação de teatro" }
    ]
  },
  musica: {
    feedback: "Música: a energia de viver um show ao vivo.",
    photos: [
      { src: "img/show.jpeg", alt: "Gabriel em um show" }
    ]
  }
};

interestButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTheme = button.dataset.interestTheme;
    const data = interestData[selectedTheme];

    // Remove os temas anteriores e aplica o tema escolhido.
    interestsSection.classList.remove("theme-flamengo", "theme-catolico", "theme-teatro", "theme-musica");
    interestsSection.classList.add(`theme-${selectedTheme}`);

    // Atualiza o estado visual e acessível dos botões.
    interestButtons.forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });

    // Mostra a(s) foto(s) do interesse no meio da seção.
    if (interestPhotos && data) {
      interestPhotos.innerHTML = "";
      data.photos.forEach((photo) => {
        const figure = document.createElement("figure");
        figure.className = "interest-photo";

        const img = document.createElement("img");
        img.src = photo.src;
        img.alt = photo.alt;
        figure.appendChild(img);

        if (photo.caption) {
          const caption = document.createElement("figcaption");
          caption.innerHTML = `<i class="fa-solid ${photo.icon}"></i> ${photo.caption}`;
          figure.appendChild(caption);
        }

        interestPhotos.appendChild(figure);
      });
      interestPhotos.hidden = false;
    }

    if (interestFeedback && data) {
      interestFeedback.textContent = data.feedback;
    }
  });
});
