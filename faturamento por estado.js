const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

const percentualRepresentacao = {};
for (const estado in faturamento) {
    percentualRepresentacao[estado] = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2) + '%';
}

console.log('Percentual de representação por estado:');
for (const estado in percentualRepresentacao) {
    console.log(`${estado}: ${percentualRepresentacao[estado]}`);
}