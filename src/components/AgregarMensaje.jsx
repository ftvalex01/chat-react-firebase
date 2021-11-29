import React from 'react'

const AgregarMensaje = () => {
    return (
        <form class="fixed-bottom input-group p-3 bg-dark">
        <input type="text" className="form-control"/>
            <div className="input-group-append">
                <button className="btn btn-primary" type="submit">
                    enviar
                </button>
            </div>
        
        </form>
    )
}

export default AgregarMensaje
