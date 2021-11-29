import React from 'react'
import { ChatContext } from '../context/ChatProvider'
const NavBar = () => {

    const {usuario,ingresoUsuario,cerrarSesion} = React.useContext(ChatContext)


    return (
        <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">
            chat
        </span>
         <div>
         {
             usuario.estado ? (
                <button 
                onClick={cerrarSesion}
                className="btn btn-outline-danger my-2">
                 cerrar sesion
            </button>
             ) : (
                <button 
                onClick={ingresoUsuario}
                className="btn btn-outline-success my-2 mx-2">
                acceder
             </button>
             )
         }
           
         </div>   
        </nav>
    )
}

export default NavBar
