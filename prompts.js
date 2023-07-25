let number1 = prompt("Digite o primeiro numero:")
let number2 = prompt("Digite o segundo numero:")

number1 = Number(number1); number2 = Number(number2)


alert(`A soma dos dois numeros é: ${number1 + number2}`)
alert(`A subtração dos dois numeros é: ${number1 - number2}`)
alert(`A multiplicação dos dois numeros é: ${number1 * number2}`)
alert(`A divisão dos dois numeros é: ${number1 / number2}`)
alert(`O resto da divisão dos dois numeros é: ${number1 % number2}`)


if ((number1 + number2) % 2 == 0) {
    alert (`A soma dos dois números é par`)
} else {
    alert (`A soma dos dois números é impar`)
}

if (number1 == number2) {
    alert (`Os números inseridos são iguais`)
} else {
    alert (`Os números inseridos são diferentes`)
}
