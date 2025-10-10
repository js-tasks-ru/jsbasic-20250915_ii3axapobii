function showSalary(users, age) {
  return users
    .filter(user => user.age <= age) // фильтруем все объекты в массиве users по возрасту
    .map(user => `${user.name}, ${user.balance}`) // преображаем каждый объект массива users в строку "name, balance"
    .join('\n') // джойним массив строк "name, balance" в строку, чтобы каждая строка "name, balance" начиналась с новой строки
}