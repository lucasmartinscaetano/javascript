function clicar(){
    var inc = document.querySelector('#inc')
    var fim = document.querySelector('#fim')
    var pas = document.querySelector('#pas')
    var res = document.querySelector('#res')
    if(inc.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO] incluir todos os valores')
    } else{
        res.innerHTML = 'Contando: '
        var i = Number(inc.value)
        var f = Number(fim.value)
        var p = Number (pas.value)
        if(p <= 0){
            window.alert('Passo inválido, passo vai valer 1')
            p = 1
        }
        if( i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} 👉`
            }
        } else {
            for(var c = i; c >=f; c-=p){
                res.innerHTML += `${c} 👉`
            }
        }
        
    }
            

    
}