import './App.css';
import ListaDeTareas from './componentes/ListasDeTareas';
 
        
function App() {
  return (
    
    <div className='aplicacion-tarea'>
    
     <div className='tareas-lista-principal'>
     <div className='escribe'>
        Lista de tareas!! <p><em>Solo escribe lo que necesitas recordar</em></p>
         </div>
       <ListaDeTareas />
     </div>
  </div>
  );
}

export default App;
