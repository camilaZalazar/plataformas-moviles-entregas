const Url = 'https://camilazalazar.github.io/plataformas-moviles-entregas/Dragones/api.json';

fetch(Url)
  .then(response => response.json())
  .then(data => {
    const resultElement = document.getElementById('resultado');

    data.forEach(dragones => {
      const apiElement = document.createElement('div');
      apiElement.className = 'layout1';

      apiElement.innerHTML = `
        <div class="foto1">
          <img src="${dragones.img}" alt="${dragones.titulo} imagen">
          <figcaption>${dragones.fig}</figcaption>
        </div>
        <div>
          <h2>${dragones.titulo}</h2>
          <p class="parrafo-lila">${dragones.parrafo}</p>
        </div>
      `;

      resultElement.appendChild(apiElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
