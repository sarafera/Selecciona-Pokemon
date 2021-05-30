function Pokemon(n, v, a, t, g, i) {
    this.nombre = n;
    this.vida = v;
    this.tipo = t;
    this.grito = g;
    this.imagen = i;
}
var Charizard = new Pokemon("Charizard", 100, 60, "Fuego", "Char!", "<img src='img/charizar.png'>");
var Iglipuff = new Pokemon("Iglipuff", 90, 61, "Hada", "Iglipuff!", "<img src='img/iglipuff.png'>");
var Mudkip = new Pokemon("Mudkip", 50, 62, "Agua", "Pika!", " <img src='img/mudkip.png'>");
var Vaporeon = new Pokemon("Vaporeon", 800, 65, "Eléctrico", "Vap!", "<img src='img/vaporeon.png'>");

var opciones = [Charizard, Iglipuff, Mudkip, Vaporeon];

function inicio(eleccion) {
    var pokemonElegido = opciones[eleccion];

    document.getElementById("imagenPokemon").innerHTML = pokemonElegido.imagen;

    document.getElementById('datosPokemon').innerHTML = "<h1>" + pokemonElegido.nombre + "</h1>" +

        "<p>" + pokemonElegido.nombre + " es un pokémon de tipo " + "<span>" + pokemonElegido.tipo + "</span>" +

        ",<br />tiene un <span> ataque </span> de " + "<span>" + pokemonElegido.ataque + "</span>" + ", una <span> vida </span> de "

    +
    "<span>" + pokemonElegido.vida + "</span>" + "<br />y su grito es " + pokemonElegido.grito + ".</p>";
}