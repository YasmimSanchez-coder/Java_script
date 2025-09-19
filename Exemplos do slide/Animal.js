class Animal{
    constructor(nome){
        this.nome = nome; //atributo
    }

    fazerSom(){ //método genérico
        console.log("O animal faz som..")
    }
}

//subclasse
class Cachorro extends Animal{
    fazerSom(){ //polimorfismo (sobrescrevendo o método)
        console.log("Au au!");
    }
}