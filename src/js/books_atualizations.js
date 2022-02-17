const Atualizations = () => {

    const btnIniciar = document.querySelector('[data-btn-atualizar]');
    const containerAtualizar = document.querySelector('[data-container-atualizar]');

    function ativarContainer(event) {
        event.preventDefault();
        containerAtualizar.classList.toggle('ativo')
        btnIniciar.classList.toggle('ativo')
        btnSair.classList.toggle('ativo')
        containerLidos.classList.remove('ativo')
        containerProx.classList.remove('ativo')
        containerAtual.classList.remove('ativo')
        btnSair.classList.add('firstMove')
    }

    btnIniciar.addEventListener('click', ativarContainer)


    const btnChamarAtual = document.querySelector('[data-btnA-init-atual]')
    const btnChamarLidos = document.querySelector('[data-btnL-init-lidos]')
    const btnChamarProx = document.querySelector('[data-btnP-init-prox]')
    const btnSair = document.querySelector('[data-btn-sair]')

    const containerAtual = document.querySelector('[data-container-att-atual]')
    const containerLidos = document.querySelector('[data-container-att-lidos]')
    const containerProx = document.querySelector('[data-container-att-prox]')

    const option1 = 'data-btnA-init-atual';
    const option2 = 'data-btnL-init-lidos';
    const option3 = 'data-btnP-init-prox';

    function decrease() {
        containerAtual.classList.remove('grow')
        containerLidos.classList.remove('grow')
        containerProx.classList.remove('grow')
        containerChooseImage.classList.remove('ativo')
        containerChooseImage2.classList.remove('ativo')
        containerChooseImage3.classList.remove('ativo')
            //     if(!!btnSair.classList.contains('thirdMove')){
            //     setTimeout(()=>{
            //         btnSair.classList.add('fourthMove');
            //     },1)
            // }

    }

    function show(event) {
        event.preventDefault();
        let btnn = event.target

        if (!!btnn.hasAttribute(option1)) {
            containerAtual.classList.add('ativo')
            containerLidos.classList.remove('ativo')
            containerProx.classList.remove('ativo')
            btnSair.classList.remove('firstMove')
            btnSair.classList.add('secondMove')
            setTimeout(() => {
                btnSair.classList.add('checkpoint')
            }, 200)
            decrease()


        } else
        if (!!btnn.hasAttribute(option2)) {
            containerLidos.classList.add('ativo')
            containerProx.classList.remove('ativo')
            containerAtual.classList.remove('ativo')
            btnSair.classList.remove('firstMove')
            btnSair.classList.add('secondMove')
            setTimeout(() => {
                btnSair.classList.add('checkpoint')
            }, 200)
            decrease()


        } else
        if (!!btnn.hasAttribute(option3)) {
            containerProx.classList.add('ativo')
            containerAtual.classList.remove('ativo')
            containerLidos.classList.remove('ativo')
            btnSair.classList.remove('firstMove')
            btnSair.classList.add('secondMove')
            setTimeout(() => {
                btnSair.classList.add('checkpoint')
            }, 200)
            decrease()


        }
    }

    btnChamarAtual.addEventListener('click', show)
    btnChamarLidos.addEventListener('click', show)
    btnChamarProx.addEventListener('click', show)

    const btnChooseImage = document.querySelector('[data-choose-capa]')
    const btnChooseImage2 = document.querySelector('[data-choose-capa2]')
    const btnChooseImage3 = document.querySelector('[data-choose-capa3]')

    const btnSave = document.querySelector('[data-btn-save]')

    const containerChooseImage = document.querySelector('[data-show-book]')
    const containerChooseImage2 = document.querySelector('[data-show-book2]')
    const containerChooseImage3 = document.querySelector('[data-show-book3]')

    function growUp(event) {
        event.preventDefault();
        containerAtual.classList.toggle('grow')
        containerLidos.classList.toggle('grow')
        containerProx.classList.toggle('grow')
        containerChooseImage.classList.toggle('ativo')
        containerChooseImage2.classList.toggle('ativo')
        containerChooseImage3.classList.toggle('ativo')


    }


    function btnMoviment(event) {
        event.preventDefault();
        if (!!btnSair.classList.contains('checkpoint')) {
            btnSair.classList.remove('secondMove')
            btnSair.classList.remove('fourthMove')

            setTimeout(function() {
                btnSair.classList.remove('checkpoint')
                btnSair.classList.add('thirdMove')
            }, 1);

        } else if (!btnSair.classList.contains('checkpoint')) {
            btnSair.classList.remove('secondMove');
            setTimeout(() => {
                btnSair.classList.add('fourthMove');
            }, 1)
            btnSair.classList.remove('thirdMove');

            setTimeout(function() {
                btnSair.classList.add('checkpoint')
            }, 200);
        }


    }

    function save(event) {
        event.preventDefault();

    }

    btnChooseImage.addEventListener('click', growUp)
    btnChooseImage.addEventListener('click', btnMoviment)

    btnChooseImage2.addEventListener('click', growUp)
    btnChooseImage2.addEventListener('click', btnMoviment)

    btnChooseImage3.addEventListener('click', growUp)
    btnChooseImage3.addEventListener('click', btnMoviment)

    btnSave.addEventListener('click', save)

}

export default Atualizations;