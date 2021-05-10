import React, { Component } from "react";
import "../PaginaCadastro/paginaCadastro.css";
import BarraNavegacaoPrincipal from "../basicos/BarraNavegacaoPrincipal/BarraNavegacaoPrincipal";
import Rodape from "../basicos/Rodape/Rodape";
import { Link } from "react-router-dom";
import FormGroup from "../basicos/FormGroup/FormGroup";
import Botao from "../basicos/Botao/Botao";

class PaginaCadastro1 extends Component {
  state = {
    nome: "",
    email: "",
    departamento: "",
    matricula: "",
    cpf: "",
    instituicao: "",
    contato1: "",
    contato2: "",
    foto:"",
    cep:"",
    endereco:"",
    complemento:"",
    bairro:"",
    numero:"",
    uf:"",
    senha: "",
    senhaRepeticao: "",
  };

  cadastrar = () => {
    console.log(this.state);
    alert("Cadastro Realizado com sucesso");
  };

  render() {
    return (
      <>
        <BarraNavegacaoPrincipal></BarraNavegacaoPrincipal>

        <section>
          <div className="caixa-cadastro container ">
            <div className="row">
              <div className="col-12 text-center">
                <h1>Cadastro</h1>
                <p className="lead">
                  Insira nos campos abaixo os seus dados pessoais:
                </p>
              </div>
            </div>

            <form>
              <div className="row ">
                <FormGroup
                  col="col-12 form-group"
                  label="Digite o seu nome completo: "
                  htmlFor="inputNome"
                  icon="bi bi-person-badge"
                >
                  <input
                    type="email"
                    className="form-control"
                    id="inputNome"
                    placeholder="Ex.: José da Silva"
                    name="nome"
                    onChange={(e) => this.setState({ nome: e.target.value })}
                  ></input>
                </FormGroup>

                <FormGroup
                  col="col-12 form-group"
                  label="Digite o seu e-mail: "
                  htmlFor="inputEmail"
                  icon="bi bi-envelope"
                >
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="seuemail@email.com"
                    name="email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  ></input>
                </FormGroup>

                <FormGroup
                  col="col-12 form-group"
                  label="Informe o seu departamento:"
                  htmlFor="inputDepartamento"
                  icon="bi bi-ui-checks-grid"
                >
                  <select
                    className="form-control"
                    name="departamento"
                    onChange={(e) =>
                      this.setState({ departamento: e.target.value })
                    }
                  >
                    <option>Departamento de Segurança</option>
                    <option>Departamento de Manutenção</option>
                    <option>Departamento de Operações</option>
                    <option>Departamento de Resgate</option>
                    <option>Departamento de Administração</option>
                  </select>
                </FormGroup>

                <FormGroup
                  col="col-12 col-md-6 form-group"
                  label="Digite o número da sua matrícula:"
                  htmlFor="inputMatricula"
                  icon="bi bi-card-heading"
                >
                  <input
                    type="text"
                    className="form-control"
                    id="inputMatricula"
                    placeholder="555555-55"
                    name="matricula"
                    onChange={(e) =>
                      this.setState({ matricula: e.target.value })
                    }
                  ></input>
                </FormGroup>

                <FormGroup
                  col="col-12 col-md-6 form-group"
                  label="Digite o seu CPF: "
                  htmlFor="inputCPF"
                  icon="bi bi-person-badge"
                >
                  <input
                    type="text"
                    className="form-control"
                    id="inputCPF"
                    title="Digite o seu CPF:"
                    placeholder="123.456.789-00"
                    name="cpf"
                    onChange={(e) => this.setState({ cpf: e.target.value })}
                  ></input>
                </FormGroup>

                <FormGroup
                  col="col-12 form-group  "
                  label="Informe sua instituição: "
                  htmlFor="inputInstituicao"
                  icon="bi bi-ui-checks-grid"
                >
                  <select
                    className="form-control"
                    name="instituicao"
                    onChange={(e) =>
                      this.setState({ instituicao: e.target.value })
                    }
                  >
                    <option>UEMA - Universidade Estadual do Maranhão</option>
                    <option>UFMA - Universidade Federal do Maranhão</option>
                    <option>IFMA - Instituto Federal do Maranhão</option>
                    <option>IEMA - Instituto Federal do Maranhão</option>
                  </select>
                </FormGroup>

                <FormGroup
                  col="form-group col-12 col-md-6"
                  label="Contato 1: "
                  htmlFor="inputContato1"
                  icon="bi bi-telephone-inbound"
                >
                  <input
                    type="text"
                    className="form-control"
                    id="inputContato1"
                    placeholder="(XX) XXXX-XXXX"
                    name="contato1"
                    onChange={(e) =>
                      this.setState({ contato1: e.target.value })
                    }
                  ></input>
                </FormGroup>

                <FormGroup
                  col="form-group col-12 col-md-6"
                  label="Contato 2: "
                  htmlFor="inputContato2"
                  icon="bi bi-telephone-inbound"
                >
                  <input
                    type="text"
                    className="form-control"
                    id="inputContato2"
                    placeholder="(XX) XXXX-XXXX"
                    name="contato2"
                    onChange={(e) =>
                      this.setState({ contato2: e.target.value })
                    }
                  ></input>
                </FormGroup>

                <FormGroup
                  col="form-group col-12 col-md-6"
                  label="Escolha uma foto de perfil"
                  htmlFor="inputFoto"
                  icon="bi bi-person-bounding-box"
                >
                  <input 
                  name="myFile" 
                  type="file" 
                  name="foto"
                  onChange={(e) =>
                    this.setState({ foto: e.target.value })}
                  />
                  
                </FormGroup>

                <FormGroup
                  col="form-group col-12 col-md-6"
                  label="Insira o seu CEP"
                  htmlFor="inputCep"
                  icon="bi bi-map"
                >
                  <input
                    type="text"
                    className="form-control"
                    id="inputCep"
                    placeholder="650XX-XXX"
                    name="cep"
                    onChange={(e) =>
                    this.setState({ cep: e.target.value })}
                  ></input>
                </FormGroup>

                <FormGroup
                  col="form-group col-12"
                  label="Insira o seu endereço"
                  htmlFor="inputEndereco"
                  icon="bi bi-geo-alt"
                >
                  <input
                    type="text"
                    className="form-control"
                    id="inputEndereco"
                    placeholder="Unidade 203, rua da União"
                    name="endereco"
                    onChange={(e) =>
                    this.setState({ endereco: e.target.value })}
                  ></input>
                </FormGroup>

                <FormGroup
                  col="form-group col-6 col-md-6"
                  label="Complemento"
                  htmlFor="inputComplemento"
                  icon="bi bi-map"
                >
                  <input
                    type="text"
                    className="form-control"
                    id="inputComplemento"
                    placeholder="Ponto de referência"
                    name="complemento"
                    onChange={(e) =>
                    this.setState({ complemento: e.target.value })}
                  ></input>
                </FormGroup>

                <FormGroup
                  col="form-group col-6 col-md-6 "
                  label="Bairro"
                  htmlFor="inputBairro"
                  icon="bi bi-map"
                >
                  <input
                    type="text"
                    className="form-control"
                    id="inputBairro"
                    placeholder="Ex.: Anil"
                    name="foto"
                    onChange={(e) =>
                    this.setState({ bairro: e.target.value })}
                  ></input>
                </FormGroup>

                <FormGroup
                  col="form-group col-6 col-md-6 "
                  label="Número"
                  htmlFor="inputNumero"
                  icon="bi bi-house"
                >
                  <input
                    type="text"
                    className="form-control"
                    id="inputNumero"
                    placeholder="Ex.: 50"
                    name="numero"
                    onChange={(e) =>
                    this.setState({ numero: e.target.value })}
                  ></input>
                </FormGroup>

                <FormGroup
                  col="form-group col-6 col-md-6 "
                  label="UF"
                  htmlFor="inputUF"
                  icon="bi bi-compass"
                >
                  <select className="form-control" name="uf"
                  onChange={(e) =>
                    this.setState({ uf: e.target.value })}>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA" selected>
                      Maranhão
                    </option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </select>
                </FormGroup>

                <FormGroup
                  col="col-12 col-md-6 form-group"
                  label="Senha: "
                  htmlFor="inputSenha"
                  icon="bi bi-key"
                >
                  <input
                    type="password"
                    className="form-control"
                    id="inputSenha"
                    placeholder="*****"
                    name="senha"
                    onChange={(e) => this.setState({ senha: e.target.value })}
                  ></input>
                </FormGroup>

                <FormGroup
                  col="col-12 col-md-6 form-group"
                  label="Repetir senha: "
                  htmlFor="inputSenha2"
                  icon="bi bi-key"
                >
                  <input
                    type="password"
                    className="form-control"
                    id="inputSenha2"
                    placeholder="*****"
                    name="repetirSenha"
                    onChange={(e) =>
                      this.setState({ senhaRepeticao: e.target.value })
                    }
                  ></input>
                </FormGroup>
              </div>

              <div className="d-flex justify-content-center ">
                <Botao
                  caminho="/login"
                  estilo="btn btn-danger p-2 mt-3 mr-5 col-12"
                  titulo="CANCELAR"
                />

                <Botao
                  onClick={this.cadastrar}
                  caminho="/departamentos"
                  estilo="btn btn-success p-2 mt-3 ml-5 col-12"
                  titulo="FINALIZAR"
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
export default PaginaCadastro1;
