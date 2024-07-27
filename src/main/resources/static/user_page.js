/*
этот скрипт используется на странице user_page
 */
import {FormService} from "./FormService.js";

document.addEventListener('DOMContentLoaded', async () => await main());

async function main() {
    let formService = new FormService();
    await formService.createHeadUserPage();
}