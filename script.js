
// Llamar al formulario

document.getElementById("Formulario").addEventListener("submit", function() {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let grupo = document.getElementById("grupo").value;
    let sala = document.getElementById("sala").value;



    let datos = {
        nombre: nombre,
        apellido: apellido,
        grupo: grupo,
        sala: sala
    }; 

    // Fetch con metodo post y endpoint de crea

    fetch("https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
});

    function recargar() {
    fetch("https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265")
    .then(response => response.json())
    .then(datos => {
        let listaDiv = document.getElementById("lista");
        listaDiv.innerHTML = ""; 

        datos.forEach(recarga => {
            let nuevoDiv = document.createElement("div");
            nuevoDiv.innerHTML = `Nombre: ${recarga.nombre}, Apellido: ${recarga.apellido}, Sala: ${recarga.sala}`;

            let borrar = document.createElement("img");
            borrar.src = "eliminar.png"; 
            borrar.addEventListener("click", () => borrador(recarga._id));

            nuevoDiv.appendChild(borrar);
            listaDiv.appendChild(nuevoDiv);
        });
    })
    .catch(error => console.error('Error:', error));
}

// Boton de borrar

function borrador(id) {
    fetch(`https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265/${id}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(() => recargar())
    .catch(error => console.error('Error:', error));
}

// Actualizar cada 1.5 segundos

setInterval(recargar, 1500); 

