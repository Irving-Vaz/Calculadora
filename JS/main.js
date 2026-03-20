function CalcularPermisos() {
    const inputPermisos = document.getElementById('permisos');
    const entrada = inputPermisos.value;
    const validacion = /^[0-7]{3}$/;

 
    if (entrada.length === 3) {
        if (validacion.test(entrada)) {
            const usuario = entrada.charAt(0);
            const grupo = entrada.charAt(1);
            const otros = entrada.charAt(2);
            
            
            document.getElementById('p_usuarios').value = usuario;
            document.getElementById('p_grupo').value = grupo;
            document.getElementById('p_otros').value = otros;
        } else {
            alert("Los dígitos deben estar entre 0 y 7.");
            inputPermisos.value = "";
        }
    }
}

function ActualizarInputDesdeSelects() {
    const u = document.getElementById('p_usuarios').value;
    const g = document.getElementById('p_grupo').value;
    const o = document.getElementById('p_otros').value;
    document.getElementById('permisos').value = `${u}${g}${o}`;
}