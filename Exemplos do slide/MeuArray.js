class MeuArray{
    //Chamando quando um objeto é criado
    constructor()
    {
        //Usamos uma lista pra armazenar os itens
        this.items = [];

        //Mantemos o controle do tamanho do array
        this.tamanho = 0;
    }

    //Adicionar um elemento ao final do array
    adicionar(elemento)
    {
        //insere o elemento na posição 
        //atual do tamanho
        this.items[this.tamanho] = elemento;

        //Incrementa o tamanho
        this+tamanho++;
    }

    remover()
    {
        //Se o array estiver vazio não há o que remover
        if(this.tamanho ===0){
            return undefined;
        }

        //amazena o último item
        const ultimoItem = this.items[this.tamanho - 1];

        //remoce o último item do array
        delete this.items[this.tamanho - 1];

        //decrementa o tamanho
        this.tamanho--;

        return ultimoItem; //Retorna o item removido
    }

    //Acessa o elemento em um índice específico
    obterElemento(indice)
    {
        if (indice < 0 || indice >= this.tamanho){
            //Se o índice estiver fora do alcance,  retorna undefined
            return undefined;
        }

        //retorna o item no índice solicitado
        return this.items[indice];
    }

    //Retorna o tamanho do array
    tamanhoArray()
    {
        //retorna o valor do tamanho atual do array
        return this.tamanho;
    }

    //Remove todos os elementos de array
    limpar()
    {
        //limpa o objeto
        this.items = [];

        //reinicializa o tamanho
        this.tamanho = 0;
    }
}

module.exports = MeuArray;