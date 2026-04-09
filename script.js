// Aspetta che tutto il contenuto della pagina sia caricato
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleziona tutti gli elementi con la classe 'reveal'
    const elementsToAnimate = document.querySelectorAll('.reveal');
    
    // Funzione per attivare l'animazione con un piccolo ritardo tra gli elementi
    elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('active');
        }, index * 300); // 300ms di ritardo tra un elemento e l'altro
    });

    console.log("Sistema pronto. Animazioni caricate correttamente.");
});
