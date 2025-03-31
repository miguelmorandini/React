import { useState } from "react";
import "./App.css";
import City from './assets/city.jpg';
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {

  //const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Red", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Blue", newCar: false, km: 222230},
    {id: 3, brand: "GM", color: "Black", newCar: false, km: 198470},
  ]

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const peoples = [
    {id: 1, name: "Miguel", age: 17, job: "Estudante"},
    {id: 2, name: "José", age: 60, job: "Aposentado"},
    {id: 3, name: "Marcela", age: 32, job: "Professora"},
    {id: 4, name: "Moisés", age: 24, job: "Analista de Sistemas"},
  ]

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

      {/*Props: */}
      <ShowUserName name={userName} />

      {/*Destructuring Props: */}
      <CarDetails brand="Fiat" km={100000} color="Prata" newCar={false}/>

    {/*Reutilizando components: */}
    <CarDetails brand="Ford" color="Preto" km={0} newCar={true}/>
    <CarDetails brand="VW" km={62568} color="Azul" newCar={false}/>

    {/*Loop em array de objetos: */}
    {cars.map((car) => (
      <CarDetails 
      key={car.id}
      brand={car.brand} 
      color={car.color} 
      km={car.km} 
      newCar={car.newCar}/>
    ))}

    {/*fragment: */}
    <Fragment propFragment="teste"/>

    {/*Children: */}
    <Container myValue="testing">
      <p>Este é o conteudo</p>
    </Container>
    <Container myValue="testing2">
      <h5>Testando container</h5>
    </Container>

    {/*Executar função: */}
    <ExecuteFunction myFunction={showMessage}/>

    {/*state liff: */}
    <Message msg={message}/>
    <ChangeMessageState handleMessage={handleMessage}/>

    {/*Desafio 4 */}
    {peoples.map((people) => (
      <UserDetails 
      key={people.id} 
      name={people.name} 
      age={people.age} 
      job={people.job}/>
      
    ))}


    </>
  );
}

export default App;
