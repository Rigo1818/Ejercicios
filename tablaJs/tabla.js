var personArr = [
    {
        "personId": 123,
        "name": "Jhon",
        "city": "Melbourne",
        "phoneNo": "1234567890"
    },
    {
        "personId": 124,
        "name": "Amelia",
        "city": "Sydney",
        "phoneNo": "1234567890"
    },
    {
        "personId": 125,
        "name": "Emily",
        "city": "Perth",
        "phoneNo": "1234567890"
    },
    {
        "personId": 126,
        "name": "Abraham",
        "city": "Perth",
        "phoneNo": "1234567890"
    }
];

function crearTabla(datos) {
    let tabla = document.createElement("table");
    let encabezado = tabla.createTHead();
    let filaEncabezado = encabezado.insertRow();

    // Encabezados
    let encabezados = ["Id","Nombre", "Ciudad", "Teléfono"];
    encabezados.forEach(enc => {
        let th = document.createElement("th");
        th.textContent = enc;
        filaEncabezado.appendChild(th);
    });

    let cuerpo = tabla.createTBody();

    // Rellenar la tabla con datos
    datos.forEach(persona => {
        let fila = cuerpo.insertRow();
        let celId = fila.insertCell();
        let celNombre = fila.insertCell();
        let celCiudad = fila.insertCell();
        let celTelefono = fila.insertCell();

        celId.textContent = persona.personId;
        celNombre.textContent = persona.name; 
        celCiudad.textContent = persona.city; 
        celTelefono.textContent = persona.phoneNo; 
    });

    // Agregar la tabla al contenedor
    document.getElementById("tablaContainer").appendChild(tabla);
}

crearTabla(personArr);
