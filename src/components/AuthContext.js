import { createContext, useContext, useState } from "react";



const Context = createContext()

const getContext = ()=>{
    return useContext( Context )
}

const AuthContext = ( {children} )=>{

    const[user, setUser] = useState("")

    const login  = async (login, senha)=>{

        const users = await fetch('http://localhost:3000/usuario')
        const jsUsers = await users.json();

        console.log(jsUsers)

        const logado = jsUsers.filter( (u) =>{
            return u.email === login && u.senha === senha
         })

        console.log(logado)

        if(logado.length ==0){
            return false
        }else{
            const u = logado[0]
            setUser({
                nome: u.nome,
                email: u.email,
                cep: u.cep,
                cidade: u.cidade,
                perfil: u.perfil,
            
            })
            return true
        }

        
    }

    return(
        <Context.Provider value={{user, login}}>

            {children}

        </Context.Provider>
    )
}


export {AuthContext, getContext}