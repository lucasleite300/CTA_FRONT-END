import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../PaginaLogin/paginaLogin.css";
import BarraNavegacaoInicial from "../basicos/BarraNavegacaoInicial/BarraNavegacaoInicial";
import Rodape from "../basicos/Rodape/Rodape";
import FormGroup from "../basicos/FormGroup/FormGroup";
import Botao from "../basicos/Botao/Botao";

import axios from "axios"

class PaginaLogin extends Component {
  state = {
    cpf: "",
    password: "",
  };

  entrar = () => {
    axios.post('http://localhost:8080/authenticate',{
        username: this.state.cpf,
        password: this.state.password
    }).then(response => {
        console.log(response)
    }).catch(erro => {
        console.log(erro.response)
    })

  };

  render() {
    return (
      <>
        <BarraNavegacaoInicial />

        <section>
          <div className="caixa-autenticacao container ">
            <div className="row">
              <div className="col-12 text-center">
                <h1>Autenticação</h1>
                <p className="lead">Insira seus dados de acesso:</p>
              </div>
            </div>

            <form>
              <div className="row">
                <FormGroup
                  col="col-12 form-group"
                  label="Digite o seu CPF"
                  htmlFor="inputCPF"
                  icon="bi bi-person-badge"
                >
                  <input
                    value={this.state.cpf}
                    onChange={(e) => this.setState({ cpf: e.target.value })}
                    type="text"
                    className="form-control"
                    name="cpf"
                    placeholder="123.456.789-00"
                  ></input>
                </FormGroup>

                <FormGroup
                  col="col-12 form-group"
                  label="Senha"
                  htmlFor="inputSenha"
                  icon="bi bi-key"
                >
                  <input
                    value={this.state.password}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                    type="password"
                    className="form-control"
                    name="password"
                    id="exampleInputPassword1"
                    placeholder="*****"
                  ></input>
                </FormGroup>

              </div>

              <div className=" p-2 d-flex flex-row-reverse">
                <Link to="/recuperarSenha" className="lead">
                  <strong>Esqueci a senha</strong>
                </Link>
              </div>
              <div className="d-flex justify-content-center ">
                <Botao
                  caminho="/"
                  estilo="btn btn-danger p-2 mt-3 mr-5 col-12"
                  titulo="VOLTAR"
                />

                <Botao
                  onClick={this.entrar}
                  caminho="/departamentos"
                  estilo="btn btn-success p-2 mt-3 ml-5 col-12"
                  titulo="ENTRAR"
                />
              </div>
            </form>
          </div>
        </section>

        <Rodape />
      </>
    );
  }
}
export default PaginaLogin;
