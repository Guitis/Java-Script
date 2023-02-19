function contar() { //contar() no html [e o button]
    let ini = window.document.getElementById('txti') //txti "inicio"
    let fim = window.document.getElementById('txtf') //txtf "fim"
    let passo = window.document.getElementById('txtp') // txtp "passo"
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('[ERRO] Faltam os dados!') 
    } else {
        res.innerHTML = 'Contando: '

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let)
    }
}
