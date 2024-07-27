/*
этот скрипт единственный содержится на странице admin_page и инициализирует страницу
 */

import {FormService} from "./FormService.js";

document.addEventListener('DOMContentLoaded', async () => await main());

async function main() {
    let formService = new FormService();
    await formService.getAll();
    await formService.createHeadAdminPage();
    formService.addUser();
    formService.updateUser();
    formService.deleteUser();
}