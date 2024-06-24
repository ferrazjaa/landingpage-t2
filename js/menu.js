var menu = document.getElementById('menu-dropdown');
var navegacao = document.getElementById('navegacao');   

menu.addEventListener('click', function(){
    if(navegacao.style.display =='block'){
        navegacao.style.display = 'none';
    }else{
        navegacao.style.display = 'block';
    }
})
