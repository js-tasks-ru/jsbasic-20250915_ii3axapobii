/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) { //сонструктор получает на вход массив объектов из которых составляются строки таблицы
    this.employees = rows;
    this.elem = this.render();
  }

  render() {
    this.elem = document.createElement('TABLE'); //создание таблицы и заголовка таблицы
    this.elem.innerHTML = ` 
        <thead>
          <tr>
              <th>Имя</th>
              <th>Возраст</th>
              <th>Зарплата</th>
              <th>Город</th>
              <th></th>
          </tr>
        </thead>
        <tbody>
        </tbody>`;

    this.elemBody = document.createElement('TBODY'); //создание тела таблицы из массива объектов, полученного на вход + столбца с кнопками удаления
    this.elemBody.innerHTML = this.employees
      .map(({ name, age, salary, city }) =>
        `<tr>
            <td>${name}</td>
            <td>${age}</td>
            <td>${salary}</td>
            <td>${city}</td>
            <td><button class = 'row-remove-btn'>X</button></td>
          </tr>`
      )
      .join('');

    this.elem.append(this.elemBody); //вставка тела таблицы в таблицу

    this.elem.onclick = function (event) { //назначение обработчика на клик по кнопке через делегирование
      if (event.target.getAttribute('class') === 'row-remove-btn') {
        event.target.closest('tr').remove();
      }
    }

    return this.elem;
  }

}
