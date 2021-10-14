// implemente aqui as funções de teste
//primeira: inverte a ordem das letras em uma string
function reverseString(texto){
    return texto.split('').reverse().join('');
}

function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testeReverseString2() {
    let result = reverseString("42");
    let expected = "24";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

//segunda: inverte a ordem das palavras em uma string

function reverseSentence(texto){
    return texto.split(' ').reverse().join(' ');
}

function testReverseSentence1() {
    let result = reverseSentence("bob likes dogs");
    let expected = "dogs likes bob";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testReverseSentence2(){
    let result = reverseSentence("BoB bOb BoB");
    let expected = "BoB bOb BoB";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

//terceira: retorna o valor mínimo de um array
function minimumValue(lista){
    return Math.min(lista)
}

function testMinimumValue1() {
    let result = minimumValue(1, 2, 3, 4, 5, 6, 9);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMinimumValue2(){
    let result = minimumValue("dog", "fish", "bear", "platypus");
    let expected = NaN;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


//quarta: retorna o valor máximo de um array
function maximumValue(lista){
    return Math.max(lista)
}

function testMaximumValue1() {
    let result = maximumValue(100, 40, 150, 60, 99, 100);
    let expected = 150;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMaximumValue2(){
    let result = maximumValue("dog", "fish", "bear", "platypus");
    let expected = NaN;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


//quinta: calcula o resto de uma determinada divisão
function calculateRemainder(a, b){
    return a%b
}

function testCalculateRemainder1() {
    let result = calculateRemainder(8, 3);
    let expected = 2;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCalculateRemainder2(){
    let result = calculateRemainder(-10, -7);
    let expected = -3;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

//sexta: acha os valores distintos de uma string
function distinctValues(texto){
    let valor = texto.split(" ");
    let final = [...new Set(valor)];
    return final.join(" ");

}
function testDistinctValues1() {
    let result = distinctValues("1 3 5 3 7 3 1 1 5");
    let expected = "1 3 5 7";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testDistinctValues2() {
    let result = distinctValues("man dog dog horse animal four cat cat dog man");
    let expected = "man dog horse animal four cat";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

//setima: 
function countValues(value){
    const numbersCount = {}
    let numbers = value.split(" ");
    let final = []
    for(let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        if (numbersCount[currentNumber] === undefined) {
            numbersCount[currentNumber] = 1; 
        }else{ 
            numbersCount[currentNumber]++;
        }
    }
    for(let number in numbersCount){
        final.push(`${number}(${numbersCount[number]})`)
    }
    return final.join(" ")
}

function testCountValues1() {
    let result = countValues("1 3 5 3 7 3 1 1 5");
    let expected = "1(3) 3(3) 5(2) 7(1)";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCountValues2(){
    let result = countValues("man dog dog horse animal four cat cat dog man");
    let expected = 'man(2) dog(3) horse(1) animal(1) four(1) cat(2)';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}