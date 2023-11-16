function calcular(p, a) {
    var imc = p / (a * a);
    return imc;
}

function classificar(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso normal.";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal.";
    } else if (imc >= 25 && imc < 30) {
        return "Excesso de peso.";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade classe I";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade classe II";
    } else {
        return "Obesidade classe III";
    }
}

for (var i = 0; i < 10; i++) {
    console.log(`Usuário ${i + 1}:`);

    var p = parseFloat(prompt(`Digite o peso do usuário ${i + 1} em kg:`));

    var a = parseFloat(prompt(`Digite a altura do usuario ${i + 1} em metros:`));

    var imc = calcular(p, a);
    var classificacao = classificar(imc);

    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);
    console.log("\n");
}