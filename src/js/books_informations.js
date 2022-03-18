const Informations = () => {

    const listaDeBtns = document.querySelectorAll('.navigation_buttons button')

    const containerLidos = document.querySelector('[data-container-lidos]')
    const containerAtual = document.querySelector('[data-container-atual]')
    const containerProx = document.querySelector('[data-container-prox]')

    
   
for (let i = 0; i < listaDeBtns.length; i++) {
    const btn = listaDeBtns[i];
    
    btn.onclick = (event)=>{
       event.preventDefault();
       mostrarView(btn);
    }
}


function mostrarView(button){
    
    button.classList.add('btn_ativo')

    for (let i = 0; i < listaDeBtns.length; i++) {
        const e = listaDeBtns[i];
        if (e != button) {
           e.classList.remove('btn_ativo') 
        }
    }
        const livroAtual = "data-btn-atual";
        const livrosLidos = "data-btn-lidos";
        const proximosLivros = "data-btn-proximo";

        if (button.hasAttribute(livroAtual)) {
            containerLidos.classList.remove('ativo')
            containerAtual.classList.add('ativo')
            containerProx.classList.remove('ativo')
            

        } else if (button.hasAttribute(livrosLidos)) {
            containerLidos.classList.add('ativo')
            containerAtual.classList.remove('ativo')
            containerProx.classList.remove('ativo')

        } else if (button.hasAttribute(proximosLivros)) {
            containerLidos.classList.remove('ativo')
            containerAtual.classList.remove('ativo')
            containerProx.classList.add('ativo')

        }
    
}


}

export default Informations;