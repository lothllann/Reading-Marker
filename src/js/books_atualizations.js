const Atualizations = () => {

    const btnIniciar = document.querySelector('[data-btn-atualizar]');
    const containerAtualizar = document.querySelector('[data-container-atualizar]');

    function ativarContainer(event) {
        event.preventDefault();
        containerAtualizar.classList.toggle('ativo')
        btnIniciar.classList.toggle('ativo')
        containerLidos.classList.remove('ativo')
        containerProx.classList.remove('ativo')
        containerAtual.classList.remove('ativo')
    }

    btnIniciar.addEventListener('click', ativarContainer)


    const btnChamarAtual = document.querySelector('[data-btnA-init-atual]')
    const btnChamarLidos = document.querySelector('[data-btnL-init-lidos]')
    const btnChamarProx = document.querySelector('[data-btnP-init-prox]')

    const containerAtual = document.querySelector('[data-container-att-atual]')
    const containerLidos = document.querySelector('[data-container-att-lidos]')
    const containerProx = document.querySelector('[data-container-att-prox]')

    const option1 = 'data-btnA-init-atual';
    const option2 = 'data-btnL-init-lidos';
    const option3 = 'data-btnP-init-prox';



    function show(event) {
        event.preventDefault();
        let btnn = event.target

        if (!!btnn.hasAttribute(option1)) {
            containerAtual.classList.toggle('ativo')
            containerLidos.classList.remove('ativo')
            containerProx.classList.remove('ativo')
        } else
        if (!!btnn.hasAttribute(option2)) {
            containerLidos.classList.toggle('ativo')
            containerProx.classList.remove('ativo')
            containerAtual.classList.remove('ativo')
        } else
        if (!!btnn.hasAttribute(option3)) {
            containerProx.classList.toggle('ativo')
            containerAtual.classList.remove('ativo')
            containerLidos.classList.remove('ativo')
        }
    }

    btnChamarAtual.addEventListener('click', show)
    btnChamarLidos.addEventListener('click', show)
    btnChamarProx.addEventListener('click', show)

    const btnChooseImage = document.querySelector('[data-choose-capa]')
    const btnSave = document.querySelector('[data-btn-save]')
    const containerChooseImage = document.querySelector('[data-show-book]')

    function growUp(event) {
        event.preventDefault();
        containerAtual.classList.toggle('grow')
        containerLidos.classList.toggle('grow')
        containerProx.classList.toggle('grow')
        containerChooseImage.classList.toggle('ativo')

    }

    function save(event) {
        event.preventDefault();
        containerAtual.classList.remove('grow')
        containerLidos.classList.remove('grow')
        containerProx.classList.remove('gorw')
    }

    btnChooseImage.addEventListener('click', growUp)
    btnSave.addEventListener('click', save)

}

export default Atualizations;