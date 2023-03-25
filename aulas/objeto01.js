let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar (p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
    console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)

let guitis = {nome: 'Guilherme',
sexo: 'M',
peso: 56,
engordar (p=0) {
    console.log('Engordou')
    this.peso += p
}}

guitis.engordar(5)
    console.log(`${guitis.nome} pesa ${guitis.peso} Kg`)

    