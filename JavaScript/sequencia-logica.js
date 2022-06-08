/*
Detalhe
Desenvolva um programa capaz de ler um valor inteiro N. N * 2 linhas de saída vão ser apresentadas na execução do programa, seguindo a lógica do exemplo mais abaixo. Para os valores com mais de seis dígitos, todos os dígitos devem ser apresentados.

Entrada
O arquivo de entrada contém um número inteiro positivo N (1 < N < 1000).

Saída
Imprima a saída conforme o exemplo fornecido.
*/

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let lines = gets().split("\n");
let n = parseInt(lines.shift());

//TODO: Complete os espaços em branco com uma possível solução para o desafio

for (let i = 1; i <= n; i++) {
  print(`${i} ${i ** 2} ${i ** 3}`);
  print(`${i} ${i ** 2 + 1  } ${i ** 3 +  1 }`);
}