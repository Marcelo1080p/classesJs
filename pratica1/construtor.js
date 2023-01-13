class Form {
  constructor( nome, telefone ) {
    this.nome = nome;
    this.telefone = telefone;
    document.querySelector('form').addEventListener('submit', (e) => e.preventDefault());
  }
  
  devolverDados() {
    this.nome = document.querySelector('input[type="text"]').value
    this.telefone = document.querySelector('input[type="number"]').value
    document.querySelector('.res').innerText = `nome: ${this.nome}, telefone: ${this.telefone}`
  }

}

const form = new Form();