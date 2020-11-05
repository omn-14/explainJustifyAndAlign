const body = document.querySelector('body');
const textJust = document.querySelector('.text-just');
const textAlign = document.querySelector('.text-align');

const pos = ['start', 'center', 'end'];

var just = 0;
var align = 0;

window.addEventListener('keydown', mover);

function mover(event) {
    var tecla = event.key;
    if(tecla=='ArrowUp') align--;
    if(tecla=='ArrowDown') align++;
    if(tecla=='ArrowRight') just++;
    if(tecla=='ArrowLeft') just--;

    just = verificar(just);
    align = verificar(align);
    console.log(just);
    console.log(align);
    
    colocarClasses(just, align);
    alterarTexto(just, align);
}

function verificar(value) {
    if(value<0) return 0;
    if(value>2) return 2;
    return value
}

function colocarClasses(just, align) {
    // console.log(just, align);
    // console.log(pos[just]);
    // console.log(pos[align]);
    body.classList = '';
    body.classList.add(`just-${pos[just]}`);
    body.classList.add(`align-${pos[align]}`);
}

function alterarTexto(just, align) {
    textJust.textContent = `justify-items: ${pos[just]}`;
    textAlign.textContent = `align-items: ${pos[align]}`;
}