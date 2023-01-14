class Fruta {
  constructor() {
    this.fruta = document.querySelector('input[type="text"]');
    this.addFruta = document.querySelector(".ulLista");
    this.lista = [];
    
    }

  cadastrar() {
    if(this.fruta.value){
        this.lista.push(this.fruta.value)
        const li = document.createElement('li')
        li.innerHTML = this.fruta.value
        this.fruta.value =''
        this.addFruta.appendChild(li)
    }
  }
}


const frut = new Fruta();
