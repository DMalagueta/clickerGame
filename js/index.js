document.addEventListener('DOMContentLoaded', init, false);

function init(){

    // VARIAVEIS GLOBAIS 
    let clickBtn = document.querySelector('#clickBtn');
    let clickNr = 0;
    let span = document.createElement('span');
    let p = document.querySelector('p')

    clickBtn.addEventListener('click', clicking, false);
    resetBtn.addEventListener('click', reseting, false);

    
    span.textContent = `${clickNr} €`;
    p.insertBefore(span, p.lastElementChild);

    // FUNCIONALIDADES
    function showWorker(){
        if (clickNr => 20) {
            
        }
    }

    function reseting(e){
        e.preventDefault();
        clickNr = 0;
        span.textContent = `${clickNr} €`;
    }

    function clicking(e){
        e.preventDefault();
        clickNr += 1;
        span.textContent = `${clickNr} €`;
        p.insertBefore(span, p.lastElementChild);
    }




}