/* Snack 2:
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke'] */

let nomi = ['Fra', 'FRA', 'fra']

for (let i = 0; i < nomi.length; i++) {
    let nome = nomi[i];
    let iniziale = nome.substring(0,1)
    console.log(iniziale);
    if (iniziale !== iniziale.toUpperCase()){
        nome = `${iniziale.toUpperCase()}${nome.substring(1)}`
        nomi[i] = nome   
    } else {
        nome = `${iniziale}${nome.substring(1).toLowerCase()}`
        nomi[i] = nome
    }
}
console.log(nomi);


