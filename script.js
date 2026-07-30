document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os links que começam com "#"
  const anchors = document.querySelectorAll('a[href^="#"]');

  anchors.forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute("href");
      
      // Evita erro caso o href seja apenas "#"
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Compensa o tamanho do header fixo (aprox 80px)
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});
