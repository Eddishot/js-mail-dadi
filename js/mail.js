
let email = prompt("Insersci la tua Email");

// creo un array con dentro delle email random

const emailUtenti = ["paolo@hotmail.it", "marco@hotmail.it", "giovanni@hotmail.it", "mario@hotmail.it", "federico@hotmail.it", "alessandro@hotmail.it",];

console.log(emailUtenti);

// creo un let falso per fare la comparazione delle email

let emailConsentito = true

for (let i=0; i < emailUtenti.length; i++){

    const emailCorrente = emailUtenti[i]

   if(emailUtenti === emailUtenti[i]){

    emailConsentito = false


   }
}

// creo un if per verificare se le eamil sono valide

if(emailConsentito){
    alert("Email non valida")

}  else{
    alert("Email valida")
}