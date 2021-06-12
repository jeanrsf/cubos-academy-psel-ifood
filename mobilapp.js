function solucao(tempo, distancia) {
    const distanciaConvertidaEmKm = (distancia)

    if (tempo < 5) {
        console.log(600)
    } else if (tempo >= 5 && tempo < 60) {
        const valorTotalPorMinuto = 100 * tempo
        const valorTotalPorKm = (distanciaConvertidaEmKm) * 50
        console.log(valorTotalPorMinuto + valorTotalPorKm)

    } else {
        if (distanciaConvertidaEmKm < 100) {
            console.log(distanciaConvertidaEmKm * 200)
        } else {
            console.log(distanciaConvertidaEmKm * 150)
        }
    }
}