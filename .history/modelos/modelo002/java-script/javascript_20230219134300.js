function contar() { //contar() no html [e o button]
    let ini = window.document.getElementById('txti') //txti "inicio"
    let fim = window.document.getElementById('txtf') //txtf "fim"
    let passo = window.document.getElementById('txtp') // txtp "passo"
    let res = window.document.getElementById('resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('[ERRO] Faltam os dados!') 
    } else {
        resu.innerHTML = 'Contando:' 
    }
}
