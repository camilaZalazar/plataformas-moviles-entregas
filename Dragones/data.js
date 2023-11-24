const Url = 'https://camilazalazar.github.io/plataformas-moviles-entregas/Dragones/api.json';

fetch(Url)
  .then(response => response.json())
  .then(data => {
    const resultElement = document.getElementById('resultado'); 
    console.log(data)
    data.dragones.forEach(api => {
      const apiElement = document.createElement('div');
      apiElement.innerHTML = `
        <h2 class="f">${api.titulo}</h2>
        <div class="layout1">
        <p class="p">${api.parrafo}</p>
        <img src="${api.img}" alt="${api.titulo} height="500" width="500" imagen"></div>
        `;
        `
        <div class="layout2">
        <h2 class="f>${api.tit}<h2>
        <p class="p">${api.pap}</p>
        <img src="${api.imgag}" alt="${api.tit} height="500" width="500" imagen"></div>
        `;
      resultElement.appendChild(apiElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
