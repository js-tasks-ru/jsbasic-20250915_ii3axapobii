function highlight(table) {
  Array.from(table.rows).forEach((row, indexRow) => {
    Array.from(row.cells).forEach((cell, indexCell) => {
        
      if (indexCell === 1 && cell.innerHTML < 18){ //проверка возраста. Если возраст < 18, зачеркиваем всю строку
        row.style = "text-decoration: line-through";    
      }
        
      if (indexCell === 2 && cell.innerHTML === 'm'){ //проверка гендера. Если гендер 'm', добавляем класс 'male'
        row.classList.add('male');
      } else if (indexCell === 2 && cell.innerHTML === 'f'){ //проверка гендера. Если гендер 'f', добавляем класс 'female'
          row.classList.add('female');
      }
        
      if (indexCell == 3 && cell.dataset.available === 'true'){ //проверка доступности. Если доступен, добавляем класс available
        row.classList.add('available');
      } else if (indexCell == 3 && cell.dataset.available === 'false'){ //проверка доступности. Если не доступен, добавляем класс unavailable
          row.classList.add('unavailable');
      } else if (indexRow != 0 && indexCell == 3 && !cell.hasAttribute('data-available')){ //проверка доступности. Если нет информации о доступности, скрываем строку
          row.setAttribute('hidden', 'true');
      }        
    })
  })
}
