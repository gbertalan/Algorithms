let i = 0;
function randomize() {
    let child = document.getElementById("#bubble-sort-random-button");
    let parent = child.parentNode;
    let negyzet = parent.children[1].children;
    negyzet[4].style = "background: blue";
    console.log(" igen " + i);
    ++i;

    let text = (Math.random() * 100) - 50;
    text = Math.floor(text);
    negyzet[5].value = text;
}