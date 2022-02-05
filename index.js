// how to write the function with a for of loop:
// function loopThroughAndFind(array, finder) {
//     let win = undefined;
//     for (let item of array) {
//         if(finder(item) === true) {
//             win = item.year;
//             break;
//         }
//     }
//     return win;
// }
// function isW(game){
//     return game.result === 'W';
// }
// loopThroughAndFind(record, isW);
// it returns the year!!!


//how to write the function with .find(), but it finds
//the whole record not just the year:
// function isW(game){
//     return game.result === 'W';
//}
// letFoundItemYear = record.find(isW);
//LOG: {year: '2015', result: 'W'}

function superbowlWin(record) {
    return record.result === 'W';
}
let foundRecordYear = record.find(superbowlWin);
console.log(foundRecordYear);






