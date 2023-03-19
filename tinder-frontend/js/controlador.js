var usuarios = [];

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

obtenerUsuarios (); 
const renderizarUsuarios = () => {
    document.getElementById('select-usuario').innerHTML = '';
    usuarios.forEach(usuario => {
      document.getElementById('select-usuario').innerHTML +=
        `<div class="usuario">
          <img class="imagen-usuario" src="img/${usuario.imagenPerfil}" onclick="mostrarPerfil()">
          <div>
            ${usuario.nombre}
          </div>
        </div>`;
    });
}

const mostrarPerfil = () => {
    document.getElementById('lista-usuarios').style.display = "none";
    document.getElementById('seccion-perfil').style.display = "none";
    document.getElementById('seccion-matches').style.display = "block";
    document.getElementById('fuego').style.color = "#FB5064";
    document.getElementById('obtenerusuarios').style.color = "#DADFE1";
    document.getElementById('estrella').style.color = "#DADFE1";
    document.getElementById('seccion-matches').style.display = "none";
    document.getElementById('logo').style.display = "none";   
  }

const mostrarMatches = () => {
    document.getElementById('lista-usuarios').style.display = "none";
    document.getElementById('seccion-perfil').style.display = "none";
    document.getElementById('seccion-matches').style.display = "block";
    document.getElementById('estrella').style.color = "#FFC400";
    document.getElementById('obtenerusuarios').style.color = "#DADFE1";
    document.getElementById('fuego').style.color = "#DADFE1";
    document.getElementById('logo').style.display = "none";   
    document.getElementById('seccion-perfil').style.display = "none"; 
  }

const mostrarPerfiles = () => {
    document.getElementById('lista-usuarios').style.display = "block";
    document.getElementById('seccion-perfil').style.display = "none";
    document.getElementById('seccion-matches').style.display = "none";
    document.getElementById('obtenerusuarios').style.color = "#4ECDFF";
    document.getElementById('logo').style.display = "none";   
}
