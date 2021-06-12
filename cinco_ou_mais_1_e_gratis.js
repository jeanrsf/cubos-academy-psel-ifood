function solucao(precos) {
    let total = 0
    let menorPreco = 0
    for (let i = 0; i < precos.length; i++) {
        total += precos[i]
        if (precos.length >= 5 && (menorPreco === 0 || precos[i] < menorPreco)) {
            menorPreco = precos[i]
        }

    }
    console.log(total - menorPreco)
}