class Carro{
    constructor(modelo, ano){
        this.modelo= modelo;
        this.ano= ano;
    }

    acelerar(){
        console.log(`${this.modelo} está acelerando...`);
    }
}

//exportando a classe
module.exports = Carros;