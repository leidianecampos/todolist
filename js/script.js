window.addEventListener('load', function() {
let blocoTarefas = document.getElementById('tarefas')
let tarefaDigitada = document.getElementById('tarefa-digitada');
let adicionarTarefa = document.getElementById ('adicionar-tarefa');


function tarefaConcluida () {
    let botoesTarefa = document.querySelectorAll('.botao-tarefa');

    for (let i = 0; i < botoesTarefa.length; i++) {
        
        let botao = botoesTarefa[i];

        botao.addEventListener('click', function () {
            if(window.confirm("Você tem certeza que quer concluir a tarefa?")) {
                botao.parentElement.parentElement.remove()
            }
        })
    }
}

function criarTarefa () {
    
    //Limpando entrada da tarefa dos espaços vazios
    const entradaTarefa = tarefaDigitada.value.trim()

    if (entradaTarefa === '') {
        return alert('Você precisa digitar uma tarefa válida!')
    }
    
    let tarefa = 
    `
    <div class="col-md-4 mb-4">
        <div class="card-tarefa">
            <div class="texto-tarefa">
                ${entradaTarefa}
            </div>
        <div class="botao-tarefa">
            <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
        </div>
    </div>
    `
    blocoTarefas.innerHTML += tarefa;

    tarefaDigitada.value = ''

    tarefaConcluida ()
};

adicionarTarefa.addEventListener('click', criarTarefa);

tarefaDigitada.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
        criarTarefa ()
    }
});


});
