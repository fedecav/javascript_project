let annoNascita = 1996
let annoCorrente = 2023

function età(x,y){
    età =x - y 
    return età
}

function anniMancanti(x,y){
    anniMancanti = 100 - (x - y)
    return anniMancanti
}

console.log("età = " + età(annoCorrente,annoNascita) + ", anni mancanti = " + anniMancanti(annoCorrente,annoNascita))