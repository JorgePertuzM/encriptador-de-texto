// Función para encriptar el texto según las reglas dadas
function encriptar(textoEntrada) {
    // Convertir el textoEntrada a minúsculas para asegurar la consistencia
    var textoEncriptado = textoEntrada.toLowerCase();
    
    // Variable para almacenar el texto encriptado
    var textoSalida = '';

    // Recorrer cada carácter del textoEncriptado
    for (var i = 0; i < textoEncriptado.length; i++) {
        // Obtener el carácter actual
        var caracter = textoEncriptado.charAt(i);

        // Aplicar la encriptación según las reglas especificadas
        switch (caracter) {
            case 'e':
                textoSalida += 'enter';
                break;
            case 'i':
                textoSalida += 'imes';
                break;
            case 'a':
                textoSalida += 'ai';
                break;
            case 'o':
                textoSalida += 'ober';
                break;
            case 'u':
                textoSalida += 'ufat';
                break;
            default:
                // Si el carácter no está en las reglas de encriptación, agregarlo tal cual
                textoSalida += caracter;
        }
    }

    // Devolver el texto encriptado
    return textoSalida;
}

// Función para desencriptar el texto según las reglas dadas
function desencriptar(textoEncriptado){
    // Variable para almacenar el texto desencriptado
    var textoDesencriptado = '';

    // Recorrer el textoEncriptado carácter por carácter
    var i = 0;
    while (i < textoEncriptado.length){
        // Obtener el carácter actual
        var caracterActual = textoEncriptado.charAt(i);

        // Realizar la desencriptación con switch-case
        switch (caracterActual){
            case 'e':
                // Verificar si el siguiente texto contiene 'enter'
                if (textoEncriptado.substr(i, 5) === 'enter') {
                    textoDesencriptado += 'e';
                    i += 5; // Avanzar al siguiente carácter después de 'enter'
                } else {
                    textoDesencriptado += caracterActual;
                    i++; // Avanzar al siguiente carácter
                }
                break;

                case 'i':
                // Verificar si el siguiente texto contiene 'imes'
                if (textoEncriptado.substr(i, 4) === 'imes') {
                    textoDesencriptado += 'i';
                    i += 4; // Avanzar al siguiente carácter después de 'imes'
                } else {
                    textoDesencriptado += caracterActual;
                    i++; // Avanzar al siguiente carácter
                }
                break;

                case 'a':
                // Verificar si el siguiente texto contiene 'ai'
                if (textoEncriptado.substr(i, 2) === 'ai') {
                    textoDesencriptado += 'a';
                    i += 2; // Avanzar al siguiente carácter después de 'ai'
                } else {
                    textoDesencriptado += caracterActual;
                    i++; // Avanzar al siguiente carácter
                }
                break;

                case 'o':
                // Verificar si el siguiente texto contiene 'ober'
                if (textoEncriptado.substr(i, 4) === 'ober') {
                    textoDesencriptado += 'o';
                    i += 4; // Avanzar al siguiente carácter después de 'ober'
                } else {
                    textoDesencriptado += caracterActual;
                    i++; // Avanzar al siguiente carácter
                }
                break;

                case 'u':
                // Verificar si el siguiente texto contiene 'ufat'
                if (textoEncriptado.substr(i, 4) === 'ufat') {
                    textoDesencriptado += 'u';
                    i += 4; // Avanzar al siguiente carácter después de 'ufat'
                } else {
                    textoDesencriptado += caracterActual;
                    i++; // Avanzar al siguiente carácter
                }
                break;

                default:
                textoDesencriptado += caracterActual;
                i++; // Avanzar al siguiente carácter
                break;
        }
    }
    // Devolver el texto desencriptado
    return textoDesencriptado;
}


function copiarTexto() {
    // Seleccionar el elemento de salida
    var textareaSalida = document.querySelector(".txt-salida");

    // Seleccionar el texto dentro del textarea
    textareaSalida.select();
    textareaSalida.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto seleccionado al portapapeles
    document.execCommand("copy");

    // Mostrar una alerta si el textarea está vacío
    alertSuccess(
        "Copiado",
        "El texto fue copiado al portapapeles..."
    );
    
}
