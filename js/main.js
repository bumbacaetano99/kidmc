/**Este é o código que permite pesquisar as imagens dentro da caixa */ 
let searchBox= document.querySelector('#search-box')
let images = document.querySelectorAll('.container .container-image .image')


searchBox.oninput = ()=>{
     images.forEach(hide => hide.style.display= 'none')
     let value = searchBox.value


     images.forEach(filter =>{
         let title= filter.getAttribute('data-title')
         if (value==title){
            filter.style.display= 'block' 
         }
         if(searchBox.value ==''){
            filter.style.display ='block'
         }
     })
}