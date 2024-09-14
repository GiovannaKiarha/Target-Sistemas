function pertenceAFibonacci(num) {
    let a = 0, b = 1, temp;

if (num === a || num ===b) {
    return true;
}

while (b <num) {
    temp = b;
    b = a + b;
    a = temp;
    return num === b;
}

const numeroInformado = 28;
if (pertenceAFibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência Fibonacci`)
}else{
    console.log(`${numeroInformado} não pertence à sequência Fibonacci`)
}

}