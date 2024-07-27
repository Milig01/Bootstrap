/*
этот класс отправляет запросы на сервер и получает ответы в формате json
 */
export class UserController {
    async getAdmin() {
        let response = await fetch('admin/getAdmin');
        return await response.json();
    }

    async getUser() {
        let response = await fetch('user/getUser');
        return await response.json();
    }

    async getAll(){
        let response = await fetch('admin/getAll');
        return await response.json();
    }

    async addUser(form) {
        let response = await fetch('admin/addUser', {method: 'POST', body: new FormData(form)});
        return await response.json();
    }

    async updateUser(form){
        let response = await fetch('admin/updateUser', {method: 'POST', body: new FormData(form)});
        return await response.json();
    }

    async deleteUser(form){
        let response = await fetch('admin/deleteUser', {method: 'POST', body: new FormData(form)});
        return await response.json();
    }
}