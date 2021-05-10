import React from "react";
import { Link } from "react-router-dom";
import "../PaginaInicial/paginaInicial.css";
import BarraNavegacaoInicial from "../basicos/BarraNavegacaoInicial/BarraNavegacaoInicial";
import Rodape from "../basicos/Rodape/Rodape";
import logo from "../PaginaInicial/logo.png"

const PaginaInicial = (props) => {
  return (
    <>
      <BarraNavegacaoInicial />
      <section className="d-flex" id="paginaInicialFundo">
        <div className="row texto-pg-inicial d-flex justify-content-center align-items-center">
          <div className="col-12 text-center col-md-6 ">
          <img  src={logo} height="100" width="100" alt="logo-cta"/>
          
            <h1> Centro Tático Aéreo</h1>
            <h3>Polícia Militar do Estado do Maranhão - PMMA</h3>
          </div>

          <div className="col-12 text-center col-md-6">
              
            <h5 className="p-3">
              {" "}
              O sistema de gerenciamento de atividades do Centro Tático Aéreo
              foi criado no ano de 2021 para agilizar os procedimentos
              administrativos dentro do setor.
            </h5>
            <h5 className="p-3">
              {" "}
              Aqui, você poderá emitir relátórios, verificar, emitir ou enviar
              avisos, documentações, escalas de horários, dentre outros
              serviços.{" "}
            </h5>
          </div>
        </div>
      </section>

      <section>
        <div className="container marketing justify-content-center align-itens-center p-5">
          <div class="row text-center">
            <div class="col-lg-4">
              <i className="bi bi-images display-3"></i>
              <br />
              <h2>Fotos</h2>
              <p>Visualize algumas de nossas fotos:</p>
              <Link
                className="nav-item nav-link text-center btn btn-secondary mr-2 "
                to="/fotos"
              >
                Visualizar
              </Link>
            </div>

            <div class="col-lg-4">
              <i className="bi bi-info-square display-3"></i>
              <br />
              <h2>Informações</h2>
              <p>Verifique informações e avisos recentes: </p>
              <Link
                className="nav-item nav-link text-center btn btn-secondary mr-2 "
                to="/info"
              >
                Ver Informações
              </Link>
            </div>

            <div class="col-lg-4">
              <i className="bi bi-box-arrow-in-right display-3"></i>
              <br />
              <h2>Cadastro</h2>
              <p>Faça seu cadastro em poucos minutos: </p>
              <Link
                className="nav-item nav-link text-center btn btn-success mr-2 "
                to="/cadastro1"
              >
                Cadastrar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Rodape />
    </>
  );
};
export default PaginaInicial;
