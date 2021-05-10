import React from 'react'
import '../PaginaAreaPiloto/paginaDepartamentos.css'
import {FaHelicopter}  from "react-icons/fa"
import BotaoDepartamento from '../basicos/Botao/BotaoDepartamentos'
import TemplateDepartamentos from '../basicos/TemplateDepartamentos/TemplateDepartamentos'


import {Link} from 'react-router-dom'


const PaginaAreaPiloto = (props) => {
    return (
        <>

<div className=" container-flex ">

        <TemplateDepartamentos
            icone="display-4 bi bi-person-lines-fill"    
            titulo="Piloto / Copiloto"
            descricao ="Área destinada ao piloto e copiloto. Faça a emissão de diários de bordo, prazos de documentação e relatórios de plantão">

        <BotaoDepartamento 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="DIÁRIO DE BORDO" />

        <BotaoDepartamento 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="PRAZOS DOCUMENTAÇÃO" /> 

        <BotaoDepartamento 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="RELATÓRIOS DE PLANTÃO" /> 

        <BotaoDepartamento 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo=" CONTROLE DE VEÍCULOS " /> 
      
      
        </TemplateDepartamentos>
        </div>


        </>
    )
}
export default PaginaAreaPiloto