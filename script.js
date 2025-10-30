//Smooth scroll per i link di navigazione
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        //Rimuovi classe active da tutti i link
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
        
        //Aggiungi classe active al link cliccato
        this.classList.add('active');
        
        //Scroll smooth alla sezione
        if (targetId !== '#home') {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

//Evidenzia il link attivo durante lo scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    //Se siamo in cima, attiva Home
    if (window.scrollY < 100) {
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#home') {
                link.classList.add('active');
            }
        });
    }
});
