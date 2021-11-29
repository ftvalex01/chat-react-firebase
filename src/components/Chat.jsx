import React from 'react'
import AgregarMensaje from './AgregarMensaje'
const Chat = () => {
    return (
        <div className="mt-3 px-2">
            <div className="d-flex justify-content-end mb-2">
                <span className="badge bg-primary">
                usuario activo
                </span>
            </div>
            <div className="d-flex justify-content-start mb-2">
                <span className="badge bg-secondary">
                usuario externo
                </span>
            </div>
            <AgregarMensaje></AgregarMensaje>
        </div>
    )
}

export default Chat
