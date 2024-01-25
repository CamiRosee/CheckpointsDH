import { useState } from "react"

function Toggling(){

    const [estado, setEstado] = useState(false)


    return(
        <div> 
            <button onClick={() => setEstado(!estado)} >
            {estado ? "Activo" : "Desactivado" }
            </button>
        </div>
    )
}

export default Toggling