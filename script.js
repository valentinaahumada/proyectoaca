// Información de cada situación
const situaciones = {
    salud: {
        icono: "🏥",
        titulo: "Me siento mal",
        texto: "Si no te sientes bien, busca ayuda de un adulto responsable y evita quedarte solo/a.",
        pasos: [
            "Informa a tu profesor o a un adulto responsable.",
            "Explica qué síntomas o molestias tienes.",
            "Dirígete a enfermería acompañado/a si es necesario.",
            "Sigue las indicaciones del personal encargado."
        ],
        lugar: "Enfermería — Bloque B"
    },

    perdido: {
        icono: "🎒",
        titulo: "Perdí algo",
        texto: "Si has perdido un objeto, puedes seguir estos pasos para intentar recuperarlo.",
        pasos: [
            "Piensa dónde viste el objeto por última vez.",
            "Revisa el salón, patio o lugar donde estuviste.",
            "Pregunta al profesor o encargado del lugar.",
            "Si no aparece, informa en recepción o en el área de objetos perdidos."
        ],
        lugar: "Recepción / Objetos perdidos — Bloque A"
    },

    academico: {
        icono: "📚",
        titulo: "Tengo un problema académico",
        texto: "Si tienes dificultades con una materia, no tienes que resolverlo todo por tu cuenta.",
        pasos: [
            "Identifica la materia o actividad con la que tienes dificultad.",
            "Habla con el profesor de la asignatura.",
            "Pregunta qué puedes hacer para mejorar o solucionar el problema.",
            "Si necesitas más ayuda, acude a coordinación académica."
        ],
        lugar: "Coordinación académica — Bloque A"
    },

    orientacion: {
        icono: "🧑‍🏫",
        titulo: "Necesito orientación",
        texto: "Si necesitas hablar con alguien sobre una situación personal, escolar o de convivencia, busca orientación.",
        pasos: [
            "Busca un adulto de confianza dentro de la institución.",
            "Explica que necesitas orientación.",
            "Solicita apoyo del área de orientación.",
            "Habla con tranquilidad y explica lo que está sucediendo."
        ],
        lugar: "Orientación — Segundo piso"
    },

    emergencia: {
        icono: "🚨",
        titulo: "Es una emergencia",
        texto: "Si existe un peligro inmediato, busca ayuda de un adulto responsable o del personal de la institución inmediatamente.",
        pasos: [
            "Mantén la calma y aléjate del peligro si puedes hacerlo de forma segura.",
            "Avisa inmediatamente a un profesor, coordinador o adulto responsable.",
            "Sigue las instrucciones del personal de la institución.",
            "Utiliza los protocolos de emergencia establecidos por la institución."
        ],
        lugar: "Seguridad / Personal responsable — Entrada principal"
    },

    otra: {
        icono: "💬",
        titulo: "Es otra situación",
        texto: "Si tu situación no aparece en las opciones, puedes acudir a una persona responsable para recibir orientación.",
        pasos: [
            "Explica brevemente qué está sucediendo.",
            "Busca a un profesor o adulto responsable.",
            "Si es necesario, solicita orientación o coordinación.",
            "Sigue las indicaciones que te proporcionen."
        ],
        lugar: "Coordinación — Bloque A"
    }
};


// Mostrar la situación seleccionada
function mostrarSituacion(tipo) {

    const situacion = situaciones[tipo];

    // Verificar que la situación exista
    if (!situacion) {
        return;
    }

    // Cambiar icono
    document.getElementById("iconoResultado").textContent = situacion.icono;

    // Cambiar título
    document.getElementById("tituloResultado").textContent = situacion.titulo;

    // Cambiar descripción
    document.getElementById("textoResultado").textContent = situacion.texto;

    // Cambiar lugar
    document.getElementById("lugarResultado").textContent = situacion.lugar;

    // Mostrar los pasos
    const listaPasos = document.getElementById("pasosResultado");

    listaPasos.innerHTML = "";

    situacion.pasos.forEach(function(paso) {

        const li = document.createElement("li");

        li.textContent = paso;

        listaPasos.appendChild(li);

    });

    // Cambiar de pantalla
    document.getElementById("inicio").classList.remove("activa");
    document.getElementById("resultado").classList.add("activa");

    // Volver al inicio de la página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Volver a la pantalla principal
function volverInicio() {

    document.getElementById("resultado").classList.remove("activa");
    document.getElementById("inicio").classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}