    const Events = () => {

        const handleMyEvent = (e) => {
            console.log(e);

            console.log("Ativou o evento!");
        }

        const renderSomething = (x) => {
            if(x) {
                return <h1>Renderizando isso!</h1>
            }else{
                return <h1>É falso, retorno isso!</h1>
            }
        }

        return(
            <div>
                <div>
                    <button onClick={handleMyEvent}>Clique Aqui!</button>
                </div>
                <div>
                    <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
                    <button onClick={() => {
                        if(true){
                            console.log("Isso não deveria estar aqui!")
                        }
                    }}>Clique aqui, por favor!</button>
                </div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        )
    }

    export default Events;