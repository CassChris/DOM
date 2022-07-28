const d = document,
  w = window;

export default function speechWrite() {
  const $btnStartRecord = d.getElementById("speech-write-btn-start"),
    $btnStopRecord = d.getElementById("speech-write-btn-stop"),
    $btnPlayText = d.getElementById("speech-write-btn-read"),
    $texto = d.getElementById("speech-write-text"),
    speech = new SpeechSynthesisUtterance();
   

  let recognition = new webkitSpeechRecognition();
  recognition.lang = "es-ES";
  recognition.continuous = true;
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const results = event.results;
    // console.log(results);
    const frase = results[results.length - 1][0].transcript;
    $texto.value += frase;
  };

  recognition.onend = (e) => {
    console.log("el microfono dejo de escuchar");
  };

  recognition.onerror = (e) => {
    console.log(e.error);
  };

  
  
  d.addEventListener("click", (e) => {
    
    if(e.target === $btnStartRecord){
      recognition.start();
    }
    
    if(e.target === $btnStopRecord){
      
      recognition.abort();
    }

    if(e.target === $btnPlayText){
      // ***function anonima autoejecutable
      (function($texto){ 
        speech.text = $texto;
        w.speechSynthesis.speak(speech);
      })($texto.value);
      
      
      // ***arrow function
      // const leerTexto = ($texto)=>{ 
        //   speech.text = $texto;
      //   w.speechSynthesis.speak(speech);
      // }
      // leerTexto($texto.value);
    }

  });

}







