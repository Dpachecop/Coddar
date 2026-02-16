document.addEventListener('DOMContentLoaded', () => {
    // Datos de prueba para los cursos
    const cursos = [
        {
            id: 1,
            titulo: 'Curso profesional de Flutter',
            descripcion: 'Aprender Flutter es una decisión valiosa para 2025. Domina la creación de apps nativas para iOS y Android con una sola base de código.',
            imagenUrl: 'https://tse3.mm.bing.net/th/id/OIP.hGnjnxryKnKZW9AJ_3ErvQHaFf?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3',
            link: '#'
        },
        {
            id: 2,
            titulo: 'Python para IA',
            descripcion: 'Domina el lenguaje líder en Inteligencia Artificial y Ciencia de Datos. Aprende desde lo básico hasta redes neuronales y machine learning.',
            imagenUrl: 'https://tse4.mm.bing.net/th/id/OIP.Qj-tPzH7Xq_pXqXqXqXqXgHaEK?rs=1&pid=ImgDetMain', // Imagen placeholder genérica de Python/Code
            link: '#'
        },
        {
            id: 3,
            titulo: 'Desarrollo Web Full Stack',
            descripcion: 'Conviértete en un desarrollador completo. Aprende HTML, CSS, JavaScript, React y Node.js para construir aplicaciones web modernas.',
            imagenUrl: 'https://tse1.mm.bing.net/th/id/OIP.T0y7T0y7T0y7T0y7T0y7DwHaEK?rs=1&pid=ImgDetMain', // Imagen placeholder genérica de Web Dev
            link: '#'
        }
    ];

    const contenedorCursos = document.getElementById('contenedor-cursos');

    function renderizarCursos() {
        // Limpiar contenedor por si acaso
        contenedorCursos.innerHTML = '';

        cursos.forEach(curso => {
            // Crear el elemento div para la tarjeta
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('course-card');

            // Insertar el contenido HTML
            tarjeta.innerHTML = `
                <img src="${curso.imagenUrl}" alt="${curso.titulo}" class="card-img">
                <div class="card-content">
                    <h3>${curso.titulo}</h3>
                    <p>${curso.descripcion}</p>
                </div>
                <a href="${curso.link}" class="btn-vamos">Vamos ▶</a>
            `;

            // Agregar la tarjeta al contenedor
            contenedorCursos.appendChild(tarjeta);
        });
    }

    // Inicializar renderizado
    renderizarCursos();
});
