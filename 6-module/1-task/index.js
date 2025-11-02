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
  constructor(rows) {
    this.employees = rows;
    this.elem = this.render();
  }
  render() {
    this.elem = document.createElement('TABLE');
    this.elemBody = document.createElement('TBODY');

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
    
    this.elemBody.innerHTML = this.employees
      .map(({ name, age, salary, city }) =>
        `<tr>
            <td>${name}</td>
            <td>${age}</td>
            <td>${salary}</td>
            <td>${city}</td>
          </tr>`
      )
      .join('');

    this.elem.append(this.elemBody);

    return this.elem;
  }

}
