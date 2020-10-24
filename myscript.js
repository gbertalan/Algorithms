"use strict";

function randomize() {
    let child = document.getElementById("#bubble-sort-random-button");
    let parent = child.parentNode;
    let negyzetek = parent.children[2].children;

    for (let index = 0; index < negyzetek.length; index++) {
        let text = (Math.random() * 100) - 50;
        text = Math.floor(text);
        negyzetek[index].value = text;
    }
}

function start() {
    let child = document.getElementById("#bubble-sort-start-button");
    let parent = child.parentNode;
    let negyzetek = parent.children[2].children;

    for (let index = 0; index < negyzetek.length; index++) {
        
        negyzetek[index].style = "background: grey;";
    }
}
