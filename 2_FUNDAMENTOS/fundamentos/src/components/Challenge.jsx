const Challenge = () => {
    const a = 7
    const b = 3

    return (
        <div>
            <div>
            <h1>A = {a} <br/> B = {b}</h1>
            </div>

            <div>
            <button onClick={() => console.log(`A soma de ${a} + ${b} é igual a ${a+b}`)}>Some aqui!</button>
            </div>
        </div> 
        
    )

}

export default Challenge;