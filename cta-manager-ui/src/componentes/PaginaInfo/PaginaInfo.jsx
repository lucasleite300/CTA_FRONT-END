import React from 'react'
import '../PaginaInfo/paginaInfo.css'
import BarraNavegacaoInicial from '../basicos/BarraNavegacaoInicial/BarraNavegacaoInicial'
import Rodape from '../basicos/Rodape/Rodape'
import logo from '../PaginaInfo/cta-logo.png'
import Botao from '../basicos/Botao/Botao'

const PaginaInfo = (props) => {
    return (
        <>
            <BarraNavegacaoInicial />

            <section className="container-flex p-4">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 text-center col-md-6 ">
                        <h1>Informações</h1>
                        <p className=" paragrafo-informacoes lead">O sistema de gerenciamento de atividades do Centro Tático Aéreo foi criado no ano de 2021 para agilizar os procedimentos administrativos dentro do setor.</p>
                        <p className="lead paragrafo-informacoes">Aqui, você poderá emitir relátórios, verificar, emitir ou enviar avisos, documentações, escalas de horários, dentre outros serviços. </p>
                    </div>


                </div>

                <div>
                <Botao 
                    caminho='/' 
                    estilo="btn btn-danger mb-2 mt-2"
                    titulo="VOLTAR"/>
                </div>


            </section>

            <Rodape />
        </>
    )
}
export default PaginaInfo