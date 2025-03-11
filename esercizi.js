const lista =
`Mele;5;Supermercato
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

function firstFnct(str) {
    const rgx = /^(?<nome>.+);(?<quantita>\d+);(?<provenienza>.+)$/gm;

    let match = [];
    let result = [];

    while (match !== null) {
        match = rgx.exec(str);
        if (match !== null) {
            result.push(match['groups']);
        }
    }

    return result;
}

console.log(firstFnct(lista));

//2) creare una funzione che, partendo da lista, ritorni un array di oggetti che hanno come provenienza il supermercato: {nome: value, quantità: value, provenienza:value}

function secondFnct(str) {
    const rgx = /^(?<nome>.+);(?<quantita>\d+);(?<provenienza>Supermercato)$/gm;

    let match = [];
    let result = [];

    while (match !== null) {
        match = rgx.exec(str);
        if (match !== null) {
            result.push(match['groups']);
        }
    }

    return result;
}

console.log(secondFnct(lista));

//3) creare una funzione che, partendo da lista e da una stringa che indica la proveneienzz, ritorni un array di oggetti: {nome: value, quantità: value, provenienza:value}

function thirdFnct(str, fromStr) {
    const rgx = new RegExp(`^(?<nome>.+);(?<quantita>\\d+);(?<provenienza>${fromStr})$`, 'gmi'); //flag m guardo per linea, ^$ limiti per ogni linea e senza flag m farebbe tutta la stringa e non per linea

    let match = [];
    let result = [];

    while (match !== null) {
        match = rgx.exec(str);
        if (match !== null) {
            result.push(match['groups']);
        }
    }

    return result;
}

console.log(thirdFnct(lista, 'Macelleria'));

//4) creare una funzione che, partendo da lista e da un array di keys, ritorni un array di oggetti: {keys[0]: value, keys[1]: value, keys[2]: value}

function fourthFnct(str, keys) {
    const rgx = new RegExp(`^(?<${keys[0]}>.+);(?<${keys[1]}>\\d+);(?<${keys[2]}>.+)$`, 'gmi');

    let match = [];
    let result = [];

    while (match !== null) {
        match = rgx.exec(str);
        if (match !== null) {
            result.push(match['groups']);
        }
    }

    // while ((match = rgx.exec(str)) !== null) {
    //     result.push(match.groups);
    // }

    // return result;
}

console.log(fourthFnct(lista, ['pippo', 'pluto', 'paperino']));