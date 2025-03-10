//let re1 = new RegExp("abc");
//let re2 = /abg/;
// flag: g(global), u(unicode), i(insensitive, chissene del maiusc e minusc), !i(sensitive)
//piu spiegazioni trovi su eloquent javascript libro

const testStr = "Mi chiamo pippo, ho 7 fratelli, mi piace il numero 5 e vado spesso al parco che dista 8 km da casa mia";

const rgx = /\d+/;
const rgx2 = /\d+/g;

console.log(rgx.test(testStr));

console.log(testStr.match(rgx));
console.log(testStr.match(rgx2));

// console.log(rgx.exec(testStr));
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