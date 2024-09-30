function saludar(nombre) {
    return `Hola ${nombre}`;
}

function bienvenida(nombre) {
    return `En que te puedo ayudarte ${nombre}`;
    
}

module.exports = { //exportar un objeto
    saludar,
    bienvenida
}