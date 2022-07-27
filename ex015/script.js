function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano){
        window.alert('[ERRO] Coloque um ano válido.')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'foto-bebe-m.png')
            }
            else if (idade < 21){
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50 ){
                img.setAttribute('src', 'foto-adulto-m.png')
            } else{
                img.setAttribute('src', 'foto-idoso-m.png')
            }
    } else if (fsex[1].checked){
            genero = 'Mulher'
        } if (idade >= 0 && idade < 12){
            img.setAttribute('src', 'foto-bebe-f.png')
        }
        else if (idade < 21){
            img.setAttribute('src', 'foto-jovem-f.png')
        } else if (idade < 50 ){
            img.setAttribute('src', 'foto-adulto-f.png')
        } else{
            img.setAttribute('src', 'foto-idoso-f.png')
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}