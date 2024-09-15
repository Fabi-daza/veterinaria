function validarRUT(rut) {
    rut = rut.replace(/\./g, '').replace(/-/g, '');
    
    if (rut.length < 8 || rut.length > 9) {
        return false;
    }
    const dv = rut.slice(-1).toUpperCase();
    const numero = rut.slice(0, -1);

    if (!/^\d+$/.test(numero)) {
        return false;
    }

    let suma = 0;
    let multiplicador = 2;

    for (let i = numero.length - 1; i >= 0; i--) {
        suma += parseInt(numero.charAt(i)) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const dvr = 11 - (suma % 11);
    const dvEsperado = dvr === 11 ? '0' : dvr === 10 ? 'K' : dvr.toString();

    return dv === dvEsperado;
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
