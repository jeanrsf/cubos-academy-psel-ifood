function solucao(ano) {
    const anoBaseCopa = 2022
    const ehAnoCopa = (ano - anoBaseCopa) % 4 === 0
    if (ano % 2 !== 0) {
        console.log("MEH")
    } else if (ehAnoCopa) {
        console.log("COPA")
    } else {
        console.log("JOGOS")
    }
}