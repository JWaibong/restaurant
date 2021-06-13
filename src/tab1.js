import {createTab2, } from './tab2.js';
import {createTab3, } from './tab3.js';
function initializePage(){
    const body = document.querySelector("body");

    const header = document.createElement("h1");
    header.classList.add("header");

    const home = document.createElement("div");
    home.textContent = "Home";
    home.classList.add("tab");
    home.addEventListener("click", e =>{
        reset();
        createTab1();
    });

    const menu = document.createElement("div");
    menu.textContent = "Menu";
    menu.classList.add("tab");
    menu.addEventListener("click", e => {
        reset();
        createTab2();
    });
    
    const contact = document.createElement("div");
    contact.textContent = "Contact Us";
    contact.classList.add("tab");
    contact.addEventListener("click", e => {
        reset();
        createTab3();
    });


    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);
    body.appendChild(header);


    const container = document.createElement("div");
    const content = document.createElement("div");
    container.classList.add("container");
    content.setAttribute("id", "content");

    container.appendChild(content);
    body.appendChild(container);





}

function reset(){
    const content = document.querySelector("#content");
    content.textContent = " ";
}

function createTab1(){
    const content = document.querySelector("#content");
    content.textContent = "hello jdasldjlkajrlasjasldjalsdjlaksdjlaskdjaslkdklajsd";



}
export{
    initializePage,
    createTab1,
};