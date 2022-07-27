function clicar(){
    var inc = document.querySelector('#inc')
    var fim = document.querySelector('#fim')
    var pas = document.querySelector('#pas')
    var res = document.querySelector('#res')
    var valorinc = Number(inc.value)
    var valorfim = Number(fim.value)
    var valorpas = Number(pas.value)
    for(valorinc; valorfim || valorfim - valorpas; valorpas){
        res.innerHTML = `${valorinc + valorpas}`
    }
    
}