import React from 'react'
import '../PaginaAreaManutencao/paginaDepartamentos.css'
import {Link} from 'react-router-dom'
import BotaoDepartamento from '../basicos/Botao/BotaoDepartamentos'
import TemplateDepartamentos from '../basicos/TemplateDepartamentos/TemplateDepartamentos'



const PaginaAreaManutencao = (props) => {
    return (
        <>

<div className=" container-flex ">
        <TemplateDepartamentos
            icone="display-4 bi bi bi-hammer"            
            titulo="Manutenção"
            descricao ="Área destinada ao departamento de Manutenção. Faça a emissão e envio de ordens de missão, diários de bordo controle de horas de horas de voo ">

        <BotaoDepartamento 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="ORDENS DE MISSÃO" />

        <BotaoDepartamento 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="DIÁRIOS DE BORDO" /> 

        <BotaoDepartamento 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="CONTROLE DE HORAS" /> 
      
        </TemplateDepartamentos>
        </div>
    
        </>
    )
}
export default PaginaAreaManutencao