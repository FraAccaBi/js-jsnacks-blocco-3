/*  Snack 3:
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi. */

const animali = [
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
  { nome: 'rana', famiglia: 'ranidae', classe: 'anfibi' },
  { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'lince', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'passero', famiglia: 'fasianidi', classe: 'uccelli' },
  { nome: 'lupo', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'iena', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'pettirosso', famiglia: 'fasianidi', classe: 'uccelli' },
]

const animali_mammiferi = animali.filter((animali) => {
  return animali.classe === 'mammiferi'
})
console.log(animali_mammiferi);

/* const diesel = automobili.filter((automobili) => {
    return automobili.alimentazione === 'diesel'
}) */