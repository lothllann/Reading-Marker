const Progresso = ()=>{

    const pagina = document.querySelector('[data-pagina-atual]')
    const btnSalvar = document.querySelector('[data-salvar-pagina]')
    const barraDeProgresso = document.querySelector('.porcentagem')
    // const paginasTotais = document.querySelector


    btnSalvar.onclick = ()=>{
        
        mudarProgresso(paginasTotais);
    }

        var paginasTotais = 118;
        
        

    function mudarProgresso(total){
        var paginaAtual = pagina.value;
       console.log(paginaAtual)
       console.log(total)
    }

}

export default Progresso;