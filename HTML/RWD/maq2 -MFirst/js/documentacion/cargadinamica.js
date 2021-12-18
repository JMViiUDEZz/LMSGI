// carga dinamica de paginas (load/carga/inicio)
//inyeccion dinamica de codigo
function inicio(){
    console.log('documento app cargado');
    console.log(document);
    const vmain = document.querySelector('main section');
    //detectar clicks de raton en el header nav
    const servicios = document.querySelector('header nav a#servicios')
    const formacion = document.querySelector('header nav a#formacion')
    const trabajos = document.querySelector('header nav a#trabajos')

    servicios.addEventListener('click', () => {
        console.log('has pinchado en servicios')
        fetch('html/servicios.html')
        .then(respuesta => {
            return respuesta.text()
        
        })
        .then(respuestaHTML => {
            console.log(respuestaHTML)
            vmain.innerHTML = respuestaHTML;

        })
    });
    formacion.addEventListener('click', () => {
        console.log('has pinchado en formacion')
        fetch('html/formacion.html')
        .then(respuesta => {
            return respuesta.text()
        
        })
        .then(respuestaHTML => {
            console.log(respuestaHTML)
            vmain.innerHTML = respuestaHTML;

        })
    });
    trabajos.addEventListener('click', () => {
        console.log('has pinchado en trabajos')
        fetch('html/trabajos.html')
        .then(respuesta => {
            return respuesta.text()
        
        })
        .then(respuestaHTML => {
            console.log(respuestaHTML)
            vmain.innerHTML = respuestaHTML;

        })
    });
    //console.log(main);
    //main.innerHTML = <h1>Hola Caracola</h1>

}