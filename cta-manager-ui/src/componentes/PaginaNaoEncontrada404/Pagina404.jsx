import React from 'react'
import './pagina404.css'
import BarraNavegacaoPrincipal from '../basicos/BarraNavegacaoPrincipal/BarraNavegacaoPrincipal'
import Rodape from '../basicos/Rodape/Rodape'
import Botao from '../basicos/Botao/Botao'

const Pagina404 = (props)=>{
    return(
        <>
        <BarraNavegacaoPrincipal />

        <div className="container text-center p-5 conteudo-404">
            <h1>Erro 404 - Página não encontrada</h1>
            <p className="lead">O endereço URL foi digitado incorretamente, ou a página não existe.</p>
        </div>

        <Botao 
                    caminho='/' 
                    estilo="btn btn-danger p-2 mt-3 mb-5 mr-1 col-12"
                    titulo="VOLTAR"/>

        <Rodape />
        </>
    )
}
export default Pagina404