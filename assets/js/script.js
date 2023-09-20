//Adciona um ou mais íntes no final de um array;
/*let addFrut = prompt("");
let list = ["apple", "pear", "avocado"];
let listFrut = list.push(addFrut);
console.log(list); //['apple', 'pear', 'avocado', 'Orange']*/

// Remove o ultimo iten do array
/*let list = ["apple", "pear", "avocado"];
let ListeRemove = list.pop();
console.log(list); //['apple', 'pear']*/

/*
let pessoa = {
  nome: 'Daniel',
  sobreNome: 'Silva Siqueira',
  idade: 35,
  carros: [
    { carro: 'Ferrary', modelo: 'spider', cor: 'vermelha' }
   // { carro: 'Porsh', modelo: 'KN', cor: 'verde' },
    //{ carro: 'Lamborghini', modelo: 'urus', cor: 'preta' }
  ],
};


let bt = document.getElementById('bt');
bt.addEventListener('click', function (){

pessoa.carros[0].carro = escolherCarro();
pessoa.carros[0].modelo = escolherModelo();
pessoa.carros[0].cor = escolherCor();

function escolherCarro() {
  let selectNomeCarro = document.getElementById('nomeCarros').value;
  return selectNomeCarro
}

function escolherModelo() {
  let selectModeloCarro = document.getElementById('modeloCarros').value;
  return selectModeloCarro
}

function escolherCor() {
  let selectCorCarro = document.getElementById('corCarros').value;
  return selectCorCarro
}

  console.log(pessoa.carros[0]);
}); 
*/



/*
//1 Acesse e exiba o nome completo da pessoa
let nome = pessoa.nome;
let sobrenome = pessoa.sobreNome;
console.log(nome +' '+ sobrenome);


//2 Acesse e exiba a idade da pessoa.
let idade = pessoa.idade;
console.log(idade);


//3 Acesse e exiba o segundo carro da pessoa, incluindo modelo e cor.
let carro = pessoa.carros[1].carro;
//let modelo = pessoa.carros[1].modelo;
//let cor = pessoa.carros[1].cor;
console.log(`O carro é uma${carro} do ${modelo} com a cor${cor}`);


//4 Add um novo carro
let novoCarro = {carro: "BMW", modelo: "M5", cor: "preta"};
et addCarro =  pessoa.carros.push(novoCarro); //add no final
let addCarro =  pessoa.carros.unshift(novoCarro); //add no início
console.log(pessoa.carros)
*/


/*
let pessoa = {
  nome: "João",
  carros: [
    { nome: "Fusca", modelo: "Vintage", cor: "Azul" },
    { nome: "Civic", modelo: "Sedan", cor: "Preto" },
    { nome: "Porsche", modelo: "Esportivo", cor: "Vermelho" }
  ]
};

function listarCarros(pessoa) {
  let listaDeCarros = [];
  
  for(let i = 0; i < pessoa.carros.length; i++) {
    let carro = pessoa.carros[i];
    listaDeCarros.push(`${carro.nome} (${carro.modelo}) - ${carro.cor}`);
  }

  return listaDeCarros;
}


let carrosDoJoao = listarCarros(pessoa);
console.log("Carros do João:");
for(let i = 0; i < carrosDoJoao.length; i++) {
  console.log(carrosDoJoao[i]);
}
*/

/*
//Objeto com os dados da pessoa, com nome e lista de carros do João.
const pessoa = {
  nome: "João",
  carros: [
    { nome: "Ferrari", modelo: "488 GTB", cor: "Vermelho" },
    { nome: "Porsche", modelo: "911", cor: "Preto" },
    { nome: "BMW", modelo: "i8", cor: "Azul" }
  ]
};

function listarCarros(pessoa) { // fução que lista os carro do joão.
  let listaDeCarros = []; // Arrei vazio que vai receber a nova lista de carros

  for(let i = 0; i < pessoa.carros.length; i++) {
    let carro = pessoa.carros[i];
    listaDeCarros.push(`${carro.nome} (${carro.modelo}) - ${carro.cor}`);
  }

  return listaDeCarros;
}

const carrosDoJoao = listarCarros(pessoa);
console.log("Carros do João:", carrosDoJoao);
*/

/*
const pessoa = {
  nome: "João",
  carros: [
    { nome: "Ferrary", modelo: "488 GTB", cor: "Vermelho"},
    { nome: "Porsche", modelo: "911", cor: "Preto" },
    { nome: "BMW", modelo: "i8", cor: "Azul" }
  ]
};

function listarCarros(pessoa) {
  let listaDeCarros = [];

  for(let i = 0; i < pessoa.carros.length; i++) {
    let carro = pessoa.carros[i];
    listaDeCarros.push(`${carro.nome} (${carro.modelo}) - ${carro.cor}`);
  }
  return listaDeCarros
}

let carrosDoJoao = listarCarros(pessoa);
console.log('Carros do João:');
console.log(carrosDoJoao[0]);
console.log(carrosDoJoao[1]);
console.log(carrosDoJoao[2]);
*/
