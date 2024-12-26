document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('[data-lang]');
    
    const translations = {
        en: {
            greeting: "Hello, I am Alejandro Sánchez",
            interest: "A Machine Learning Scientist with interest",
            musician: "Sometimes also a musician 🎻"
        },
        es: {
            greeting: "Hola, soy Alejandro Sánchez",
            interest: "Un científico de Machine Learning con interés",
            musician: "A veces también músico 🎻"
        },
        jp: {
            greeting: "こんにちは、私はアレハンドロ・サンチェスです",
            interest: "興味のある機械学習科学者",
            musician: "時々音楽家でもあります 🎻"
        }
    };

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            document.querySelector('h1').textContent = translations[lang].greeting;
            document.querySelector('p:nth-of-type(2)').textContent = translations[lang].interest;
            document.querySelector('p:nth-of-type(3)').textContent = translations[lang].musician;
        });
    });
});
