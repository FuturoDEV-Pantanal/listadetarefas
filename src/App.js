import { useEffect, useState } from 'react';
import Cadastro from './components/Cadastro';
import Lista from './components/Lista';
import './App.css';

function App() {

  const [loading, setLoading] = useState(true);
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(resp => resp.json())
      .then(dados => { 
        setTarefas(dados);
        setLoading(false);
      })
      .catch(erro => console.log(erro));
  }, [])
  
  if (loading) {
    return (<h1>Carregando dados...</h1>);
  }

  return (
    <div className="App">
      <div className='titulo'>Lista de Tarefas</div>
      <Cadastro tarefas={tarefas} atualizarTarefas={setTarefas} />
      <Lista tarefas={tarefas} atualizarTarefas={setTarefas} />
    </div>
  );
}

export default App;
