// Selecciona todos los enlaces que tengan un atributo href que comience con #
const links = document.querySelectorAll('a[href^="#"]');

// Agrega un evento de clic a cada enlace
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Evita que el enlace se comporte de manera normal
    e.preventDefault();

    // Obtiene el ID del elemento al que se debe desplazar
    const id = link.getAttribute('href');

    // Selecciona el elemento al que se debe desplazar
    const element = document.querySelector(id);

    // Desplaza suavemente hasta el elemento
    element.scrollIntoView({ behavior: 'smooth' });
  });
});