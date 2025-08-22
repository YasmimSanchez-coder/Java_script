/*Usuário monta uma lista de compras com insertAtBeginning e insertAtEnd.
Permita remover itens com removeByValue e buscar com find. Imprima a lista em
cada etapa.*/

class Node {
    constructor(item) {
        this.item = item; // Nome do item de compra (ex: "Arroz", "Leite")
        this.next = null; // Ponteiro para o próximo item na lista (começa vazio)
    }
}

class ListaDeCompras {
    constructor() {
        this.head = null; // Começamos com a lista vazia
    }
    insertAtBeginning(item) {
        const novoNode = new Node(item); // Criamos o novo item
        novoNode.next = this.head; // O próximo do novo item aponta para o atual início da lista
        this.head = novoNode; // O novo item se torna o início da lista
        console.log(`Adicionado no início: ${item}`);
        this.printList(); // Mostramos a lista atualizada
    }
    insertAtEnd(item) {
        const novoNode = new Node(item); // Criamos o novo item

        if (!this.head) {
            this.head = novoNode;
        } else {
            let atual = this.head; // Começamos do primeiro item
            while (atual.next) {
                atual = atual.next; // Percorremos até o final da lista
            }
            atual.next = novoNode; // Adicionamos o novo item no final
        }

        console.log(`Adicionado no final: ${item}`);
        this.printList(); // Mostramos a lista atualizada
    }
    removeByValue(item) {
        if (!this.head) {
            console.log("A lista está vazia, nada para remover.");
            return;
        }
        if (this.head.item === item) {
            this.head = this.head.next; // Pulamos o primeiro item
            console.log(`Removido: ${item}`);
            this.printList();
            return;
        }
        let atual = this.head;
        while (atual.next && atual.next.item !== item) {
            atual = atual.next; // Continuamos procurando
        }
        if (atual.next) {
            atual.next = atual.next.next; // Pulamos o item removido
            console.log(`Removido: ${item}`);
        } else {
            console.log(`Item "${item}" não encontrado na lista.`);
        }
        this.printList(); // Mostramos a lista atualizada
    }
    find(item) {
        let atual = this.head;
        while (atual) {
            if (atual.item === item) {
                console.log(`Item encontrado: ${item}`);
                return;
            }
            atual = atual.next;
        }
        console.log(`Item "${item}" não encontrado.`);
    }
    printList() {
        let atual = this.head;
        let listaStr = "Lista de Compras: ";

        while (atual) {
            listaStr += atual.item + " -> ";
            atual = atual.next;
        }

        listaStr += "fim";
        console.log(listaStr + "\n");
    }
}
const lista = new ListaDeCompras();

// Adicionando itens na lista
lista.insertAtEnd("Arroz");
lista.insertAtBeginning("Leite");
lista.insertAtEnd("Feijão");
lista.insertAtBeginning("Ovos");

//Procurando itens na lista
lista.find("Feijão"); // Deve encontrar
lista.find("Macarrão"); // Não está na lista

//Removendo itens da lista
lista.removeByValue("Leite");
lista.removeByValue("Macarrão"); // Tentar remover item que não existe

// ✅ Adicionando mais itens
lista.insertAtEnd("Frutas");
lista.insertAtBeginning("Verduras");

//Removendo outro item
lista.removeByValue("Arroz");
