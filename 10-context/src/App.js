import { useEffect, useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {

  const [ usuario, setUsuario ] = useState({});

    // Usamos useEffect para que cada vez que detectemos un cambio en el estado del usuario se guarde en el localStorage
    useEffect(() => {
      // La primera vez que se carga el componente (utilizamos los corchetes para ello)
      // Tenemnos usuario local como objeto JS usable 
      let usuario_local = JSON.parse(localStorage.getItem("usuario"));

      setUsuario(usuario_local);
    }, []);

  // Usamos useEffect para que cada vez que detectemos un cambio en el estado del usuario se guarde en el localStorage
  useEffect(() => {
    // Cada vez que se actualice el estado ed usuario se guarda en el LS
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

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
        setUsuario
      }}>
        <AppRouter />
      </PruebaContext.Provider>

    </div>
  );
}

export default App;
