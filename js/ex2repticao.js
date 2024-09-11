const tarefas = [
    { nome: "Lavar a louça", completa: false },
    { nome: "Arrumar a cama", completa: false },
    { nome: "Fazer exercícios", completa: false },
    { nome: "Estudar JavaScript", completa: false }
];

let i = 0;

console.log("Lista de Tarefas:");
while (i < tarefas.length) {
    console.log(`${tarefas[i].nome} - Completa: ${tarefas[i].completa ? "Sim" : "Não"}`);
    // Marcar a tarefa como completa
    tarefas[i].completa = true;
    i++;
}

console.log("\nTarefas após serem completadas:");
i = 0;
while (i < tarefas.length) {
    console.log(`${tarefas[i].nome} - Completa: ${tarefas[i].completa ? "Sim" : "Não"}`);
    i++;
}