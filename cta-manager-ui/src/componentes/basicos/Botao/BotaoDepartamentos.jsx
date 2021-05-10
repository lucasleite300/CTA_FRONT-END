import React from 'react'
import {Link} from 'react-router-dom'
import '../Botao/botaoDepartamentos.css'

const BotaoDepartamentos = (props) => {
    return (

        <div className="d-flex justify-content-center ">
            <Link to={props.caminho}>
                <button type="submit" 
                id='botao-departamento'
                onClick={props.onClick}  
                className={props.estilo}>{props.titulo}</button>
                <div className="mb-3"/>
            </Link>
            
        </div>

    )

}
export default BotaoDepartamentos