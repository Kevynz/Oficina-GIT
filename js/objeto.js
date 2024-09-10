//Objeto com Propriedades e Métodos
const carro = {
    marca: 'VW',
    modelo: 'Fusca TSi',
    Ano: '2019',
    cor: 'Azul',
    acelerar : function() {
        console.log('O carro está acelerando!');
    },
    parar: function(){
        console.log('o carro parou.');
    }
};

// Acessando e chamando propriedades e métodos
console.log(carro.marca); // Fusca
carro.acelerar(); // o carro está acelerando!
carro.parar();// o carro parou

//Objetos e Constructor Functions

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.saudacao = function() {
        return `olá, meu nome ${this.nome} e tenho ${this.idade} anos.`;
    };
}

// Criando instâncias de Pessoa
const pessoa1 = new Pessoa('Ana', 25);
const pessoa2 = new Pessoa('Carlos', 40);

console.log(pessoa1.saudacao()); // Olá, meu nome é Ana e tenho 25 anos.
console.log(pessoa2.saudacao()); // Olá, meu nome é Carlos e tenho 40 anos

// Objetos e Classes (ES6)

// Definindo uma classe
class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    };

    fazerSom() {
        console.log(`${this.nome} está fazendo um som.`);
    };
}

  // Criando instâncias da classe
const cachorro = new Animal('Rex', 'Cachorro');
const gato = new Animal('Miau', 'Gato');

cachorro.fazerSom(); // Rex está fazendo um som.
 gato.fazerSom(); // Miau está fazendo um som.
