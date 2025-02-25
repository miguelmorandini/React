import { useState } from "react";
import "./App.css";
import City from './assets/city.jpg';
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";


function App() {

  const name = "Joaquim";

  const [userName] = useState("Maria");

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
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name={userName} />
    </>
  );
}

export default App;
