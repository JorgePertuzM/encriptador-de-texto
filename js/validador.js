function validaTexto(accion) {
    procesaTexto(accion);
}

function procesaTexto(accion) {
    var textoEntrada = document.getElementById("txt-entrada").value.trim();
    if (!validarTexto(textoEntrada)) return;

    mostrarSalida();

    var textoProcesado;
    if (accion === 'encriptar') {
        textoProcesado = encriptar(textoEntrada);
    } else if (accion === 'desencriptar') {
        textoProcesado = desencriptar(textoEntrada);
    }

    var textareaSalida = document.querySelector(".txt-salida");
    textareaSalida.value = textoProcesado;
}

function validarTexto(texto) {
    if (texto === "") {
        // Mostrar una alerta si el textarea está vacío
        // Mostrar una alerta si el textarea está vacío
        alertWarning(
            "Campo vacío",
            "Ingresa el texto que desees encriptar o desencriptar..!"
        );
        return false;
    } else if (/[^a-zA-Z0-9 ]/.test(texto)) {
        // Verificar si el textarea contiene caracteres especiales
        alertWarning(
            "Caracteres especiales",
            "El texto contiene caracteres especiales no permitidos."
        );
        return false;
    } else if (/[A-Z]/.test(texto)) {
        // Verificar si el textarea contiene letras mayúsculas
        alertWarning(
            "Letras mayúsculas",
            "El texto contiene letras mayúsculas no permitidas."
        );
        return false;
    }
    return true;
}

function mostrarSalida() {
    // Ocultar los objetos: "la-imagen", "subtitulo" y "parrafo"
    document.querySelector(".la-imagen").style.display = "none";
    document.querySelector(".subtitulo").style.display = "none";
    document.querySelector(".parrafo").style.display = "none";

    // Mostrar el elemento con clase 'salida'
    var salidaElement = document.querySelector(".salida");
    salidaElement.style.display = "block";

    // Ajustar la altura y clase del textarea dentro de '.salida'
    var textareaSalida = document.querySelector(".txt-salida");
    var contenido = document.querySelector(".contenido");
    var sinResultado = document.querySelector(".sin-resultado");

    // Añadir clases condicionalmente para ajustar el tamaño en pantallas pequeñas
    if (window.innerWidth <= 600) {
        textareaSalida.style.height = "20vh"; 
        contenido.style.height = "auto";
        sinResultado.style.height = "auto";
    } else if (window.innerWidth <= 992) {
        textareaSalida.style.height = "30vh"; 
        contenido.style.height = "auto";
        salidaElement.style.height = "auto";
        sinResultado.style.height = "auto";
    } else {
        textareaSalida.style.height = "92%"; 
        salidaElement.style.height = "100%";
    }
}

/*
// Añadir clases condicionalmente para ajustar el tamaño en pantallas pequeñas
    if (window.innerWidth <= 600) {
        textareaSalida.style.height = "15vh"; // Ajusta la altura para pantallas pequeñas
        contenido.style.height = "83vh"; 
        sinResultado.style.height = "100%"; 
    } else if (window.innerWidth <= 992) {
        textareaSalida.style.height = "23vh"; // Ajusta la altura para tablets
        contenido.style.height = "120vh";
        salidaElement.style.height = "auto";
        sinResultado.style.height = "102%";
    } else {
        textareaSalida.style.height = "92%"; // Ajusta la altura para pantallas grandes
        salidaElement.style.height = "100%";
    }
        */


/*
function validaEncriptar() {
    // Obtener el valor del textarea
    var textoEntrada = document.getElementById("txt-entrada").value.trim();

    // Validar que "txt-entrada" del textarea, no este vacio.
    if (textoEntrada === "") {
        // Mostrar una alerta si el textarea está vacío
        alertWarning(
            "Campo vacío",
            "Ingresa el texto que desees encriptar o desencriptar..!"
        );
    } else if (/[^a-zA-Z0-9 ]/.test(textoEntrada)) {
        // Verificar si el textarea contiene caracteres especiales
        alertWarning(
            "Caracteres especiales",
            "El texto contiene caracteres especiales no permitidos."
        );
    } else if (/[A-Z]/.test(textoEntrada)) {
        // Verificar si el textarea contiene letras mayúsculas
        alertWarning(
            "Letras mayúsculas",
            "El texto contiene letras mayúsculas no permitidas."
        );
    } else {
        // Ocultar los objetos: "la-imagen", "subtitulo" y, "parrafo"
        document.querySelector(".la-imagen").style.display = "none";
        document.querySelector(".subtitulo").style.display = "none";
        document.querySelector(".parrafo").style.display = "none";

        // Mostrar el elemento con clase 'salida' y ajustar altura
        var salidaElement = document.querySelector(".salida");
        salidaElement.style.display = "block"; // Asegura que esté visible

        // Establecer altura del div '.salida' al 100% del viewport
        salidaElement.style.height = "100%"; // Ajusta la altura al 100% del viewport

        // Asignar altura específica de 350px al textarea dentro de '.salida'
        var textareaSalida = document.querySelector(".txt-salida");
        textareaSalida.style.height = "92%"; // Asigna una altura específica de 350px al textarea

        // Encriptar el texto
        var textoEncriptado = encriptar(textoEntrada);

        // Asignar el texto encriptado al textarea de salida
        var textareaSalida = document.querySelector(".txt-salida");
        textareaSalida.value = textoEncriptado;
    }
}


function validaDesencriptar() {
    // Obtener el valor del textarea
    var textoEntrada = document.getElementById("txt-entrada").value.trim();

    // Validar que "txt-entrada" del textarea, no este vacio.
    if (textoEntrada === "") {
        // Mostrar una alerta si el textarea está vacío
        alertWarning(
            "Campo vacío",
            "Ingresa el texto que desees encriptar o desencriptar..!"
        );
    } else if (/[^a-zA-Z0-9 ]/.test(textoEntrada)) {
        // Verificar si el textarea contiene caracteres especiales
        alertWarning(
            "Caracteres especiales",
            "El texto contiene caracteres especiales no permitidos."
        );
    } else if (/[A-Z]/.test(textoEntrada)) {
        // Verificar si el textarea contiene letras mayúsculas
        alertWarning(
            "Letras mayúsculas",
            "El texto contiene letras mayúsculas no permitidas."
        );
    } else {
        // Ocultar los objetos: "la-imagen", "subtitulo" y, "parrafo"
        document.querySelector(".la-imagen").style.display = "none";
        document.querySelector(".subtitulo").style.display = "none";
        document.querySelector(".parrafo").style.display = "none";

        // Mostrar el elemento con clase 'salida' y ajustar altura
        var salidaElement = document.querySelector(".salida");
        salidaElement.style.display = "block"; // Asegura que esté visible

        // Establecer altura del div '.salida' al 100% del viewport
        salidaElement.style.height = "100%"; // Ajusta la altura al 100% del viewport

        // Asignar altura específica de 350px al textarea dentro de '.salida'
        var textareaSalida = document.querySelector(".txt-salida");
        textareaSalida.style.height = "92%"; // Asigna una altura específica de 350px al textarea

        // Encriptar el texto
        var textoDesencriptado = desencriptar(textoEntrada);

        // Asignar el texto encriptado al textarea de salida
        var textareaSalida = document.querySelector(".txt-salida");
        textareaSalida.value = textoDesencriptado;
    }
}
*/