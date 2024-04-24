import { useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {

  const [ usuario, setSuaurio ] = useState({
    nick: "@carlosdev",
    nombre: "Carlos",
    web: "carlos.es"
  });

  const curso = {
    id: 1,
    titulo: "REACT",
    contenido: "Muchas horas de contenido..."
   };

  return (
    <div className="App">

      {/* Antes de darle un valor (al PruebaContext) hay que ponerle la etiqueta de provider para indicar que es un servicio */}
      <PruebaContext.Provider value={{
        usuario,
        setSuaurio
      }}>
        <AppRouter />
      </PruebaContext.Provider>

    </div>
  );
}

export default App;
