/* Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */

const automobili = [
    {
        marca: 'Opel',
        modello: 'Corsa',
        alimentazione: 'benzina' 
    },
    {
        marca: 'Opel',
        modello: 'Corsa',
        alimentazione: 'benzina'
    },
    {
        marca: 'Suzuki',
        modello: 'Hybrib',
        alimentazione: 'elettrico' 
    },
    {
        marca: 'Ford',
        modello: 'Fiesta',
        alimentazione: 'benzina' 
    },
    {
        marca: 'Volkswagen',
        modello: 'Polo',
        alimentazione: 'diesel' 
    },
    {
        marca: 'Opel',
        modello: 'Zafira',
        alimentazione: 'diesel' 
    },
    {
        marca: 'Fiat',
        modello: 'punto',
        alimentazione: 'diesel'
    },
    {
        marca: 'Fiat',
        modello: 'Tipo',
        alimentazione: 'gpl'
    },
    {
        marca: 'Renaul',
        modello: 'Mia',
        alimentazione: 'elettrico'
    },
    {
        marca: 'Opel',
        modello: 'Corsa',
        alimentazione: 'metano' 
    },
];



/* for (let alimentazione in automobili) {
    if (Object.hasOwnProperty.call(automobili, alimentazione)) {
        const element = automobili[alimentazione];
        console.log(element);
    }} */



const benzina = automobili.filter((automobili) => {
    if (automobili.alimentazione === 'benzina') {
        return true;
    }
    return false
});

const diesel = automobili.filter((automobili) => {
    return automobili.alimentazione === 'diesel'
})

const ecologiche = automobili.filter((automobili) => {
    if ((automobili.alimentazione !== 'benzina') && (automobili.alimentazione !== 'diesel')){
        return true
    }
    return false
})


console.log(benzina);
console.log(diesel);
console.log(ecologiche);


