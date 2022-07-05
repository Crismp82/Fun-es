function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Milly',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const pessoa3 = {
	nome: 'Bony',
	idade: 33,
};

const pessoa4 = {
	nome: 'Deby',
	idade: 43,
};

console.log(calculaIdade.call(pessoa2, 40));
console.log(calculaIdade.apply(pessoa4, [24]));