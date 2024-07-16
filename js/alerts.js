// Función para alertas de advertencia
function alertWarning(title, text){
    Swal.fire({
        icon: 'warning',
        title: title,
        text: text,
        confirmButtonText: 'Aceptar'
    });
}

// Función para alertas de información
function alertInfo(title, text) {
    Swal.fire({
        icon: 'info',
        title: title,
        text: text,
        confirmButtonText: 'Aceptar'
    });
}

//Función para alertas de erro
function alertError(title, text) {
    Swal.fire({
        icon: 'error',
        title: title,
        text: text,
        confirmButtonText: 'Aceptar'
    });
}

// Función para alertas de éxito
function alertSuccess(title, text) {
    Swal.fire({
        icon: 'success',
        title: title,
        text: text,
        confirmButtonText: 'Aceptar'
    });
}

// Función para alertas de pregunta
function alertQuestion(title, text) {
    Swal.fire({
        icon: 'question',
        title: title,
        text: text,
        confirmButtonText: 'Aceptar'
    });
}