//Adciona um ou masi intes no final de um array;
/*let addFrut = prompt("");
let list = ["apple", "pear", "avocado"];
let listFrut = list.push(addFrut);
console.log(list); //['apple', 'pear', 'avocado', 'Orange']*/

// Remove o ultimo iten do array
/*let list = ["apple", "pear", "avocado"];
let ListeRemove = list.pop();
console.log(list); //['apple', 'pear']*/


let pessoa = {
  nome: 'Daniel',
  sobreNome: 'Silva Siqueira',
  idade: 35,
  carros: [
    { carro: 'Ferrary', modelo: 'spider', cor: 'vermelha' },
    { carro: 'Porsh', modelo: 'KN', cor: 'verde' },
    { carro: 'Lamborghini', modelo: 'urus', cor: 'preta' }
  ],
};

//4
let novoCarro = {carro: "BMW", modelo: "M5", cor: "preta"};
//let addCarro =  pessoa.carros.push(novoCarro);
let addCarro =  pessoa.carros.unshift(novoCarro);
console.log(pessoa.carros)

//1
let nome = pessoa.nome;
let sobrenome = pessoa.sobreNome;
console.log(nome +' '+ sobrenome);


//2
let idade = pessoa.idade;
console.log(idade);

//3
let carro = pessoa.carros[1].carro;
let modelo = pessoa.carros[1].modelo;
let cor = pessoa.carros[1].cor;
console.log(`O carro é uma${carro} do ${modelo} com a cor${cor}`);

