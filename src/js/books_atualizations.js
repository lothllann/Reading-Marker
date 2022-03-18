const Atualizations = () => {
    //BOTÕES
    const listaDeBtns = document.querySelectorAll(".btn_att");
    const listaBtnImg = document.querySelectorAll("#choose");

    const btnIniciar = document.querySelector("[data-btn-atualizar]");
    const btnSave = document.querySelector("[data-btn-save]");
    const btnSair = document.querySelector("[data-btn-sair]");

    //CONTAINERS
    const containerAtualizar = document.querySelector(
        "[data-container-atualizar]"
    );
    const containerAtual = document.querySelector("[data-container-att-atual]");
    const containerLidos = document.querySelector("[data-container-att-lidos]");
    const containerProx = document.querySelector("[data-container-att-prox]");
    const listaDeContainersPrimarios = document.querySelectorAll(".att");

    const listaDeContainersSecundarios = document.querySelectorAll(
        ".amostragem_da_capa"
    );

    //FUNÇÕES

    for (let i = 0; i < listaDeBtns.length; i++) {
        const btn = listaDeBtns[i];
        btn.onclick = () => {
            ativarbtn(btn);
            btnDisabled(btn);
            abrirMenu(btn);
            auxiliarFunctionQuitiliarDeMovimentacaoDoBtnSair();
        };

    }

    for (let y = 0; y < listaBtnImg.length; y++) {
        const btn = listaBtnImg[y];
        btn.onclick = (e) => {
            moverBtndeSaida(e);
            growUp(e);
        }
    }


    //FUNÇÕES DE ADIÇÃO DE CLASSES CSS ------------------------------------------------------------------------------------------------------------

    function ativarContainer(event) {
        event.preventDefault();
        if (containerAtualizar.classList.contains("ativo")) {
            removeAtivo(listaDeBtns);
            removeAtivo(listaDeContainersPrimarios);
            retirarDisabled();
             retirarGrow();
        } else {
            btnSair.classList.add("firstMove");
            removeAtivo(listaDeBtns);
        }

        btnSair.classList.remove(
            "slideLeft",
            "cp2",
            "cp3",
            "backToStart",
            "backToStart2",
            "secondMove",
            "thirdMove",
            "fourthMove"
        );
        containerAtualizar.classList.remove("slideLeft");
        btnIniciar.classList.toggle("ativo");
        btnSair.classList.toggle("ativo");
        containerAtualizar.classList.toggle("ativo");
    }

    function abrirMenu(btn) {

        const livroAtual = "data-btn-init-atual";
        const livrosLidos = "data-btn-init-lidos";
        const proximosLivros = "data-btn-init-prox";

        if (btn.hasAttribute(livroAtual)) {
            containerAtual.classList.add('ativo')

        } else if (btn.hasAttribute(livrosLidos)) {
            containerLidos.classList.add('ativo')

        } else if (btn.hasAttribute(proximosLivros)) {
            containerProx.classList.add('ativo')

        }
    }

    function ativarbtn(btn) {

        if (btn.classList.contains('ativo')) {

        } else {
            btn.classList.add('ativo')
        }

    }

    function growUp(event) {
        event.preventDefault();
        for (let i = 0; i < listaDeContainersPrimarios.length; i++) {
            const e = listaDeContainersPrimarios[i];
            if (e.classList.contains('ativo')) {
                e.classList.toggle('grow')
            }
    
            
        }
        for (let x = 0; x < listaDeContainersSecundarios.length; x++) {
            const e = listaDeContainersSecundarios[x];
            e.classList.toggle('ativo')
        }

    }


    //FUNÇÕES DE REMOÇÃO DE CLASSES CSS ------------------------------------------------------------------------------------------------------------

    function removeAtivo(listaDeElementos) {
        for (let i = 0; i < listaDeElementos.length; i++) {
            const elements = listaDeElementos[i];
            elements.classList.remove("ativo");
        }
    }

    function retirarGrow() {
        for (let i = 0; i < listaDeContainersPrimarios.length; i++) {
            const e = listaDeContainersPrimarios[i];
            if (e.classList.contains('grow')) {
                e.classList.remove('grow')
            }
        }

        for (let x = 0; x < listaDeContainersSecundarios.length; x++) {
            const e = listaDeContainersSecundarios[x];
            if (e.classList.contains('ativo')) {
                e.classList.remove('ativo')
            }
        }
    }

    function decrease() {
        btnSair.classList.remove("backToStart", "backToStart2", "cp3");
    }


    //FUNÇÕES DE MOVIMENTAÇÃO DO BOTÃO X ------------------------------------------------------------------------------------------------------------

    function quit(event) {
        event.preventDefault();
        removeAtivo(listaDeBtns);
        retirarDisabled();


        if (!!containerAtual.classList.contains("ativo")) {
            var resultado = containerAtual;
        } else if (!!containerLidos.classList.contains("ativo")) {
            var resultado = containerLidos;
        } else if (!!containerProx.classList.contains("ativo")) {
            var resultado = containerProx;
        } else {
            var resultado = containerAtual;
        }
        const containerCerto = resultado;


        if (!containerCerto.classList.contains("ativo")) {

            if (!!btnSair.classList.contains("backToStart") ||
                !!btnSair.classList.contains("backToStart2")
            ) {
                btnSair.classList.remove("backToStart", "backToStart2", "cp3");
            
                setTimeout(() => {
                    btnSair.classList.add("cp2");
                }, 1);
            }

            setTimeout(() => {
                btnSair.classList.add("slideLeft");
            }, 150);
            containerAtualizar.classList.add("slideLeft");
            btnIniciar.classList.remove("ativo");
            setTimeout(() => {
                containerAtualizar.classList.remove("ativo");
                btnSair.classList.remove("ativo");
            }, 600);
        } else if (!!btnSair.classList.contains("secondMove") ||
            !!btnSair.classList.contains("fourthMove")
        ) {

            auxiliarFunctionQuit();
            containerCerto.classList.remove("ativo");
            btnSair.classList.remove("secondMove", "fourthMove");
            
            setTimeout(() => {
                btnSair.classList.add("backToStart");
            }, 1);
        } else if (!!btnSair.classList.contains("thirdMove")) {
            auxiliarFunctionQuit();
            removeAtivo(listaDeContainersSecundarios)
            containerCerto.classList.remove("ativo", "grow");
            btnSair.classList.remove("thirdMove");
            setTimeout(() => {
                btnSair.classList.add("cp3");
            }, 1);
            btnSair.classList.add("backToStart2");
        }
    }

    function auxiliarFunctionQuitiliarDeMovimentacaoDoBtnSair() {
        btnSair.classList.remove("firstMove");

        if (!btnSair.classList.contains('thirdMove')) {
            setTimeout(() => {
                btnSair.classList.add("secondMove");
            }, 1);
            setTimeout(() => {
                btnSair.classList.add("checkpoint");
            }, 200);
        }
        decrease();


    }

    function moverBtndeSaida(event) {
        event.preventDefault();
        if (!!btnSair.classList.contains("checkpoint")) {
            btnSair.classList.remove("secondMove");
            btnSair.classList.remove("fourthMove");

            setTimeout(function() {
                btnSair.classList.remove("checkpoint");
                btnSair.classList.add("thirdMove");
            }, 1);
        } else if (!btnSair.classList.contains("checkpoint")) {
            btnSair.classList.remove("secondMove");
            setTimeout(() => {
                btnSair.classList.add("fourthMove");
            }, 1);
            btnSair.classList.remove("thirdMove");

            setTimeout(function() {
                btnSair.classList.add("checkpoint");
            }, 200);
        }
    }

    function auxiliarFunctionQuit() {
        for (let i = 0; i < listaDeContainersPrimarios.length; i++) {
            const e = listaDeContainersPrimarios[i];
            e.classList.remove("ativo")
        }
        btnSair.classList.remove("checkpoint");
    }


    //FUNÇÕES DE RESTRIÇÃO DE BOTÕES ------------------------------------------------------------------------------------------------------------

    function retirarDisabled() {
        for (let x = 0; x < listaDeBtns.length; x++) {
            const e = listaDeBtns[x];
            if (e.disabled === true) {
                e.disabled = false
            }
        }
    }

    function btnDisabled(btn) {

        for (let i = 0; i < listaDeBtns.length; i++) {
            const e = listaDeBtns[i];
            if (e != btn) {
                e.disabled = true;
            }
        }

    }



















    function save(event) {
        event.preventDefault();
    }



    //LISTENERS
    btnIniciar.addEventListener("click", ativarContainer);
    btnSave.addEventListener("click", save);
    btnSair.addEventListener("click", quit);
};

export default Atualizations;