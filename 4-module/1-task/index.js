function makeFriendsList(friends) {
  let friendsStr = friends.map(item => `${item.firstName} ${item.lastName}`); //преобразование маасива объектов к массиву строк
  let friendsUl = document.createElement('UL'); //создание ненумерованного списка
  document.body.appendChild(friendsUl); //добавление списка в DOM
  for (let friendItem of friendsStr){
    let friendLi = document.createElement('LI'); //создание позиции списка. Пока находится только в памяти и не выводится
    friendLi.textContent = friendItem; //присвоение позиции списка значения элемента массива
    friendsUl.appendChild(friendLi); //добавление позиции в список
  }
}