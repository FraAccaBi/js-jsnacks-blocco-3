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

const auto_benzina = automobili.forEach((alimentazione) => {
        if (alimentazione === 'benzina') {
            return true;
        }
        return false
    });

automobili.forEach((automobili) => {
    console.log(automobili.alimentazione);
});
