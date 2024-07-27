/*
    этот класс создает html элементы для приложения и устанавливает им атрибуты
    кнопки, заголовки и строки для таблицы
*/
export class FactoryElements {
    trCreate(tdArray, id) {
        let tr = document.createElement('tr');
        tr.setAttribute('id', `user${id}`);
        tdArray.forEach(value => tr.append(value));
        return tr;
    }

    tdArrayCreate(...textArray) {
        return textArray.map(item => this.tdCreateInsertText(item));
    }

    tdCreateInsertText(text) {
        let td = document.createElement('td');
        td.insertAdjacentText('afterbegin', text);
        return td;
    }

    tdCreateInsertElem(elem) {
        let td = document.createElement('td');
        td.append(elem);
        return td;
    }

    buttonCreate(class_, text, user) {
        let button = document.createElement('button');
        button.setAttribute('class', class_);
        button.setAttribute('type', 'button');
        button.setAttribute('data-bs-toggle', 'modal');
        button.setAttribute('data-bs-target', `#${text}Modal`);
        button.insertAdjacentText('afterbegin', text);
        button.user = user;
        return button;
    }

    h4Create(class_, text) {
        let h4 = document.createElement('h4');
        h4.setAttribute('class', class_);
        h4.insertAdjacentText('afterbegin', text);
        return h4;
    }

    divCreate(class_, ...elements) {
        let div = document.createElement('div');
        div.setAttribute('class', class_);
        elements.forEach(value => div.append(value));
        return div;
    }
}