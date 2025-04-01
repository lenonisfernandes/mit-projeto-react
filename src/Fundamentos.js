// let usada para declarar variáveis que podem ser editadas
let nome = "Lenon";

// const usada para declarar variáveis constantes
const nome2 = "Bela";

//variavel boolean
let admin = false;

//variavel numérica
nome = 12345;

//operadoes matemáticos
let num1 = 10;
let num2 = 15;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2;
let potencia = num1 ^ num2;

//operadores lógicos
// AND &; OR ||; NOT !

let andMenor = (num1 < 18) & (num2 <= 18);
let orMenor = num1 < 18 || num2 < 18;

//condicionais

if (admin) {
  console.log("É admin!");
} else {
  console.log("Não é admin!");
}

if (!admin) {
  console.log("Não é admin. deslogarUser()");
}

//função
function adicao(num1, num2) {
  return num1 + num2;
}

//chamada da função
let resultado = adicao(num1, num2);

//arrow funcition
const menos = (num1, num2) => num1 - num2;

//arrays e listas
const alunos = ["Lenon", "Igor", "João"];
