class Pessoa {
    constructor(nome, dataNascimento) {
      this.nome = nome;
      this.dataNascimento = dataNascimento;
    }
    getIdade() {
      const hoje = new Date();
      const anoAtual = hoje.getFullYear();
      const anoNascimento = this.dataNascimento.getFullYear();
      const idade = anoAtual - anoNascimento;
      return idade;
    }
  }
  Pessoa.prototype.getNiver = function() {
    const hoje = new Date();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
    const mesNascimento = this.dataNascimento.getMonth();
    const diaNascimento = this.dataNascimento.getDate();
  
    if (mesAtual > mesNascimento) {
      return true;
    } else if (mesAtual === mesNascimento && diaAtual >= diaNascimento) {
      return true;
    } else {
      return false;
    }
  };
  
  const pessoas = [
    new Pessoa('Luisa', new Date(1995, 2, 9)),
    new Pessoa('Miguel', new Date(1988, 10, 21)),
    new Pessoa('Natália', new Date(2001, 5, 17)),
    new Pessoa('Otávio', new Date(1990, 7, 4)),
    new Pessoa('Paula', new Date(1977, 11, 30)),
  ];

  for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    const idade = pessoa.getIdade();
    const fezAniversario = pessoa.getNiver();
    
    if (fezAniversario) {
      console.log(`${pessoa.nome} tem ${idade} anos e já fez aniversário esse ano.`);
    } else {
      console.log(`${pessoa.nome} tem ${idade} anos e ainda não fez aniversário esse ano.`);
    }
  }