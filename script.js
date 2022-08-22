const numberOne = Number(prompt("Digite o primeiro número"))
const numberTwo = Number(prompt("Digite o segundo número"))

const sum = numberOne + numberTwo
alert(`A soma dos dois números é:
${sum}`)

const sub = numberOne - numberTwo
alert(`A subtração dos dois números é:
${sub}`)

const mult = numberOne * numberTwo
alert(`A multiplicação dos dois números é:
${mult}`)

const div = numberOne / numberTwo
alert(`A divisão dos dois números é:
${div}`)

const rest = numberOne % numberTwo
alert(`O resto da divisão dos dois números é:
${rest}`)

restSum = sum % 2
par = restSum == 0

if (par){
  alert(`O resultado da soma = ${sum}: é par`)
} else {
  alert(`O resultado da soma = ${sum}: é ímpar`)
}

equalNumbers = numberOne == numberTwo

if (equalNumbers) {
  alert(`Os números inseridos são iguais. ${numberOne} = ${numberTwo}`)
} else {
  alert(`Os números inseridos são diferentes. ${numberOne} != ${numberTwo}`)
}


