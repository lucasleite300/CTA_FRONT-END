import React from 'react'
import BarraNavegacaoPrincipal from '../BarraNavegacaoPrincipal/BarraNavegacaoPrincipal'
import DepartamentosPesquisa from '../DepartamentosPesquisa/DepartamentosPesquisa'
import Botao from '../Botao/Botao'
import Rodape from '../Rodape/RodapeSimplificado'

const TemplateDepartamentos = (props)=>{
    return(
        <>
        <BarraNavegacaoPrincipal />
        <section>
        <DepartamentosPesquisa />

        <div className="row ">
                        <div className="caixa-gerenciamento col-12 text-center">
                            <i className={props.icone}></i>
                            <h1>{props.titulo}</h1>
                            <p className="lead">{props.descricao} </p>
                        </div>
                    </div>

                    {props.children}
                    
                        <Botao 
                        caminho="/departamentos"
                        estilo="btn btn-danger col-12"
                        id="botaoSair"
                        titulo="SAIR" />                            

                  <Rodape/>
                  </section>


                

     
        </>
    )
}
export default TemplateDepartamentos