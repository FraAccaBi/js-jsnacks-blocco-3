/* Snack 4:
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. */

let persone = [
    {nome: 'Fra', cognome: 'Huda', eta: 30 },
    {nome: 'Marco', cognome: 'Rossi', eta: 18 },
    {nome: 'Elisa', cognome: 'Verdi', eta: 2 },
    {nome: 'Giada', cognome: 'Bianchi', eta: 28 },
    {nome: 'Michele', cognome: 'Rosa', eta: 63 },
    {nome: 'Matteo', cognome: 'Blu', eta: 15 },
]

let eta = persone.filter((persone) => {
    if (persone.eta >= 18) {
        persone.abilitazione = (`${persone.nome} può guidare`);  
    } else {
        persone.abilitazione = (`${persone.nome} non può guidare`); 
    }
})
console.log(persone);