import React from 'react'
import '../PaginaAreaAdministrativa/paginaDepartamentos.css'
import BotaoDepartamentos from '../basicos/Botao/BotaoDepartamentos'

import {Link} from 'react-router-dom'
import TemplateDepartamentos from '../basicos/TemplateDepartamentos/TemplateDepartamentos'


const PaginaAreaAdmistrativa = (props) => {
    return (
        <div className=" container-flex ">
        <TemplateDepartamentos
            icone="display-4 bi bi-lock" 
            titulo="Administrativo"
            descricao ="Área destinada ao departamento de administração. Faça a emissão de documentações, contratos e contracheques.">

        <BotaoDepartamentos      
            caminho=""
            estilo=" btn btn-info btn-lg  "
            titulo="DOCUMENTAÇÕES" />

        <BotaoDepartamentos 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="CONTRATOS DIVERSOS" />

        <BotaoDepartamentos 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="CONTRACHEQUES" /> 
      
        </TemplateDepartamentos>
        
        </div>
        
    )
}
export default PaginaAreaAdmistrativa