// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active section in navbar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li a');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 50) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});
const poemDiv=document.getElementById('poem');
const poemLink=document.createElement('a');
poemLink.href='https://exceptionalpoet.blogspot.com/2024/09/blue-and-lavender.html';

poemLink.textContent="Visit My Poem Blog";
poemDiv.appendChild(poemLink);

const astroDiv=document.getElementById('astro');
const astroLink=document.createElement('a');
astroLink.href='https://www.instagram.com/cosmoslover610?igsh=MTBvNjVybnpsYTc3Yw==';

astroLink.textContent="My Astronomy Account";
astroDiv.appendChild(astroLink);

