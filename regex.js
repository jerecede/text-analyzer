//let re1 = new RegExp("abc");
//let re2 = /abg/;
// flag: g(global), u(unicode), i(insensitive, chissene del maiusc e minusc), !i(sensitive)
//piu spiegazioni trovi su eloquent javascript libro

const testStr = "Mi Mi chiamo pippo, ho 7 fratelli, mi piace il numero 5 e vado spesso al parco che dista 8 km da casa mià";

const rgx = /\d+/;
const rgx2 = /\d+/g;
const rgx3 = /[\w|\p{L}]+/gu;

// console.log(rgx.test(testStr));

// console.log(testStr.match(rgx));
// console.log(testStr.match(rgx2));
// console.log(testStr.match(rgx3));

// console.log(rgx3.exec(testStr));
// console.log(rgx2.exec(testStr));
// console.log(rgx2.exec(testStr));
// console.log(rgx2.exec(testStr));
// console.log(rgx2.exec(testStr));
//invece di fare questo piuttosto...

// let array;
// let result = [];
// while ((array = rgx.exec(testStr)) !== null) {
//     // result.push(array[0]);
//     result.push({value: array[0], index: array['index']}) //qui oltre a mettere i digits trovati, indica anche il loro index. gli array sono oggetti con key come numeri! per questo c'è index 'index'
// }
// console.log(result);
//MATCH usa questo

//guardare github di andrea!!!

//usa regex101.com

// const testStr2 = "Mi chiamo pippo, ho 7 fratelli, 5 sorelle e 3 cani";

// const rgx4 = /(?<numero>\d+) (?<parola>\w+)/g;

// let array2 = [];
// let result2 = [];

// while(array2 !== null){
//     array2 = rgx4.exec(testStr2);
//     if(array2 !== null){
//         result2.push(array2['groups']);
//     }
// }

// console.log(result2);