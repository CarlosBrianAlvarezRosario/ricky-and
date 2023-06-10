// //* consumir la api de rick and morty
// alert("hola muundo")
// var nombre = prompt("nombre")

// // prompt para ingresar valores del usuario
// //var nombreUs = prompt("Nombre");


// // Alert para mostrar mensaje al usuario
// //alert(nombreUS + " bienvenido a la api de Rick y morty:")

// var numero = parseInt(prompt("un numero"))
// var numero2 = parseInt(promt("un numero"))

// var suma = numero + numero2;+
// alert("la suma de los numeros es: " + suma)

function personajes(done) {

    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
        .then(resp => resp.json())
        .then(data => done(data))
        .catch(error => console.log(error))
        .finally(() => console.log("finalizo"))
}

function mostrarDatos(data) {
    console.log(data.results);
    const results = data.results;
    const section = document.querySelector('.section');
    let html = '';
    results.forEach(element => {
        html += `
        <div class="card">
        <img src="${element.image}" alt="${element.name}">
        <h2>${element.name}</h2>
        <p>${element.species}</p>
        </div>
        `
    });
    section.innerHTML = html;
}

personajes(mostrarDatos);


