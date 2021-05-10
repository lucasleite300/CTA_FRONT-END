import React from 'react'
import '../PaginaAreaInstrucao/paginaDepartamentos.css'
import BotaoDepartamento from '../basicos/Botao/BotaoDepartamentos'
import TemplateDepartamentos from '../basicos/TemplateDepartamentos/TemplateDepartamentos'

import {Link} from 'react-router-dom'


const PaginaAreaInstrucao = (props) => {
    return (
        <>
         <div className=" container-flex ">
        <TemplateDepartamentos
            icone="display-4 bi bi-book" 
            titulo="Instrução"
            descricao ="Verifique os cursos mais atualizados para você.">

        <BotaoDepartamento 
            caminho=""
            estilo=" btn btn-info btn-lg  "
            titulo="PRAZOS DE DOCUMENTAÇÕES" />

        <BotaoDepartamento 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="CURSOS DISPONÍVEIS" />

        <BotaoDepartamento
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="RENOVAÇÃO" /> 

        <BotaoDepartamento 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="EDITAIS" /> 
      
        </TemplateDepartamentos>
        </div>
        
           
        </>
    )
}
export default PaginaAreaInstrucao