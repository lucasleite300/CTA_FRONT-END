import React from 'react'
import '../PaginaAreaSeguranca/paginaDepartamentos.css'
import BotaoDepartamento from '../basicos/Botao/BotaoDepartamentos'
import TemplateDepartamentos from '../basicos/TemplateDepartamentos/TemplateDepartamentos'
import {Link} from 'react-router-dom'


const PaginaAreaSeguranca = (props) => {
    return (
        <>

<div className=" container-flex ">

<TemplateDepartamentos
    icone="display-4 bi bi-shield-shaded"    
    titulo="Segurança"
    descricao ="Área destinada ao departamento de segurança. Emita relatórios de segurança, visualize documentações.">

<BotaoDepartamento 
    caminho=""
    estilo="btn btn-info btn-lg "
    titulo="DOCUMENTAÇÕES" />

<BotaoDepartamento 
    caminho=""
    estilo="btn btn-info btn-lg "
    titulo="RELATÓRIOS" /> 


</TemplateDepartamentos>
</div>
          
        </>
    )
}
export default PaginaAreaSeguranca