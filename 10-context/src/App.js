import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {

  const curso = {
    id: 1,
    titulo: "REACT",
    contenido: "Muchas horas de contenido..."
   };

  return (
    <div className="App">

      {/* Antes de darle un valor (al PruebaContext) hay que ponerle la etiqueta de provider para indicar que es un servicio */}
      <PruebaContext.Provider value={curso}>
        <AppRouter></AppRouter>
      </PruebaContext.Provider>

    </div>
  );
}

export default App;
