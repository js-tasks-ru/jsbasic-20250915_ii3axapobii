/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
text = 'Vilan Zar'
function isValid(name = text) {
  return name && name.length >= 4 && !name.includes(' ');
}


function sayHello() {
  let userName = prompt('Введите ваше имя');
  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
