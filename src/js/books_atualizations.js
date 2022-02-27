const Atualizations = () => {

    //BOTÕES
    const btnIniciar = document.querySelector('[data-btn-atualizar]');
    const btnChamarAtual = document.querySelector('[data-btn-init-atual]')
    const btnChamarLidos = document.querySelector('[data-btn-init-lidos]')
    const btnChamarProx = document.querySelector('[data-btn-init-prox]')
    const btnSair = document.querySelector('[data-btn-sair]')
    const btnChooseImage = document.querySelector('[data-choose-capa]')
    const btnChooseImage2 = document.querySelector('[data-choose-capa2]')
    const btnChooseImage3 = document.querySelector('[data-choose-capa3]')
    const btnSave = document.querySelector('[data-btn-save]')


    //CONTAINERS
    const containerAtualizar = document.querySelector('[data-container-atualizar]');
    const containerAtual = document.querySelector('[data-container-att-atual]')
    const containerLidos = document.querySelector('[data-container-att-lidos]')
    const containerProx = document.querySelector('[data-container-att-prox]')
    const containerChooseImage = document.querySelector('[data-show-book]')
    const containerChooseImage2 = document.querySelector('[data-show-book2]')
    const containerChooseImage3 = document.querySelector('[data-show-book3]')



    //FUNÇÕES
    function ativarContainer(event) {
        event.preventDefault();
        btnSair.classList.add('firstMove')
        btnIniciar.classList.toggle('ativo')
        btnSair.classList.toggle('ativo')
        btnChamarAtual.classList.remove('ativo')
        btnChamarLidos.classList.remove('ativo')
        btnChamarProx.classList.remove('ativo')
        btnSair.classList.remove('slideLeft')
        btnSair.classList.remove('cp2')
        btnSair.classList.remove('cp3')
        btnSair.classList.remove('backToStart')
        btnSair.classList.remove('backToStart2')
        btnSair.classList.remove('secondMove')
        btnSair.classList.remove('thirdMove')
        btnSair.classList.remove('fourthMove')


        containerAtualizar.classList.toggle('ativo')
        containerAtualizar.classList.remove('slideLeft')
        containerLidos.classList.remove('ativo')
        containerProx.classList.remove('ativo')
        containerAtual.classList.remove('ativo')


    }

    function decrease() {
        containerAtual.classList.remove('grow')
        containerLidos.classList.remove('grow')
        containerProx.classList.remove('grow')
        containerChooseImage.classList.remove('ativo')
        containerChooseImage2.classList.remove('ativo')
        containerChooseImage3.classList.remove('ativo')
        btnSair.classList.remove('backToStart')
        btnSair.classList.remove('backToStart2')
        btnSair.classList.remove('cp3')

    }

    const option1 = 'data-btn-init-atual';
    const option2 = 'data-btn-init-lidos';
    const option3 = 'data-btn-init-prox';

    function showTimeout() {

        setTimeout(() => {
            btnSair.classList.add('secondMove')
        }, 1)

        setTimeout(() => {
            btnSair.classList.add('checkpoint')
        }, 200)
        decrease()
    }

    function show(event) {
        event.preventDefault();
        let btnn = event.target

        if (!!btnn.hasAttribute(option1)) {
            btnChamarAtual.classList.add('ativo')
            btnChamarLidos.classList.remove('ativo')
            btnChamarProx.classList.remove('ativo')

            containerAtual.classList.add('ativo')
            containerLidos.classList.remove('ativo')
            containerProx.classList.remove('ativo')
            btnSair.classList.remove('firstMove')
            showTimeout()


        } else
        if (!!btnn.hasAttribute(option2)) {
            btnChamarLidos.classList.add('ativo')
            btnChamarAtual.classList.remove('ativo')
            btnChamarProx.classList.remove('ativo')

            containerLidos.classList.add('ativo')
            containerProx.classList.remove('ativo')
            containerAtual.classList.remove('ativo')
            btnSair.classList.remove('firstMove')

            showTimeout()


        } else
        if (!!btnn.hasAttribute(option3)) {
            btnChamarProx.classList.add('ativo')
            btnChamarAtual.classList.remove('ativo')
            btnChamarLidos.classList.remove('ativo')

            containerProx.classList.add('ativo')
            containerAtual.classList.remove('ativo')
            containerLidos.classList.remove('ativo')
            btnSair.classList.remove('firstMove')

            showTimeout()


        }
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

    function aux() {
        btnChamarProx.classList.remove('ativo')
        btnChamarAtual.classList.remove('ativo')
        btnChamarLidos.classList.remove('ativo')
        btnSair.classList.remove('checkpoint')

    }





    function quit(event) {
        event.preventDefault();

        if (!!containerAtual.classList.contains('ativo')) {
            var resultado = containerAtual
        } else if (!!containerLidos.classList.contains('ativo')) {
            var resultado = containerLidos
        } else if (!!containerProx.classList.contains('ativo')) {
            var resultado = containerProx
        } else {
            var resultado = containerAtual
        }
        const containerDescoberto = resultado


        const containerCerto = containerDescoberto

        if (!containerCerto.classList.contains('ativo')) {
            if (!!btnSair.classList.contains('backToStart') || !!btnSair.classList.contains('backToStart2')) {
                btnSair.classList.remove('backToStart')
                btnSair.classList.remove('backToStart2')
                btnSair.classList.remove('cp3')

                setTimeout(() => {
                    btnSair.classList.add('cp2')
                }, 1)
            }

            setTimeout(() => {
                btnSair.classList.add('slideLeft')
            }, 150)
            containerAtualizar.classList.add('slideLeft')
            btnIniciar.classList.remove('ativo')
            setTimeout(() => {
                containerAtualizar.classList.remove('ativo')
                btnSair.classList.remove('ativo')

            }, 600)




        } else if (!!btnSair.classList.contains('secondMove') ||
            !!btnSair.classList.contains('fourthMove')) {
            aux()
            containerCerto.classList.remove('ativo')
            btnSair.classList.remove('secondMove')
            btnSair.classList.remove('fourthMove')
            setTimeout(() => {
                btnSair.classList.add('backToStart')
            }, 1)


        } else if (!!btnSair.classList.contains('thirdMove')) {
            aux()
            containerCerto.classList.remove('ativo')
            btnSair.classList.remove('thirdMove')
            setTimeout(() => {
                btnSair.classList.add('cp3')
            }, 1)
            btnSair.classList.add('backToStart2')

        }


    }

    function save(event) {
        event.preventDefault();

    }

    function growUp(event) {
        event.preventDefault();
        containerAtual.classList.toggle('grow')
        containerLidos.classList.toggle('grow')
        containerProx.classList.toggle('grow')
        containerChooseImage.classList.toggle('ativo')
        containerChooseImage2.classList.toggle('ativo')
        containerChooseImage3.classList.toggle('ativo')
    }


    //LISTENERS
    btnIniciar.addEventListener('click', ativarContainer)
    btnChamarAtual.addEventListener('click', show)
    btnChamarLidos.addEventListener('click', show)
    btnChamarProx.addEventListener('click', show)
    btnChooseImage.addEventListener('click', growUp)
    btnChooseImage.addEventListener('click', btnMoviment)

    btnChooseImage2.addEventListener('click', growUp)
    btnChooseImage2.addEventListener('click', btnMoviment)

    btnChooseImage3.addEventListener('click', growUp)
    btnChooseImage3.addEventListener('click', btnMoviment)

    btnSave.addEventListener('click', save)
    btnSair.addEventListener('click', quit)

}

export default Atualizations;