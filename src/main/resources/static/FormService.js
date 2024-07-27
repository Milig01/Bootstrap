/*
    этот класс инициализирует страницу, получает данные с сервера и заполняет таблицу и заголовок
    а также устанавливает все обработчики для кнопок и форм
 */

import {UserController} from "./UserController.js";
import {TableService} from "./TableService.js";

export class FormService {
    constructor() {
        this.userController = new UserController();
        this.tableService = new TableService();
    }

    async getAll() {
        let users = await this.userController.getAll();
        this.tableService.addListUsersInTable(users);
    }

    addUser() {
        let form = document.getElementById('addForm');
        let addButton = document.getElementById('addButton');
        addButton.onclick = async () => {
            let user = await this.userController.addUser(form);
            this.tableService.addUserInTable(user);
            window.location.href = '/admin';
        };
    }

    updateUser() {
        let form = document.getElementById('editForm');
        let editButton = document.getElementById('editButton');
        editButton.onclick = async () => {
            let user = await this.userController.updateUser(form);
            this.tableService.updateUserInTable(user);
        };

        let editModal = document.getElementById('EditModal');
        editModal.addEventListener('show.bs.modal', (e) => {
            let user = e.relatedTarget.user;
            form.elements.fieldsetEdit.elements.id_.value = user.id;
            form.elements.id.value = user.id;
            form.elements.firstName.value = user.firstName;
            form.elements.lastName.value = user.lastName;
            form.elements.age.value = user.age;
            form.elements.email.value = user.email;
            form.elements.roles.selected = user.roles;
        });
    }

    deleteUser() {
        let form = document.getElementById('deleteForm');
        let deleteButton = document.getElementById('deleteButton');
        deleteButton.onclick = async () => {
            let user = await this.userController.deleteUser(form);
            this.tableService.deleteUserWithTable(user);
        };

        let deleteModal = document.getElementById('DeleteModal');
        deleteModal.addEventListener('show.bs.modal', (e) => {
            let user = e.relatedTarget.user;
            form.elements.email.value = user.email;
            form.elements.id.value = user.id;
            form.elements.fieldsetDelete.elements.id_.value = user.id;
            form.elements.fieldsetDelete.elements.firstName.value = user.firstName;
            form.elements.fieldsetDelete.elements.lastName.value = user.lastName;
            form.elements.fieldsetDelete.elements.age.value = user.age;
            form.elements.fieldsetDelete.elements.email_.value = user.email;
            form.elements.fieldsetDelete.elements.roles.selected = user.roles;
        });
    }

    async createHeadAdminPage() {
        let admin = await this.userController.getAdmin();
        this.tableService.createHead(admin);
        this.tableService.createUserPage(admin);
        this.tableService.createLogout();
    }

    async createHeadUserPage() {
        let user = await this.userController.getUser();
        this.tableService.createHead(user);
        this.tableService.createUserPage(user);
        this.tableService.createLogout();
    }
}