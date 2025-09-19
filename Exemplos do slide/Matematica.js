class Matematica{
    static somar (a,b){ //método estatico não pode ter this
        return a + b;
    }
    
    static subtrair(a,b){
        return a - b;
    }
}

console.log(Matematica.somar(5,3)); //8
console.log(Matematica.subtrair(10,4)); //6

const m = new Matematica();
// m.somar(1,2) ERRO -> métodos estáticos não pertencem ao objeto