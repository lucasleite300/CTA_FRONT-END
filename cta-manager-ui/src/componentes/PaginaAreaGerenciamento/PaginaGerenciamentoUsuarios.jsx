import React from 'react'
import '../PaginaAreaGerenciamento/paginaDepartamentos.css'
import BotaoDepartamento from '../basicos/Botao/BotaoDepartamentos'
import TemplateDepartamentos from '../basicos/TemplateDepartamentos/TemplateDepartamentos'


const PaginaGerenciamentoUsuario = (props) => {
    return (
        <>
        <div className=" container-flex ">
        <TemplateDepartamentos
            icone="display-4 bi bi-journal-arrow-up" 
            titulo="Gerenciamento de Novos Usuários"
            descricao ="Realize nessa seção a verificação de usuários, histórico de visitações e adição de novos usuários">

        <BotaoDepartamento 
            caminho=""
            estilo=" btn btn-info btn-lg  "
            titulo="USUÁRIOS" />

        <BotaoDepartamento 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="HISTÓRICO DE VERIFICAÇÕES" />

        <BotaoDepartamento 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="ADICIONAR NOVO USUÁRIO" /> 
      

        </TemplateDepartamentos>
        </div>
        
        </>
    )
}
export default PaginaGerenciamentoUsuario