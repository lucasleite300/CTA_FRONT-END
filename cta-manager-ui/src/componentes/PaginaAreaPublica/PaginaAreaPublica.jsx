import React from 'react'
import '../PaginaAreaPublica/paginaDepartamentos.css'
import BotaoDepartamento from '../basicos/Botao/BotaoDepartamentos'
import TemplateDepartamentos from '../basicos/TemplateDepartamentos/TemplateDepartamentos'

import {Link} from 'react-router-dom'


const PaginaAreaPublica = (props) => {
    return (
        <>

<div className=" container-flex ">

<TemplateDepartamentos
    icone="display-4 bi bi-people"    
    titulo="Área Pública"
    descricao ="Visualize os principais avisos">

<BotaoDepartamento 
    caminho=""
    estilo="btn btn-info btn-lg "
    titulo="RELATÓRIOS DE SEGURANÇA" />

<BotaoDepartamento 
    caminho=""
    estilo="btn btn-info btn-lg "
    titulo="AVISOS" /> 

<BotaoDepartamento 
    caminho=""
    estilo="btn btn-info btn-lg "
    titulo="CURSOS ATUALIZADOS" /> 

<BotaoDepartamento 
    caminho=""
    estilo="btn btn-info btn-lg "
    titulo=" EMITIR CONTRACHEQUE " /> 


</TemplateDepartamentos>
</div>
          
        </>
    )
}
export default PaginaAreaPublica