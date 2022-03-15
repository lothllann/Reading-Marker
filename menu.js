const Menu = ()=>{
    
   const  menu_hamburguer = document.querySelector('.menu_hamburguer')
   const  menu = document.querySelector('.menu')
   
   function dropDownMenu(){
       if(!!menu.classList.contains('inativo')){
        menu.classList.add('ativo')
        menu.classList.remove('inativo')
        
       }else if (!!menu.classList.contains('ativo')) {
           menu.classList.add('inativo')
           setTimeout(()=>{
               menu.classList.remove('ativo')
           },290)
       }
    
   }

   menu_hamburguer.addEventListener('click', dropDownMenu)

}


export default Menu;