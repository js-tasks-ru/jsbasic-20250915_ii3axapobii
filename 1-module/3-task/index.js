function ucFirst(str) {
  if(str === ''){
  return str;
}
else{
  str = str.toUpperCase()[0] + str.slice(1);
  return str;
}
}
