import React from 'react'
import '../PaginaDepartamentos/paginaDepartamentos.css'
import { Link } from 'react-router-dom'
import BarraNavegacaoPrincipal from '../basicos/BarraNavegacaoPrincipal/BarraNavegacaoPrincipal'
import Rodape from '../basicos/Rodape/Rodape'
import {FaHelicopter} from "react-icons/fa"
import Botao from '../basicos/Botao/Botao'

const PaginaDepartamentos = (props) => {
    return (
        <>
            <BarraNavegacaoPrincipal />

            <section>
                <div className=" container-fluid ">

                    <div className="row ">



                        <h1 className="col-12 text-center p-4"> Departamentos</h1>



                        <div className="caixa-gerenciamento col-6 col-sm-4 col-md-3 col-lg-4 text-center">
                            <Link to="/area_publica">
                                <button type="submit" className=" btn btn-info btn-lg text" >
                                    <i className="display-4 bi bi-people"></i>
                                </button>
                                <p className="lead">Área Pública</p>
                            </Link>
                        </div>

                        <div className="caixa-gerenciamento col-6 col-sm-4 col-md-3 col-lg-4 text-center">
                            <Link to="/area_instrucao">
                                <button type="submit" className=" btn btn-info btn-lg text" >
                                    <i className="display-4 bi bi-book"></i>
                                </button>
                                <p className="lead">Instrução</p>
                            </Link>
                        </div>

                        <div className="caixa-gerenciamento col-6 col-sm-4 col-md-3 col-lg-4 text-center">
                            <Link to="/area_seguranca">
                                <button type="submit" className=" btn btn-info btn-lg text" >
                                    <i className="display-4 bi bi-shield-shaded"></i>
                                </button>
                                <p className="lead">Segurança</p>
                            </Link>
                        </div>

                        <div className="caixa-gerenciamento col-6 col-sm-4 col-md-3 col-lg-4 text-center">
                            <Link to="/area_resgate">
                                <button type="submit" className=" btn btn-info btn-lg text" >
                                    <i className="display-4 bi bi-bag-plus"></i>
                                </button>
                                <p className="lead">Resgate</p>
                            </Link>
                        </div>

                        <div className="caixa-gerenciamento col-6 col-sm-4 col-md-3 col-lg-4 text-center">
                            <Link to="/area_operacoes">
                                <button type="submit" className="btn btn-info btn-lg text" >
                                    <i className="display-4 bi bi bi-bullseye"></i>
                                </button>
                                <p className="lead">Operações</p>
                            </Link>
                        </div>

                        <div className="caixa-gerenciamento col-6 col-sm-4 col-md-3 col-lg-4 text-center">
                            <Link to="/area_manutencao">
                                <button type="submit" className=" btn btn-info btn-lg text" >
                                    <i className="display-4 bi bi-hammer"></i>
                                </button>
                                <p className="lead">Manutenção </p>
                            </Link>
                        </div>

                        <div className="caixa-gerenciamento col-6 col-sm-4 col-md-3 col-lg-4 text-center">
                            <Link to="/area_piloto_copiloto">
                                <button type="submit" className=" btn btn-info btn-lg text" >
                                    <FaHelicopter className="display-4" />
                                </button>
                                <p className="lead">Piloto/Copiloto</p>
                            </Link>
                        </div>

                        <div className="caixa-gerenciamento col-6 col-sm-4 col-md-3 col-lg-4 text-center">
                            <Link to="/area_gerenciamento">
                                <button type="submit" className=" btn btn-info btn-lg text" >
                                    <i className="display-4 bi bi-person-lines-fill"></i>
                                </button>
                                <p className="lead"> Gestão de Pessoas</p>
                            </Link>
                        </div>

                        <div className="caixa-gerenciamento col-6 col-sm-4 col-md-3 col-lg-4 text-center">
                            <Link to="/area_administrativa">
                                <button type="submit" className=" btn btn-info btn-lg text" >
                                    <i className="display-4 bi bi-lock"></i>
                                </button>
                                <p className="lead"> Administrativo</p>
                            </Link>
                        </div>


                    </div>

                </div>


                <div className="row">
                    <h3 className="col-12 text-center p-4"> Ferramentas</h3>
                    <div className="caixa-gerenciamento col-12 col-md-6 col-lg-4 text-center">

                        <p className="lead">Previsão do tempo</p><iframe allowtransparency="true" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" src="https://www.cptec.inpe.br/widget/widget.php?p=243&w=h&c=607065&f=ffffff" height="200px" width="215px"></iframe><noscript>Previs&atilde;o de <a href="http://www.cptec.inpe.br/cidades/tempo/243">São Luís/MA</a> oferecido por <a href="http://www.cptec.inpe.br">CPTEC/INPE</a></noscript>
                    </div>

                    <div className="caixa-gerenciamento col-12 col-md-6 col-lg-4 text-center">
                        <p className="lead">Mapas</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d255079.709825041!2d-44.26884869337158!3d-2.6285293920170654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1614833955092!5m2!1spt-BR!2sbr" ></iframe>
                    </div>

                    <div className="caixa-gerenciamento col-12 col-md-6 col-lg-4 text-center">
                        <p className="lead">Mapas</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d255079.709825041!2d-44.26884869337158!3d-2.6285293920170654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1614833955092!5m2!1spt-BR!2sbr"></iframe>
                    </div>
                </div>
                <div className="m-4"/>



                <div className="d-flex justify-content-center">
                    <Botao 
                    caminho='/login' 
                    estilo="btn btn-danger p-2 m-3 col-12"
                    titulo="VOLTAR"/>
                </div>



            </section>



            <Rodape />
        </>
    )
}
export default PaginaDepartamentos