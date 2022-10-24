function verificar(){ //declarando variáveis
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO! Verifique os dados novamente!') //mensagem para data inválida
    }
    else { //condição de idade e gênero com suas respectivas imagens 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //conta como se fosse o img no html
        if (fsex[0].checked){
            genero = "masculino"
        if (idade >=0 && idade <10){
            img.setAttribute('src', 'menino.jpg')
        } 
        else if (idade <21) {
            img.setAttribute('src', 'heteen.jpg')
        }
        else if (idade <50) {
            img.setAttribute('src', 'homem.jpg')
        } else {
            img.setAttribute('src', 'idoso.jpg')
        }

        } else if (fsex[1].checked){ //mesma condição para gênero feminino
            genero = 'feminino'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'menina.jpg')
            } 
            else if (idade <21) {
                img.setAttribute('src', 'sheteen.jpg')
            }
            else if (idade <50) {
                img.setAttribute('src', 'mulher.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos pessoa do gênero ${genero} com ${idade} anos.`
        res.appendChild(img) //função para mostrar as fotos de cada idade e gênero
    }
}