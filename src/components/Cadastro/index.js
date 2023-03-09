import { useRef } from 'react';
import './styles.css';

export default function Cadastro( { tarefas, atualizarTarefas } ) {

    const inputTarefaRef = useRef();

    function handleAdicionar() {
        const texto = inputTarefaRef.current.value;
        if (!texto) {
            alert('Favor incluir texto da tarefa!');
            return;
        }
        const novoId = tarefas.length + 1;
        const nova = {
            id: novoId,
            title: texto,
            completed: false
        }
        const atualizadas = [...tarefas, nova];
        atualizarTarefas(atualizadas);
    }

  return (
    <div className="container-cadastro">  
        <label>Nova:</label>
        <input type="text" ref={inputTarefaRef} />
        <button onClick={ handleAdicionar }>Adicionar</button>
    </div>
  )
}
