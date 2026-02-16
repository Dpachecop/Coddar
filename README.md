# Coddar Academy Platform

Bienvenido al repositorio de **Coddar Academy**, una plataforma educativa web moderna diseñada para ofrecer cursos de programación y tecnología con una experiencia de usuario fluida y atractiva.

![Coddar Preview](https://tse1.mm.bing.net/th/id/OIP.Y9dT64Pbau04utHU8oBw7QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3)

## 🛠️ Tecnologías Utilizadas

Este proyecto ha sido construido utilizando tecnologías web estándar, sin dependencias de frameworks pesados, garantizando un alto rendimiento y facilidad de mantenimiento:

*   **HTML5 Semántico**: Estructura del documento optimizada para SEO y accesibilidad.
*   **CSS3 Moderno**:
    *   **Variables CSS (Custom Properties)**: Para un manejo consistente de temas (Claro/Oscuro) y colores.
    *   **CSS Grid y Flexbox**: Para layouts responsivos y alineación de elementos.
    *   **Glassmorphism**: Efectos visuales modernos en la barra de navegación.
    *   **Animaciones y Transiciones**: Para una experiencia interactiva suave.
*   **JavaScript (Vanilla ES6+)**:
    *   **DOM Manipulation**: Renderizado dinámico de cursos y detalles.
    *   **LocalStorage**: Persistencia de la preferencia de tema (Dark/Light mode).
    *   **Intersection Observer API**: Animaciones de aparición de elementos al hacer scroll.
    *   **URLSearchParams**: Manejo de rutas y parámetros para mostrar detalles de cursos específicos.

## 🚀 Cómo Funciona (Explicación Técnica)

El sitio funciona como una aplicación web multipágina con comportamiento dinámico:

1.  **Gestión de Datos (`data-driven`)**:
    *   Toda la información de los cursos (títulos, imágenes, videos, temarios) se encuentra centralizada en un objeto `cursosDB` dentro de `js/app.js`. Esto facilita la actualización de contenido sin tocar el HTML.

2.  **Sistema de Enrutamiento Simple**:
    *   El script detecta en qué página se encuentra el usuario verificando la existencia de contenedores específicos (`contenedor-cursos` para el inicio o `detalle-curso` para la página de curso).
    *   Al navegar a un curso, se utiliza un parámetro en la URL (ej. `curso.html?id=flutter`). JavaScript captura este ID y renderiza la información correspondiente.

3.  **Sistema de Temas (Dark Mode)**:
    *   Detecta automáticamente la preferencia del sistema operativo del usuario.
    *   Permite alternar manualmente entre modo claro y oscuro.
    *   Guarda la elección en `localStorage` para recordarla en futuras visitas.

## 📦 Cómo Correr el Proyecto

Al ser un proyecto estático (HTML/CSS/JS), no requiere procesos de compilación (build) ni instalación de dependencias npm complejas.

### Opción 1: Live Server (Recomendado)
Si utilizas Visual Studio Code:
1.  Instala la extensión **Live Server**.
2.  Haz clic derecho en `index.html`.
3.  Selecciona **"Open with Live Server"**.
Esto abrirá el proyecto en tu navegador predeterminado con recarga automática.

### Opción 2: Navegador Directo
Simplemente abre el archivo `index.html` haciendo doble clic sobre él desde tu explorador de archivos.
*Nota: Algunas características avanzadas del navegador pueden comportarse diferente si no se usa un servidor local, pero la funcionalidad principal debería estar intacta.*

## 📂 Estructura de Archivos

```
/
├── index.html        # Página de inicio (Landing Page)
├── curso.html        # Plantilla para detalle de cursos
├── css/
│   └── styles.css    # Estilos globales y temas
├── js/
│   └── app.js        # Lógica principal y base de datos de cursos
└── assets/           # Imágenes y recursos estáticos
```

---
Desarrollado con ❤️ para la educación tecnológica.
