import React from 'react'
import '../PaginaFotos/paginaFotos.css'
import BarraNavegacaoInicial from '../basicos/BarraNavegacaoInicial/BarraNavegacaoInicial'
import Rodape from '../basicos/Rodape/Rodape'
import cta1 from '../PaginaFotos/cta-1.jpeg'
import cta2 from '../PaginaFotos/cta-2.jpeg'
import cta3 from '../PaginaFotos/cta-3.jpg'
import Botao from '../basicos/Botao/Botao'

const PaginaFotos = (props) => {
    return (
        <>
            <BarraNavegacaoInicial />

            <section className="container-fluid">
                <div className="row texto-fotos">
                    <div className="container col-12 text-center">
                        <h1>Galeria de fotos</h1>
                        <p>Visualize algumas de nossas fotos:</p>
                    </div>
                </div>

                <div className="row">
                    <div className="container-fluid col-12">
                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={cta1} className="d-block w-100" alt="..."></img>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={cta2} className="d-block w-100" alt="..."></img>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={cta3} className="d-block w-100" alt="..."></img>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <span className=" setas carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                <span className=" setas carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                    </div>
                </div>
                
                <div>
                <Botao 
                    caminho='/' 
                    estilo="btn btn-danger mt-4 mb-4"
                    titulo="VOLTAR"/>
                </div>

            </section>
        



            <Rodape />
        </>
    )
}
export default PaginaFotos