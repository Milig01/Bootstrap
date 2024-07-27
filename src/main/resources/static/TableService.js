/*
этот класс содержит методы для вставки, удаления и замены строки в таблице
а также для заполнения заголовка
 */
import {FactoryElements} from "./factoryElements.js";

export class TableService {
    constructor() {
        this.tableBody = document.getElementById('tableBody');
        this.factoryElements = new FactoryElements();
    }

    addListUsersInTable(users) {
        for (let user of users) this.addUserInTable(user);
    }

    addUserInTable(user) {
        let tr = this.convertUserInRaw(user);
        this.tableBody.append(tr);
    }

    updateUserInTable(user) {
        let updateUser = this.convertUserInRaw(user);
        let oldUser = document.getElementById(`user${user.id}`);
        oldUser.replaceWith(updateUser);
    }

    deleteUserWithTable(user) {
        let deleteUser = document.getElementById(`user${user.id}`);
        deleteUser.remove();
    }

    convertUserInRaw(user) {
        let roles = user.roles.map(item => item.role.slice(5)).reduce((accumulator, item) => accumulator + item + ' ', '');
        let editButton = this.factoryElements.buttonCreate('btn btn-primary p-1', 'Edit', user);
        let deleteButton = this.factoryElements.buttonCreate('btn btn-danger p-1', 'Delete', user);
        let tdArray = this.factoryElements.tdArrayCreate(
            user.id, user.firstName, user.lastName, user.age, user.email, roles);
        tdArray.push(this.factoryElements.tdCreateInsertElem(editButton));
        tdArray.push(this.factoryElements.tdCreateInsertElem(deleteButton));

        return this.factoryElements.trCreate(tdArray, user.id);
    }

    createHead(user) {
        let pageHead = document.getElementById('pageHeader');
        let roles = user.roles.map(item => item.role.slice(5)).reduce((accumulator, item) => accumulator + item + ' ', '');
        let h4_1 = this.factoryElements.h4Create('fw-bold', user.email);
        let h4_2 = this.factoryElements.h4Create('px-2', `with roles: ${roles}`);
        let div = this.factoryElements.divCreate('d-flex', h4_1, h4_2);
        pageHead.prepend(div);
    }

    createUserPage(user) {
        let table = document.getElementById('tableBodyInPageUser');
        let roles = user.roles.map(item => item.role.slice(5)).reduce((accumulator, item) => accumulator + item + ' ', '');
        let tdArray = this.factoryElements.tdArrayCreate(
            user.id, user.firstName, user.lastName, user.age, user.email, roles);
        let tr = this.factoryElements.trCreate(tdArray, `user${user.id}`);
        table.append(tr);
    }

    createLogout() {
        let button = document.getElementById('logout');
        button.onclick = async () => {
            await fetch('/logout');
            window.location.href = '/login';
        };
    }
}