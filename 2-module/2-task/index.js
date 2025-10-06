function isEmpty(obj) {
  if(obj === null){
  return false      // в этом месте тест отрабатывает некорректно. Возвращается false, а тест этот результат не пропускает
  }
  let objAtributeCounter = 0;
  for (let key in obj){
    objAtributeCounter++;
  }
  return objAtributeCounter === 0;
}