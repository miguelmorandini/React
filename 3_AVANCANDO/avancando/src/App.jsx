import { useState } from "react";
import "./App.css";
import City from './assets/city.jpg';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Avançando em React :-)</h1>
      {/* Imagem em public: */}
      <div>
        <img src="/img1.jpg" alt="Paisagem bela" />
      </div>
      
      {/* Imagem em assets: */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
    </>
  );
}

export default App;
