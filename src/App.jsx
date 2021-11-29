import React from 'react'
import { ChatContext } from './context/ChatProvider'
import NavBar from './components/NavBar'
import Chat from './components/Chat'

const App = () => {

    const {usuario} = React.useContext(ChatContext)

    return usuario !== null ? (
        <div>
           <NavBar></NavBar>
           {
               usuario.estado  ? (
                   <Chat></Chat>
               ) : (
                <div className="lead text-center mt-3">
                Debes iniciar sesion
                </div>
               )
           }
        </div>
    ) : (
        <div>
            cargando...
        </div>
    )
}

export default App
