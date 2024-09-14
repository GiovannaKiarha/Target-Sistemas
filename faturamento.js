function faturamento(faturamentoDiario){
 const faturamentoValido = faturamentoDiario.filter(valor => valor !== null);
 const menorFaturamento = Math.min(valor => valor !== null);
 const maiorFaturamento = Math.max (valor => valor !== null);
 const mediaMensal = faturamentoValido.reduce((acc, valor) => acc + valor, 0) / faturamentoValido.lenght;
 const diasAcimaDaMedia = faturamentoValido.filter(valor => valor > mediaMensal).lenght;

return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia

const [22174.1664, 24537.6698, 26139.6134, null, null, 26742.6612, null, 42889.2258, 46251.174, 11191.4722, null, null, 3847.4823, 373.7838, 2659.7563, 48924.2448, 18419.2614, null, null, 35240.1826, 43829.1667,18235.6852, 4355.0662, 13327.1025, null, null, 25681.8318, 1718.1221, 13220.495, 8414.61]
 };
}
 console.log(`Menor faturamento: R$ ${resultado.menorFaturamento}`);
 console.log(`Maior faturamento: R$ ${maiorFaturamento}`);
 console.logo(`Dias acima da média mensal: R$ ${diasAcimaDaMedia}`)