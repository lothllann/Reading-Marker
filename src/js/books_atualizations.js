const Atualizations = () => {

    const btnIniciar = document.querySelector('[data-btn-atualizar]');
    const containerAtualizar = document.querySelector('[data-container-atualizar]');

    function ativarContainer(event) {
        event.preventDefault();
        containerAtualizar.classList.toggle('ativo')
        btnIniciar.classList.toggle('ativo')
    }


    btnIniciar.addEventListener('click', ativarContainer)
}

export default Atualizations;