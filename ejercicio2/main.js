// se hace un array para los platos del menu

var platos=[
    { nombre: "Pollo Teriyaki",descripcion: "Pollo a frito salteado con salsa teriyaki y arroz", precio: "12.000"},
    { nombre: "Pollo Kung Pao",descripcion: "Pollo salteado con maní, pimientos,chile seco y arroz", precio: "13.500"},
    { nombre: "Pollo Agridulce",descripcion: "Pollo crujiente con salsa agridulce, vegetales y arroz", precio: "$13.000"},
    { nombre: "Pollo con Miel y Ajo",descripcion: "Pollo glaseado con miel, ajo, un toque de soya y arroz",precio: "$13.800"},
    { nombre: "Pollo al Curry",descripcion: "Pollo en salsa curry con leche de coco y arroz", precio: "$14.000"},
    { nombre: "Pollo Frito Coreano",descripcion: "Pollo crujiente con salsa picante coreana y papas francesas",precio: "$14.500"},
    { nombre: "Arroz Frito con Pollo",descripcion: "Arroz salteado con pollo, huevo, vegetales y soya",precio: "$11.500"},
    { nombre: "Chow Mein de Pollo",descripcion: "Fideos salteados con pollo y vegetales",precio: "$12.800"},
    { nombre: "Sopa Ramen con Pollo",descripcion: "Caldo caliente con fideos, pollo y huevo",precio: "$14.200"}
];

//se hace un map para guardar el texto de inicio en aca seccion

var textoSecciones= new Map();
textoSecciones.set("inicio", "Sumérgete en una experiencia única de sabores orientales donde el pollo es el verdadero protagonista.\n" +
    "        En nuestro restaurante combinamos tradición y creatividad para ofrecer platos inspirados en la cocina\n" +
    "        asiática, preparados con ingredientes frescos, salsas auténticas y ese toque especial que encanta a nuestros\n" +
    "        clientes. Cada receta está pensada para llevarte en un viaje de sabor, desde opciones suaves y dulces hasta\n" +
    "        combinaciones intensas y especiadas.\n" +
    "\n" +
    "        Nuestro Menú presenta los platos favoritos de quienes ya han disfrutado esta experiencia, ideales para\n" +
    "        cualquier momento del día y perfectos para compartir o deleitarte por tu cuenta");
textoSecciones.set("menu","Enontraras todos nuestros platos preparados con ingredientes frescos");
textoSecciones.set("contacto","¿Quieres reservar tu mesa? Completa el formulario y te confirmaremos tu reserva");

// se crea la funcion para que se muestre una seccion al tiempo

function mostrarSeccion(seccionElegida) {

    // se ocultan las 3 secciones
    document.getElementById("inicio").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("contacto").style.display = "none";
    // se muestra solo la que el usuario la eligio
    document.getElementById(seccionElegida).style.display = "block";



    switch (seccionElegida) {
        case "inicio":
            document.getElementById("inicio").style.display = "block";
            document.getElementById("textodeinicio").innerHTML = textoSecciones;
            break;

        case "menu":
            document.getElementById("menu").style.display = "block";
            generartablamenu();
            break;
        case "contacto":
            document.getElementById("contacto").style.display = "block";
            break;
        default:
            console.log("Sección no reconocida: " + seccionElegida);

    }

}
// se genera la tabla del menu, se construye una tabla que lea el array de los platos
function generartablamenu() {

    var contenedor = document.getElementById("contenedorMenu");
    var tablamenu ="<table border=\'1\' cellpadding=\'8\' cellspacing=\'0\' width=\'80%\'>"
    tablamenu += "<tr><th>Plato</th><th>Descripción</th><th>Precio</th></tr>";
    for (var i = 0; i < platos.length; i++) {
        var plato = platos[i];
        tablamenu += "<tr>";
        tablamenu += "<td>"+plato.nombre+"</td>";
        tablamenu += "<td>"+plato.descripcion+"</td>";
        tablamenu += "<td>"+plato.precio+"</td>";
        tablamenu += "</tr>";
    }
    tablamenu += "</table>";
    contenedor.innerHTML = tablamenu;
}
// se valida el formulario
function validarFormulario(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var contacto = document.getElementById("telefono").value;
    var hora = document.getElementById("hora").value;

    var mensaje = document.getElementById("mensajeFormulario");
    if(nombre=="" || apellido==""|| contacto==""||hora==""){
        mensaje.innerHTML = "Complete todos los campos";
    }else {
        mensaje.innerHTML = "Reserva recibida para" + nombre+ " " + apellido + " "+ "a las "+ hora + ".  ¡Te espermos!";
    }
}

mostrarSeccion("inicio");

