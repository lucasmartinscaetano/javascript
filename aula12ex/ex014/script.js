function carregar(){
    var msg = document.querySelector('div#msg')
    var imagem = document.querySelector('img#imagem')
    var data = new Date()
    var hora = 13
    msg.innerHTML = `Agora são exatamente ${hora} horas`
    if (hora >= 0 && hora < 12){
        imagem.src = 'bomdiateste.png'
        document.body.style.background = '#fcc537'
    }
     else if(hora > 12 && hora < 18 ){
        imagem.src = 'boatarde.png'  
        document.body.style.background = '#fda661'        
     } else {
        imagem.src = 'boanoite.png'  
        document.body.style.background = '#1a517a'     
     }
    

}
