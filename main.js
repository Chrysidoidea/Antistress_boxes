let square = document.querySelectorAll('.box');
let oval = document.querySelectorAll('.oval');
let corcle = document.querySelectorAll('.circle');


function random(num) {
    return Math.floor(Math.random() * (num + 1));
}

function bgChange(x) {
    let bgColor = 'rgb('+ random(255) +', '+ random(255) +', '+ random(255) +')';
    x.target.style.backgroundColor = bgColor;
}



for (i = 0; i < square.length; i++) {

    square[i].addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = bgChange(e);
})
}
for (i = 0; i < square.length; i++) {

    square[i].addEventListener('click', function(e) {
        e.target.style.backgroundColor = 'black';
})
}
