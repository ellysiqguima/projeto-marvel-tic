function finalizarPedido() {
    document.getElementById("instrucoes").innerHTML = "Obrigado por finalizar o seu pedido! Em breve entraremos em contato.";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("localizacao").innerHTML = "Geolocalização não é suportada por este navegador.";
    }
}

function showPosition(position) {
    document.getElementById("localizacao").innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}
