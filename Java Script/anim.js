function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //Criança
                gênero = 'criança'
                img.setAttribute('src', 'meninokid.png')
            } else if (idade < 21){
                //Jovem
                gênero = 'jovem'
                img.setAttribute('src', 'jovem.png')
            } else if (idade < 30) {
                //Adulto
                gênero = 'adulto'
                img.setAttribute('src', 'gui.png')
            } else {
                //Idoso
                gênero = 'idoso'
                img.setAttribute('src', 'pai.png')
            }
        } else if (fsex[1]) {
            gênero = 'criança'
            if(idade >= 0 && idade < 10)   {
                //Criança
                img.setAttribute('src', 'manu.png')
            } else if (idade < 22){
                //Jovem
                gênero = 'jovem'
                img.setAttribute('src', 'teka.png')
            } else if (idade < 30) {
                //Adulto
                gênero = 'mulher incrível'
                img.setAttribute('src', 'esther.png')
                
            } else if (idade < 50){
                //VEIA
                gênero = 'véia'
                img.setAttribute('src', 'mae.png')
            } else {
                gênero = 'idosa'
                img.setAttribute('src', 'roseli.png')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é um(a) ${gênero} de ${idade} anos!` 
        res.appendChild(img)
    }
}
