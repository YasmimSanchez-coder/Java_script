class Pessoa{
    static especie = "humano"; //pode inicializar com valor

    constructor(nome){
        this.nome = nome;
    }

    apresentar(){
        console.log('Oi, eu sou ${this.nome} e sou um ${Pessoa.especie}');
        }
    }

    const p1 = new Pessoa("Ana");
    p1.apresentar(); //Oi, eu sou Ana e sou um humano
    console.log(Pessoa.especie); //Humano
