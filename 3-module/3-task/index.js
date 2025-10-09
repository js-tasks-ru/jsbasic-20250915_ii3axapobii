function camelize(str) {
  let splitStrArr = str.split('-');
  for(let i = 1; i < splitStrArr.length; i++){
    splitStrArr[i] = `${splitStrArr[i][0].toUpperCase()}${splitStrArr[i].slice(1)}`;
  }
  return splitStrArr.join('')
}