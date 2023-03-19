var usuarios = [];

// Obtiene del backend la lista de usuarios
const obtenerUsuarios = () => {
    fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", //MIME Type
        }
    })
        .then((respuesta) => respuesta.json())
        .then((respuestaUsuarios) => {
            console.log(respuestaUsuarios);
            usuarios = respuestaUsuarios;
            renderizarUsuarios();
        });
}

obtenerUsuarios();

const renderizarUsuarios = () => {

    document.getElementById('lista-usuarios').innerHTML = '';

    usuarios.forEach(usuario => {
        document.getElementById('lista-usuarios').innerHTML +=
            `<div class="usuario">
                <img class="imagen-usuario" src="img/${usuario.imagenPerfil}" onclick="mostrarPerfil(${usuario.id})">
                <div>
                    ${usuario.nombre}
                </div>
            </div>`;
    });
}

const mostrarPerfil = (id) => {
    console.log(id);

    document.getElementById('lista-usuarios').style.display = "none";
    document.getElementById('opcion-usuario').classList.remove('active');
    document.getElementById('contenido-1').style.display = "none";
    
    // Estableciendo funcion para botones de matches y perfiles
    document.getElementById('opcion-perfiles').setAttribute('onclick', 'mostrarPerfiles()')
    document.getElementById('opcion-matches').setAttribute('onclick', 'mostrarMatches()')

    // Pintando flama de color rojo
    document.getElementById('opcion-perfiles').classList.add('flama-activa');

    // document.getElementById('opcion-perfiles').style.color = "#FB5064";
    // document.getElementById('opcion-activa').style.transform = 'translateX(0)';
    // document.getElementById('seccion-perfil').style.display = "none";
    // document.getElementById('seccion-matches').style.display = "block";
    // document.getElementById('obtenerusuarios').style.color = "#DADFE1";
    // document.getElementById('estrella').style.color = "#DADFE1";
    // document.getElementById('seccion-matches').style.display = "none";
    // document.getElementById('logo').style.display = "none";
}

const mostrarUsuarios = () => {

    document.getElementById('opcion-usuario').classList.add('active');
    document.getElementById('contenido-1').style.display = "block";
    document.getElementById('lista-usuarios').style.display = "grid";
    renderizarUsuarios();

}


const mostrarPerfiles = () => {
    document.getElementById('opcion-usuario').classList.remove('active');
    document.getElementById('opcion-perfiles').classList.add('flama-activa');
    document.getElementById('opcion-matches').classList.remove('estrella-activa');
    document.getElementById('opcion-activa').style.transform = 'translateX(0)';

    // document.getElementById('contenido-1').style.display = "none";
    // document.getElementById('contenido-2').style.display = "block";
    // document.getElementById('contenido-3').style.display = "none";
}

const mostrarMatches = () => {
    document.getElementById('opcion-usuario').classList.remove('active');
    document.getElementById('opcion-perfiles').classList.remove('flama-activa');
    document.getElementById('opcion-matches').classList.add('estrella-activa');
    document.getElementById('opcion-activa').style.transform = 'translateX(90%)';
    
    // document.getElementById('contenido-1').style.display = "none";
    // document.getElementById('contenido-2').style.display = "none";
    // document.getElementById('contenido-3').style.display = "block";
}


