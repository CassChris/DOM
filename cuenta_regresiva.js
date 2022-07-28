const d = document;

export default function countdown(id,limitDate,finalMassage){
    const $countdown = d.getElementById(id),
    $countdown2 = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(()=>{
        let now = new Date().getTime(),
        limitTime = countdownDate - now,
        days = Math.floor(limitTime/(1000 * 60 * 60 * 24)),
        hours = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24)/ (1000 * 60 * 60))).slice(-2),
        minuts = ("0" + Math.floor(limitTime % (1000 * 60 * 60)/ (1000 * 60))).slice(-2),
        seconds = ("0" + Math.floor(limitTime % (1000 * 60)/ (1000))).slice(-2);
        
        let countText = `<h3>Faltan: ${days} días ${hours} horas ${minuts} minutos ${seconds} segundos.</h3>`;
        
        $countdown.innerHTML = countText;
        if(limitTime < 0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMassage}</h3>`;
        }

        $countdown2.innerHTML = countText;
        if(limitTime < 0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMassage}</h3>`;
        }
        // ! console.log(countdownDate,now , limitTime)
    },1000);
}

