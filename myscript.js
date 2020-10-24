let i = 0;
function randomize() {
    let child = document.getElementById("#bubble-sort-random-button");
    let parent = child.parentNode;
    let negyzet = parent.children[1].children;

    for (let index = 0; index < negyzet.length - 1; index++) {
        let text = (Math.random() * 100) - 50;
        text = Math.floor(text);
        negyzet[index].value = text;
    }

}