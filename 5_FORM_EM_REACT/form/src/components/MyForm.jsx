import { useState } from 'react'
import './MyForm.css'

{/*6 - controlled inputs*/ }
const MyForm = (user) => {
    //3 - Gerenciamneto de dados
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")

    const handleName = (e) => {
        setName(e.target.value);
    }
    //console.log(name);
   // console.log(email);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando o formulario")
        console.log(name,email)

        //7 - limpar form
        setName("");
        setEmail("");
        setBio("");

    }

    return (
        <div>
            {/*5 - envio de form */}
            {/*1 - Criacao de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" placeholder='Digite o seu nome' onChange={handleName} value={name} />
                </div>
                {/**2 - label envolvendo input */}
                <label>
                    <span>Email</span>
                    {/**2 - simplificacao de  manipulacao de state*/}
                    <input type="email" name="email" placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>

    )
}

export default MyForm
