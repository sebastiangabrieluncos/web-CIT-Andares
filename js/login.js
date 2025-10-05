function login() {
    alert('🔐 Bienvenido a Admisiones 2026 - Recuerda que para acceder al contenido de esta página tienes que tener usuario y contraseña!!');
    
    let nombre = prompt('Ingresa tu nombre de Usuario: ');
    if (!nombre || nombre.trim() === "") {
        alert("⚠️ Por favor, ingresa un nombre de usuario válido.");
        window.location.href = 'index.html';
        return;
    }

    alert('👋 Hola ' + nombre + ', estás a punto de ingresar, ten a mano tu contraseña');

    let pass = prompt('Ingresa tu contraseña: ');
    let contraseña = 'andares2026';

    if (pass === contraseña) {
        alert('✅ Bienvenido!!! 😁');
    } else {
        alert('❌ Contraseña incorrecta');
        window.location.href = 'index.html';
    }
}

