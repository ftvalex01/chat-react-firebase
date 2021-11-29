import React from 'react'
import { ChatContext } from './context/ChatProvider'
import NavBar from './components/NavBar'


const App = () => {

    const {usuario} = React.useContext(ChatContext)

    return usuario !== null ? (
        <div>
           <NavBar></NavBar>
        </div>
    ) : (
        <div>
            cargando...
        </div>
    )
}

export default App
