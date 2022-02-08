const Informations = () => {
    const btnLidos = document.querySelector('[data-btn-lidos]')
    const btnAtual = document.querySelector('[data-btn-atual]')
    const btnProx = document.querySelector('[data-btn-proximo]')

    const containerLidos = document.querySelector('[data-container-lidos]')
    const containerAtual = document.querySelector('[data-container-atual]')
    const containerProx = document.querySelector('[data-container-prox]')

    console.log(containerLidos)


    function btnLidosLayout(event) {
        event.preventDefault();

        containerLidos.classList.add('ativo')
        containerAtual.classList.remove('ativo')
        containerProx.classList.remove('ativo')

        btnLidos.classList.add('btn_ativo')
        btnAtual.classList.remove('btn_ativo')
        btnProx.classList.remove('btn_ativo')
    }

    function btnAtualLayout(event) {
        event.preventDefault();

        containerLidos.classList.remove('ativo')
        containerAtual.classList.add('ativo')
        containerProx.classList.remove('ativo')

        btnLidos.classList.remove('btn_ativo')
        btnAtual.classList.add('btn_ativo')
        btnProx.classList.remove('btn_ativo')

    }

    function btnProxLayout(event) {
        event.preventDefault();

        containerLidos.classList.remove('ativo')
        containerAtual.classList.remove('ativo')
        containerProx.classList.add('ativo')

        btnLidos.classList.remove('btn_ativo')
        btnAtual.classList.remove('btn_ativo')
        btnProx.classList.add('btn_ativo')

    }

    btnLidos.addEventListener('click', btnLidosLayout);
    btnAtual.addEventListener('click', btnAtualLayout);
    btnProx.addEventListener('click', btnProxLayout);
}

export default Informations;