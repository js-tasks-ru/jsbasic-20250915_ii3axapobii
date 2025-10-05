function truncate(str, maxlength) {
  if(str.length > maxlength){
    let result = str.slice(0, maxlength) + '…';
    return result;
  }
  else return str;
}

let testStr = 'Вот, что мне хотелось бы сказать на эту тему';
let testRsalt = truncate(testStr, 20);
console.log(testRsalt);

// let str = 'Вот, что мне хотелось бы сказать на эту тему';
// let result = str.slice(0, 20) + '…';
// console.log(result)