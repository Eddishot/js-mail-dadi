// creo due let. uno mio e uno per il computer

let numeriUtente = Math.ceil(Math.random() * 6);
console.log (numeriUtente)

let numeriComputer = Math.ceil(Math.random() * 6);
console.log (numeriComputer)



// creo un if per fare la comparizione

if( numeriUtente > numeriComputer){

    alert("Complimneti! hai vinto")

} else{

    alert("Mi dispiace. Hai perso")
}