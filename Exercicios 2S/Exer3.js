/*3.Módulos espaciais pousam um sobre o outro. O último a pousar é o primeiro a sair
da base. Simule essa sequência com uma pilha e peça para exibir a ordem de
retorno à nave.*/

let base = [];
base.push('Módulo 1'); // Primeiro a pousar
base.push('Módulo 2'); // Depois
base.push('Módulo 3');
base.push('Módulo 4');
base.push('Módulo 5'); // Último a pousar
console.log("Base com os módulos empilhados:", base);
console.log("Ordem de retorno à nave:");
while (base.length > 0) {
    let modulo = base.pop();
    console.log(modulo + " está retornando à nave 🚀");
}
console.log("Todos os módulos retornaram para a nave! 🎉");
