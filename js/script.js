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

// Manejador del formulario de contacto y botones SMS/mail
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const phoneInput = document.getElementById('target-phone');
    const btnSms = document.getElementById('btn-sms');
    const btnMailFallback = document.getElementById('btn-mail-fallback');

    function buildInstagramUrl(message) {
        // Construir URL para abrir Instagram Direct con mensaje
        return `https://www.instagram.com/direct/inbox/?text=${encodeURIComponent(message)}`;
    }

    function buildMailto(email, subject, body) {
        return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    if (btnSms) {
        btnSms.addEventListener('click', () => {
            // Abrir Instagram con un texto rápido
            const quick = 'Hola, quisiera más información sobre sus productos.';
            window.location.href = 'https://www.instagram.com/crispy_spirals/';
        });
    }

    if (btnMailFallback) {
        btnMailFallback.addEventListener('click', () => {
            const email = 'info@crisyspirals.com';
            const subj = 'Consulta desde la web';
            const body = 'Hola,\n\nMe gustaría recibir más información sobre...\n\nSaludos.';
            window.location.href = buildMailto(email, subj, body);
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const phone = phoneInput ? phoneInput.value : '+573245646715';

            if (!name || !message) {
                alert('Por favor completa tu nombre y mensaje antes de enviar.');
                return;
            }

            const instagramMessage = `Hola, soy ${name}. ${message}${email ? '\nCorreo: ' + email : ''}`;
            
            // Intentar abrir Instagram; si no funciona, ofrecer abrir correo
            try {
                // Redirigir a Instagram Direct o perfil
                window.location.href = 'https://www.instagram.com/crispy_spirals/';
            } catch (err) {
                // Fallback a mailto
                const mailUrl = buildMailto('info@crisyspirals.com', `Consulta de ${name}`, `${message}\n\nCorreo: ${email}`);
                window.location.href = mailUrl;
            }
        });
    }
});