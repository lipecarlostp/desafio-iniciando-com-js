/* 
01) Crie um script que exiba a mensagem "Hello World!"
 em um alerta no navegador. 
 */
alert("Hello World");

/* 
02) Crie um script que declare duas variáveis 
e exiba o resultado da soma entre elas
*/

let NumberOne = 10;
let NumberTwo = 10;

const sum = Number(NumberOne) + Number(NumberTwo);

alert(sum);

/* 
03) Crie um script que declare uma variável e 
verifique se o seu valor é um número. 
Se for, exiba a mensagem "É um número", 
caso contrário, exiba a mensagem "Não é um número".
*/

let isNumber = 5;

if (typeof isNumber == "number") {
  alert("É um número");
} else {
  alert("Não é um número");
}

/*
04) Crie um script que declare uma variável e 
verifique se o seu valor é uma string. 
Se for, exiba a mensagem "É uma string", 
caso contrário, exiba a mensagem "Não é uma string".
*/

let isString = "Felipe";

if (typeof isString == "string") {
  alert("É uma string");
} else {
  alert("Não é uma string");
}

/*
05) Crie um script que declare uma variável e 
verifique se o seu valor é um booleano. 
Se for, exiba a mensagem "É um booleano", 
caso contrário, exiba a mensagem "Não é um booleano".
*/

let isBoolean = true;

if (typeof isBoolean == "boolean") {
  alert("É um booleano");
} else {
  alert("Não é um booleano");
}

/*
06) Crie um script que declare duas variáveis e
 exiba o resultado da subtração entre elas.
*/

const sub = Number(10) - Number(5);

alert(sub);

/*
07) Crie um script que declare duas variáveis e 
exiba o resultado da multiplicação entre elas.
*/

const multi = Number(10) * Number(10);

alert(multi);

/*
08) Crie um script que declare duas variáveis 
e exiba o resultado da divisão entre elas.
*/

const div = Number(100) / Number(10);

alert(div);

/*
09) Crie um script que declare uma variável e 
verifique se o seu valor é um número par. 
Se for, exiba a mensagem "É um número par", caso contrário, 
exiba a mensagem "Não é um número par".
*/

let isPar = Number(2) + Number(6);

alert(`A soma é ${isPar}. E é um número par!`);

/*
10) Crie um script que declare uma variável e 
verifique se o seu valor é um número ímpar. 
Se for, exiba a mensagem "É um número ímpar", caso contrário, 
exiba a mensagem "Não é um número ímpar".
*/

let isImpar = Number(5) - Number(2);

alert(`A subtração é ${isImpar}. E é um número impar!`);
