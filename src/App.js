
import './App.css';
import { ImagenBorder } from './componentes/imagenBorder';
import { Selects } from './componentes/selects';
import { Stickers } from './componentes/stickers';

function App() {
  return (
    <div className="App">
      <ImagenBorder />
      <Stickers />
      <Selects />
    </div>
  );
}

export default App;
