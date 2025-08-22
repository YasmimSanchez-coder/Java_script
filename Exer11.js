/*Cada letra digitada é um nó. O cursor pode ir para frente e para trás (simulando o
next e prev). Permita inserções e remoções em qualquer posição (insertAt,
removeAt).*/

// Cada letra é um nó (nó duplamente ligado)
class Letra {
    constructor(char) {
        this.char = char;         // A letra em si
        this.anterior = null;     // Referência à letra anterior
        this.proximo = null;      // Referência à próxima letra
    }
}

// Editor de texto com lista duplamente ligada e cursor
class Editor {
    constructor() {
        this.inicio = null;     // Início do texto
        this.fim = null;        // Final do texto
        this.cursor = null;     // O cursor aponta para ONDE vamos inserir/remover
    }

    // Insere uma letra na posição atual do cursor
    insertAt(char) {
        const nova = new Letra(char);

        if (!this.inicio) {
            // Se estiver vazio, é a primeira letra
            this.inicio = this.fim = nova;
            this.cursor = nova;
        } else if (!this.cursor) {
            // Se o cursor for nulo, insere no fim
            this.fim.proximo = nova;
            nova.anterior = this.fim;
            this.fim = nova;
            this.cursor = nova;
        } else {
            // Insere ANTES da posição do cursor
            nova.proximo = this.cursor;
            nova.anterior = this.cursor.anterior;

            if (this.cursor.anterior) {
                this.cursor.anterior.proximo = nova;
            } else {
                // Se for o primeiro, atualizamos o início
                this.inicio = nova;
            }

            this.cursor.anterior = nova;
        }

        console.log(`✏️ Inserido: '${char}'`);
        this.printTexto();
    }

    // Remove a letra onde o cursor está
    removeAt() {
        if (!this.cursor) {
            console.log("⛔ Nada para remover.");
            return;
        }

        let remover = this.cursor;

        if (remover.anterior) {
            remover.anterior.proximo = remover.proximo;
        } else {
            this.inicio = remover.proximo;
        }

        if (remover.proximo) {
            remover.proximo.anterior = remover.anterior;
        } else {
            this.fim = remover.anterior;
        }

        this.cursor = remover.proximo;
        console.log(`❌ Removido: '${remover.char}'`);
        this.printTexto();
    }

    // Move o cursor para a próxima letra
    next() {
        if (this.cursor && this.cursor.proximo) {
            this.cursor = this.cursor.proximo;
            console.log("➡️ Cursor movido para frente.");
        } else {
            console.log("🚫 Cursor já está no fim.");
        }
        this.printTexto();
    }

    // Move o cursor para a letra anterior
    prev() {
        if (this.cursor && this.cursor.anterior) {
            this.cursor = this.cursor.anterior;
            console.log("⬅️ Cursor movido para trás.");
        } else {
            console.log("🚫 Cursor já está no início.");
        }
        this.printTexto();
    }

    // Exibe o texto com um "|" representando o cursor
    printTexto() {
        let atual = this.inicio;
        let output = "";

        while (atual) {
            if (atual === this.cursor) output += "|";
            output += atual.char;
            atual = atual.proximo;
        }

        // Se o cursor estiver no final (após a última letra)
        if (!this.cursor) output += "|";

        console.log("Texto:", output);
        console.log("----------------------------");
    }
}

// 🧪 Teste da simulação

const editor = new Editor();

editor.insertAt("H");
editor.insertAt("E");
editor.insertAt("L");
editor.insertAt("L");
editor.insertAt("O");  // Texto: HELLO

editor.prev();         // Move o cursor antes do último 'O'
editor.prev();         // Move o cursor entre os dois 'L's

editor.insertAt("-");  // Insere '-' entre os L's → HEL-LO

editor.removeAt();     // Remove o 'L' que está após o cursor

editor.next();         // Vai pro próximo (o 'O')
editor.insertAt("!");  // Insere '!' antes do O