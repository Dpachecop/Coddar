document.addEventListener('DOMContentLoaded', () => {
    // --- DATOS GLOBALES (Actualizados) ---
    const cursosDB = [
        {
            id: "flutter",
            titulo: "Curso Profesional de Flutter y Dart",
            imagenCard: "https://tse3.mm.bing.net/th/id/OIP.hGnjnxryKnKZW9AJ_3ErvQHaFf?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
            videoPrincipal: "https://www.youtube.com/embed/-pWSQYpkkjk",
            nivel: "Intermedio - Avanzado",
            descripcionCorta: "Domina la creación de apps nativas para iOS y Android con una sola base de código.",
            contenidoBlog: `
                <h3>¿Por qué elegir Flutter en este año?</h3>
                <p>El desarrollo móvil ha evolucionado. Ya no necesitas mantener dos bases de código separadas. En este curso, no solo aprenderás a pintar interfaces hermosas con el catálogo de Widgets de Flutter, sino que profundizaremos en la creación de aplicaciones robustas.</p>
                <p>Exploraremos conceptos avanzados del ecosistema de Dart, manejo de estado eficiente y cómo estructurar tus proyectos utilizando <strong>Clean Architecture</strong> para separar la lógica de negocio, la capa de datos y la interfaz de usuario. Al finalizar, serás capaz de construir apps complejas (como plataformas financieras o gestores logísticos) en tiempo récord.</p>
            `,
            temario: [
                "1. Introducción a Dart y Programación Orientada a Objetos",
                "2. El árbol de Widgets y Layouts responsivos",
                "3. Manejo de Estado y Rutas",
                "4. Implementación de Clean Architecture"
            ]
        },
        {
            id: "python",
            titulo: "Fundamentos de Python: De Cero a Backend",
            imagenCard: "https://images.seeklogo.com/logo-png/33/1/python-logo-png_seeklogo-332789.png",
            videoPrincipal: "https://www.youtube.com/embed/Kp4Mvapo5kc",
            nivel: "Principiante",
            descripcionCorta: "Aprende el lenguaje más versátil del mundo, ideal para lógica de programación, IA y desarrollo de videojuegos.",
            contenidoBlog: `
                <h3>El poder de la sintaxis limpia</h3>
                <p>Python es el rey de la legibilidad. Si estás empezando en la programación, este es tu punto de partida ideal. Su curva de aprendizaje suave te permite enfocarte en resolver problemas lógicos sin pelear con puntos y comas.</p>
                <p>Durante este trayecto, pasaremos desde variables y estructuras de control, hasta la creación de scripts funcionales. Incluso veremos cómo aplicar Python en la creación de mecánicas interactivas y lógica de videojuegos utilizando librerías nativas. Entenderás la programación orientada a objetos desde una perspectiva práctica y directa.</p>
            `,
            temario: [
                "1. Variables, Tipos de Datos y Operadores",
                "2. Estructuras de Control (If, For, While)",
                "3. Funciones y Modularidad",
                "4. POO y Creación de Clases"
            ]
        },
        {
            id: "desarrollo-web",
            titulo: "Master en Desarrollo Web Completo",
            imagenCard: "https://www.comunicare.es/wp-content/uploads/2021/11/desarrollo-web-3.jpg",
            videoPrincipal: "https://www.youtube.com/embed/ELSm-G201Ls",
            nivel: "Todos los niveles",
            descripcionCorta: "Construye la web del futuro. Domina HTML semántico, CSS moderno y la interactividad de JavaScript.",
            contenidoBlog: `
                <h3>El lienzo digital a tu disposición</h3>
                <p>Cada aplicación exitosa, sistema de gestión o plataforma educativa (¡como esta!) comienza con una sólida comprensión de las tecnologías web fundamentales. No dependas ciegamente de frameworks mágicos sin entender qué ocurre por debajo.</p>
                <p>Aprenderás a estructurar información con accesibilidad en mente, a crear layouts complejos utilizando CSS Grid y Flexbox sin recurrir a "hacks" antiguos, y a inyectar vida a tus interfaces controlando el DOM con Vanilla JavaScript. Construiremos interfaces fluidas, rápidas y que se adapten perfectamente a cualquier dispositivo.</p>
            `,
            temario: [
                "1. HTML5 Semántico y Accesibilidad",
                "2. Arquitectura CSS: Flexbox y Grid",
                "3. JavaScript: El DOM y Eventos",
                "4. APIs y Asincronía (Fetch & Promises)"
            ]
        }
    ];

    // --- ELEMENTOS DEL DOM ---
    const contenedorCursos = document.getElementById('contenedor-cursos');
    const contenedorDetalle = document.getElementById('detalle-curso');
    const themeToggleBtn = document.getElementById('theme-toggle');

    // --- ENRUTAMIENTO SIMPLE ---
    // Detectamos en qué página estamos por los contenedores
    if (contenedorCursos) {
        renderizarInicio();
    }

    if (contenedorDetalle) {
        renderizarCurso();
    }

    // Inicializar tema en todas las páginas
    inicializarTema();

    // Inicializar Carrusel si existe
    iniciarCarrusel();

    // --- FUNCIONES ---

    function renderizarInicio() {
        contenedorCursos.innerHTML = '';
        cursosDB.forEach((curso) => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('course-card', 'hidden-card');

            const linkDetalle = `curso.html?id=${curso.id}`;

            tarjeta.innerHTML = `
                <img src="${curso.imagenCard}" alt="${curso.titulo}" class="card-img">
                <div class="card-content">
                    <h3>${curso.titulo}</h3>
                    <p>${curso.descripcionCorta}</p>
                </div>
                <a href="${linkDetalle}" class="btn-vamos">Comenzar ▶</a>
            `;
            contenedorCursos.appendChild(tarjeta);
        });

        iniciarAnimacionesScroll();
    }

    function renderizarCurso() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');

        if (!id) {
            contenedorDetalle.innerHTML = '<h2 style="text-align:center;">Error: No se especificó ningún curso.</h2><div style="text-align:center;"><a href="index.html" class="btn-vamos">Volver al inicio</a></div>';
            return;
        }

        const curso = cursosDB.find(c => c.id === id);

        if (curso) {
            // Generar lista de temario
            const listaTemario = curso.temario.map(item => `<li>${item}</li>`).join('');

            // Inyectamos la estructura Grid Layout solicitada
            contenedorDetalle.innerHTML = `
                <div class="course-container">
                    <!-- Columna Izquierda: Contenido Principal -->
                    <div class="course-main-content">
                        <span class="badge-level">${curso.nivel}</span>
                        <h1 class="course-title title-dark-mode">${curso.titulo}</h1>
                        
                        <div class="video-container">
                            <iframe src="${curso.videoPrincipal}" title="${curso.titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>

                        <div class="blog-content">
                            ${curso.contenidoBlog}
                        </div>
                    </div>
                    
                    <!-- Columna Derecha: Sidebar Sticky -->
                    <aside class="course-sidebar">
                        <div class="sticky-wrapper">
                            <h3>Contenido del Curso</h3>
                            <ul class="syllabus-list">
                                ${listaTemario}
                            </ul>
                            <a href="index.html" class="btn-back" style="margin-top: 20px; display: block; text-align: center;">← Volver al inicio</a>
                        </div>
                    </aside>
                </div>
            `;
        } else {
            contenedorDetalle.innerHTML = '<h2 style="text-align:center;">Error: Curso no encontrado.</h2><div style="text-align:center;"><a href="index.html" class="btn-vamos">Volver al inicio</a></div>';
        }
    }

    function iniciarAnimacionesScroll() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible-card');
                    entry.target.classList.remove('hidden-card');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const tarjetas = document.querySelectorAll('.course-card');
        tarjetas.forEach(tarjeta => observer.observe(tarjeta));
    }

    function inicializarTema() {
        const storedTheme = localStorage.getItem('theme');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

        if (storedTheme === 'dark' || (!storedTheme && prefersDarkScheme.matches)) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.innerText = '☀️';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            themeToggleBtn.innerText = '🌙';
        }

        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            let targetTheme = 'light';

            if (currentTheme === 'light') {
                targetTheme = 'dark';
                themeToggleBtn.innerText = '☀️';
            } else {
                themeToggleBtn.innerText = '🌙';
            }

            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
        });
    }

    function iniciarCarrusel() {
        const track = document.querySelector('.carousel-track');
        // Si no hay carrusel en esta página, salimos
        if (!track) return;

        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.carousel-btn.next');
        const prevButton = document.querySelector('.carousel-btn.prev');
        const dotsNav = document.querySelector('.carousel-nav');
        const dots = Array.from(dotsNav.children);

        // Ancho de slide
        // Usamos getBoundingClientRect para precisión
        const slideWidth = slides[0].getBoundingClientRect().width;

        // Acomodar slides uno al lado del otro
        // Aunque con flexbox ya están alineados, esto no es estrictamente necesario 
        // si usamos translateX con porcentaje, pero el usuario pidió translateX(-X%)
        // así que vamos a mover el track basado en índices.

        const moveToSlide = (track, currentSlide, targetSlide) => {
            const targetIndex = slides.findIndex(slide => slide === targetSlide);
            // Mover el track
            track.style.transform = 'translateX(-' + (targetIndex * 100) + '%)';

            // Actualizar clase current
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        };

        const updateDots = (currentDot, targetDot) => {
            currentDot.classList.remove('current-indicator');
            targetDot.classList.add('current-indicator');
        };

        // Click next
        nextButton.addEventListener('click', () => {
            const currentSlide = track.querySelector('.current-slide');
            let nextSlide = currentSlide.nextElementSibling;
            const currentDot = dotsNav.querySelector('.current-indicator');
            let nextDot = currentDot.nextElementSibling;

            // Loop infinito
            if (!nextSlide) {
                nextSlide = slides[0];
                nextDot = dots[0];
            }

            moveToSlide(track, currentSlide, nextSlide);
            updateDots(currentDot, nextDot);
            resetAutoplay();
        });

        // Click prev
        prevButton.addEventListener('click', () => {
            const currentSlide = track.querySelector('.current-slide');
            let prevSlide = currentSlide.previousElementSibling;
            const currentDot = dotsNav.querySelector('.current-indicator');
            let prevDot = currentDot.previousElementSibling;

            // Loop infinito
            if (!prevSlide) {
                prevSlide = slides[slides.length - 1];
                prevDot = dots[dots.length - 1];
            }

            moveToSlide(track, currentSlide, prevSlide);
            updateDots(currentDot, prevDot);
            resetAutoplay();
        });

        // Click dots
        dotsNav.addEventListener('click', e => {
            const targetDot = e.target.closest('button');
            if (!targetDot) return;

            const currentSlide = track.querySelector('.current-slide');
            const currentDot = dotsNav.querySelector('.current-indicator');
            const targetIndex = dots.findIndex(dot => dot === targetDot);
            const targetSlide = slides[targetIndex];

            moveToSlide(track, currentSlide, targetSlide);
            updateDots(currentDot, targetDot);
            resetAutoplay();
        });

        // Autoplay
        let autoplayInterval = setInterval(autoPlayNext, 4000);

        function autoPlayNext() {
            // Simular click en next
            const currentSlide = track.querySelector('.current-slide');
            let nextSlide = currentSlide.nextElementSibling;
            const currentDot = dotsNav.querySelector('.current-indicator');
            let nextDot = currentDot.nextElementSibling;

            if (!nextSlide) {
                nextSlide = slides[0];
                nextDot = dots[0];
            }

            moveToSlide(track, currentSlide, nextSlide);
            updateDots(currentDot, nextDot);
        }

        function resetAutoplay() {
            clearInterval(autoplayInterval);
            autoplayInterval = setInterval(autoPlayNext, 4000);
        }
    }
});
