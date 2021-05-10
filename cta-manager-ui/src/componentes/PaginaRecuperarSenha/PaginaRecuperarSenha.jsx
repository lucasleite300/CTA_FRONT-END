import React from 'react'
import {Link} from 'react-router-dom'
import '../PaginaRecuperarSenha/paginaRecuperarSenha.css'
import BarraNavegacaoPrincipal from '../basicos/BarraNavegacaoPrincipal/BarraNavegacaoPrincipal'
import Rodape from '../basicos/Rodape/Rodape'
import Botao from '../basicos/Botao/Botao'

const PaginaRecuperarSenha = (props) => {
    return (
        <>
            <BarraNavegacaoPrincipal />
            <section>
                <div className="caixa-recuperacao container ">
                    <div className="col-12 text-center">
                        <h1>Recuperação de Senha</h1>
                        <p className="lead">Perdeu sua senha? Insira seu e-mail para recuperá-la:</p>
                    </div>

                    <form>
                        <div className="row ">
                            <div className="col-12 form-group">
                                <label className="lead" for="exampleInputEmail1"><i className="bi bi-envelope"></i> <strong>Digite o seu e-mail:</strong></label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="seuemail@email.com"></input>
                            </div>
                        </div>

                    <div className="d-flex justify-content-center ">
                    <Botao 
                        caminho="/login"
                        estilo="btn btn-success p-2 mt-3 mr-5 col-12"
                        titulo="ENVIAR" />
                           
                    <Botao 
                        caminho="/login"
                        estilo="btn btn-danger p-2 mt-3 ml-5 col-12"
                        titulo="VOLTAR" />
                            
                    </div>
                        
                        

                    </form>
                </div>

               



            </section>

            <Rodape />

        </>
    )
}
export default PaginaRecuperarSenha