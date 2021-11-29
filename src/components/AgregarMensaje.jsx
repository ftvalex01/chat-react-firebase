import React from 'react'

import { ChatContext } from '../context/ChatProvider'




const AgregarMensaje = () => {

    const {agregarMensajes,usuario} = React.useContext(ChatContext)
    const [mensaje,setMensaje] = React.useState('')
    const agregar = (e) => {
        e.preventDefault()
        if(!mensaje.trim()){
            console.log("esta vacio")
            return
        }
        agregarMensajes(usuario.uid,mensaje)
        setMensaje('')
    }

    return (
        <form 
        class="fixed-bottom input-group p-3 bg-dark"
        onSubmit={agregar}>
        <input type="text" 
        className="form-control"
        value={mensaje}
        onChange={e => setMensaje(e.target.value)}    
        />
            <div className="input-group-append">
                <button className="btn btn-primary" type="submit">
                    enviar
                </button>
            </div>
        
        </form>
    )
}

export default AgregarMensaje
