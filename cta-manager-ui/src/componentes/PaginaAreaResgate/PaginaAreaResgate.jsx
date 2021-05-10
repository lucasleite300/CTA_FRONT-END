import React from 'react'
import '../PaginaAreaResgate/paginaDepartamentos.css'
import BotaoDepartamento from '../basicos/Botao/BotaoDepartamentos'
import TemplateDepartamentos from '../basicos/TemplateDepartamentos/TemplateDepartamentos'

import {Link} from 'react-router-dom'


const PaginaAreaResgate = (props) => {
    return (
        <>
        <div className=" container-flex ">

<TemplateDepartamentos
    icone="display-4 bi bi-bag-plus"    
    titulo="Resgate"
    descricao ="Área destinada ao departamento de Resgate. Visualize e emita relatórios de resgate e segurança.">

<BotaoDepartamento 
    caminho=""
    estilo="btn btn-info btn-lg "
    titulo="RELATÓRIOS DE SEGURANÇA" />

<BotaoDepartamento 
    caminho=""
    estilo="btn btn-info btn-lg "
    titulo="RELATÓRIOS DE RESGATE" /> 


</TemplateDepartamentos>
</div>

        </>
    )
}
export default PaginaAreaResgate