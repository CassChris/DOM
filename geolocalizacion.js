const d = document,
    n = navigator;

export default function getGeolacation(id){
    const $id = d.getElementById(id),
    options = {
        enableHightAccuracy:true,
        timeout: 5000,
        maximumAge: 0
    };


    const success = position =>{
        // console.log(position);
        let coords = position.coords;

        $id.innerHTML = `
        <p>Tu posición actual es :</p>
        <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Precisión: <b>${coords.accuracy} metros</b></li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en GoogleMaps</a>
        `




    };

    const error = err=>{
        $id.innerHTML = `<p>Error:<mark>${error.code}: ${err.message}</mark></p>`;
        // console.log(`Error: ${error.code}: ${err.message}`)
    };
    n.geolocation.getCurrentPosition(success,error,options);

}