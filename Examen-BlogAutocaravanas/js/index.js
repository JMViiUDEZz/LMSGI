
console.log('fichero cargado');
function inicio(){
    console.log('documento app cargado');
    const vmain = document.querySelector('main section');
    const integrales = document.querySelector('header #top nav a#integrales');
    const perfiladas = document.querySelector('header #top nav a#perfiladas');
    const empresa = document.querySelector('header #top nav a#empresa');

    integrales.addEventListener('click', () => {
        console.log('has pinchado en integrales');
        fetch('html/integrales.html')
        .then(respuesta => {
            return respuesta.text()
        })
        .then(respuestaHTML => {
            console.log(respuestaHTML);
            vmain.innerHTML = respuestaHTML;
        })
    });
    perfiladas.addEventListener('click', () => {
        console.log('has pinchado en perfiladas');
        fetch('html/perfiladas.html')
        .then(respuesta => {
            return respuesta.text()
        })
        .then(respuestaHTML => {
            console.log(respuestaHTML);
            vmain.innerHTML = respuestaHTML;
        })
    });
    empresa.addEventListener('click', () => {
        console.log('has pinchado en empresa');
        fetch('html/empresa.html')
        .then(respuesta => {
            return respuesta.text()
        })
        .then(respuestaHTML => {
            console.log(respuestaHTML);
            vmain.innerHTML = respuestaHTML;
        })
    });
}