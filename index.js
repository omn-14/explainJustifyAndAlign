const body = document.querySelector('body');
const textJust = document.querySelector('.text-just');
const textAlign = document.querySelector('.text-align');

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
    
    colocarClasses(just, align);
    alterarTexto(just, align);
}

function verificar(value) {
    if(value<0) value=0;
    if(value>2) value=2;
    return value;
}

function colocarClasses(just, align) {
    for(let i = 0; i < 3; i++) {
        body.classList = '';
        
        body.classList.add(`just-${just}`);
        body.classList.add(`align-${align}`);
    }
    console.log(just, align);
}

function alterarTexto(just, align) {
    const pos = ['start', 'center', 'end'];
    for(let i = 0; i < 3; i++) {
        if(just==i) justText = pos[i];
        if(align==i) alignText = pos[i];
    }
    textJust.textContent = `justify-items: ${justText}`;
    textAlign.textContent = `align-items: ${alignText}`;
}