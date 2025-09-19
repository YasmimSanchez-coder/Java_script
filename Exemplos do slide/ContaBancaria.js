class ContaBancaria
{
    #saldo = 0; //# = privado

    depositar(valor){
        this.#saldo += valor;
    }

    verSaldo(){
        return this.#saldo;
    }
}

const conta = new ContaBancaria();
conta.depositar(100);
console.log(conta.verSaldo()); //100
//console.log(conta.#saldo); Erro! não posso acessar diretamente