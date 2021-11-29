import React from 'react'
import AgregarMensaje from './AgregarMensaje'

import { ChatContext } from '../context/ChatProvider'


const Chat = () => {

    const {mensajes, usuario} = React.useContext(ChatContext)


    return (
        <div className="mt-3 px-2">
        {
            mensajes.map((item,index)=>(
                usuario.uid === item.uid ? (
                    <div className="d-flex justify-content-end mb-2" key={index}>
                        <span className="badge bg-primary">
                           {item.texto}
                        </span>
                    </div>
                ) : (
                    <div className="d-flex justify-content-start mb-2" key={index}>
                        <span className="badge bg-secondary">
                            {item.texto}
                        </span>
                    </div>
                )
            ))
        }
            
            <AgregarMensaje></AgregarMensaje>
        </div>
    )
}

export default Chat
