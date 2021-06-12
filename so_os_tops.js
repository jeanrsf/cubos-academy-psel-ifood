function solucao(produtos) {
    let totalTop = 0
    let totalGeral = 0
    for (let i = 0; i < produtos.length; i++) {
        totalGeral += produtos[i].preco
        if (produtos[i].preco > 10000) {
            totalTop += produtos[i].preco
        }

    }
    console.log({
        totalTop,
        percentual: (totalTop / totalGeral)
    })
}