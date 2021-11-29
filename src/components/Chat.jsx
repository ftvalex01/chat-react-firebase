import React from 'react'
import AgregarMensaje from './AgregarMensaje'

import { ChatContext } from '../context/ChatProvider'


const Chat = () => {

    const {mensajes, usuario} = React.useContext(ChatContext)
    const refZonaChat = React.useRef(null)

    React.useEffect(()=>{
        refZonaChat.current.scrollTop = refZonaChat.current.height
    },[mensajes])

    return (
        <div 
        className="mt-3 px-2"
        style={{height:'75vh' , overflowY:'scroll'}}
        ref={refZonaChat}
        >
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
