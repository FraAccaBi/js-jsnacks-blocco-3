/* Snack 2:
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke'] */

let nomi = ['Fra', 'FRA', 'fra', 'fRa']

for (let i = 0; i < nomi.length; i++) {
    let nome = nomi[i];
    nome = nome.toLowerCase();
    let iniziale = nome.substring(0,1)
    iniziale = iniziale.toUpperCase()
    nomi[i] = `${iniziale}${nome.substring(1)}`
}
console.log(nomi);


