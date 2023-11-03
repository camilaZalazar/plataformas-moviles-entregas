const Url = 'https://camilazalazar.github.io/plataformas-moviles-entregas/Dragones/API.json';

fetch(Url)
  .then(response => response.json())
  .then(data => {
    const resultElement = document.getElementById('resultado');

    data.forEach(api => {
      const apiElement = document.createElement('div');
      apiElement.innerHTML = `
        <h2>${api.titulo}</h2>
        <p>${api.parrafo}</p>
        <img src="${api.img}" alt="${api.titulo} imagen">
      `;
      resultElement.appendChild(apiElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
