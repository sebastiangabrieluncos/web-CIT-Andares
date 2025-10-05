let modoAlternativo = false; 

    function cambiarEstilo() {
    if (!modoAlternativo) {
        document.body.style.backgroundColor = "#555555"; 
        document.body.style.color = "#E94E77"; 
        modoAlternativo = true;
        alert('🎨 Estilo actualizado con la paleta del CIT')
    } else {
        document.body.style.backgroundColor = "#f7f2e7"; 
        document.body.style.color = "#333333"; 
        modoAlternativo = false;
        alert('🎨 Estilo actualizado con la paleta del CIT')
    }
    }