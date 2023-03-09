import './styles.css';

export default function Lista( { tarefas, atualizarTarefas } ) {
  return (
    <div className='container-lista-tarefas'>
      {
        tarefas.map(item => <ItemTarefa key={item.id} 
          tarefas={tarefas} tarefa={item} atualizarTarefas={atualizarTarefas} />)  
      }
    </div>
  )
}

function ItemTarefa( { tarefas, tarefa, atualizarTarefas } ) {

  function handleCompletar(id) {
    const atualizadas = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        tarefa.completed = !tarefa.completed;
      }
      return tarefa;
    });
    atualizarTarefas(atualizadas);
  }

  return (
    <div className='item-tarefa'>
      <input type='checkbox' checked={tarefa.completed} id={'check-completo-' + tarefa.id} 
        onChange={ () => handleCompletar(tarefa.id) } />
      <label htmlFor={'check-completo-' + tarefa.id}>{tarefa.title}</label>
    </div>
  );
}