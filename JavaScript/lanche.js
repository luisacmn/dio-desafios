/*
Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

Código: 1 | Cachorro-quente | R$ 4.00
Código: 2 | X-Salada | R$ 4.50
Código: 3 | X-Bacon | R$ 5.00
Código: 4 | Torrada Simples | R$ 2.00
Código: 5 | Refrigerante | R$ 1.50

Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.
 */

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let lines = gets().split("\n");
let line = lines.shift().split(" ");
let X = parseInt(line[0]);
let Y = parseInt(line[1]);

//TODO: Complete os espaços em branco com uma possível solução para o desafio
 
var price = 0;

    if (X ==  1) {
      price  =   4 * Y     ;
    }
    else if (X == 2) {
      price  =  4.5  * Y       ;
    }
    else if (X ==  3   ) {
      price  =  5 * Y          ;
    }
    else if (X == 4   ) {
      price  =  2   * Y     ;
    }
    else if (X ==  5   ) {
      price  =    1.5 * Y         ;
    }
    
    print( " Total: R$      "  + price.toFixed(2));