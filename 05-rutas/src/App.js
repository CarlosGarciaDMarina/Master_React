import './App.css';
import { RouterPrincipal } from './routers/RouterPrincipal';

function App() {
  return (
    <RouterPrincipal>
      <App/> {/* Sumamente necesario para poder solucionar errores de NavLink y JSON lecture circular */}
    </RouterPrincipal>
  );
}

export default App;
