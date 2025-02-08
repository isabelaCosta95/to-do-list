const element = document.getElementById("adicionar-tarefas");
element.addEventListener("click", adicionar);

function adicionar() {
    // Criando Div para colocar o botão de excluir e a tarefa juntos
    const bloco_tarefa = document.createElement("div");

    // Criando Tarefa
    const nova_tarefa = document.createElement("p");
    nova_tarefa.innerText = document.getElementById("nova-tarefa").value;

    //Criando botão Excluir
    const botao_excluir = document.createElement("button");
    botao_excluir.innerHTML = "Excluir";

    //Evento de click para remover tarefa
    botao_excluir.addEventListener("click", function() {
        container_tarefa.remove(); // Remove toda a div, incluindo a tarefa e o botão
    });

    // Adicionando os elementos na div bloco_tarefa
    bloco_tarefa.appendChild(nova_tarefa);
    bloco_tarefa.appendChild(botao_excluir);

    document.getElementById("tarefas").appendChild(bloco_tarefa);
}   