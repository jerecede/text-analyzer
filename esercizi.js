const lista = `
Mele;5;Supermercato
Banane;3;Supermercato
Arance;4;Supermercato
Pane;2;Panetteria
Latte;1;Supermercato
Uova;12;Supermercato
Carote;500;Supermercato
Patate;1;Supermercato
Pollo;500;Macelleria
Manzo;300;Macelleria
Pesce;400;Pescheria
Gamberetti;200;Pescheria
Vino rosso;1;Enoteca
Calamari;300;Pescheria`


//1) creare una funzione che, partendo da lista, ritorni un array di oggetti: {nome: value, quantità: value, provenienza:value}

// function firstFnct(str) {
//     const rgx = /\n(?<nome>[\w|\s]+);(?<quantita>\d+);(?<provenienza>\w+)/g;

//     let array = [];
//     let result = [];

//     while (array !== null) {
//         array = rgx.exec(str);
//         if (array !== null) {
//             result.push(array['groups']);
//         }
//     }

//     return result;
// }

// console.log(firstFnct(lista));

//2) creare una funzione che, partendo da lista, ritorni un array di oggetti che hanno come provenienza il supermercato: {nome: value, quantità: value, provenienza:value}

// function secondFnct(str) {
//     const rgx = /\n(?<nome>[\w|\s]+);(?<quantita>\d+);(?<provenienza>Supermercato)/g;

//     let array = [];
//     let result = [];

//     while (array !== null) {
//         array = rgx.exec(str);
//         if (array !== null) {
//             result.push(array['groups']);
//         }
//     }

//     return result;
// }

// console.log(secondFnct(lista));

//3) creare una funzione che, partendo da lista e da una stringa che indica la proveneienzz, ritorni un array di oggetti: {nome: value, quantità: value, provenienza:value}

function thirdFnct(str, fromStr) {
    const rgx = new RegExp(`\n(?<nome>[\\w|\\s]+);(?<quantita>\\d+);(?<provenienza>${fromStr})`, 'g');

    let array = [];
    let result = [];

    while (array !== null) {
        array = rgx.exec(str);
        if (array !== null) {
            result.push(array['groups']);
        }
    }

    return result;
}

console.log(thirdFnct(lista, 'Macelleria'));

//4) creare una funzione che, partendo da lista e da un array di keys, ritorni un array di oggetti: {keys[0]: value, keys[1]: value, keys[2]: value}