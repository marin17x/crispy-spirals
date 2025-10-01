document.addEventListener('DOMContentLoaded', () => {
    const botonModoOscuro = document.getElementById('modo-oscuro');
    
    botonModoOscuro.addEventListener('click', () => {
        document.body.classList.toggle('modo-oscuro');
        
        // Opcional: Guardar preferencia en localStorage
        const modoOscuroActivado = document.body.classList.contains('modo-oscuro');
        localStorage.setItem('modoOscuro', modoOscuroActivado);
    });

    // Opcional: Cargar preferencia guardada
    if (localStorage.getItem('modoOscuro') === 'true') {
        document.body.classList.add('modo-oscuro');
    }
});