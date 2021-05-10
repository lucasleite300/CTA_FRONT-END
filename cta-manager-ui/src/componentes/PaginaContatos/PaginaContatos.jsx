import React from "react";
import BarraNavegacaoPrincipal from "../basicos/BarraNavegacaoPrincipal/BarraNavegacaoPrincipal";
import Botao from "../basicos/Botao/Botao"
import Rodape from "../basicos/Rodape/Rodape";


const PaginaContatos = (props) => {
  return (
    <>
      <BarraNavegacaoPrincipal />

      <section className="container-flex p-5">
        <div className="text-center ">
          <h1>Nossos Contatos</h1>
          <p className="lead">Telefones e e-mails:</p>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Telefones</th>
                <th scope="col">E-mails</th>
                <th scope="col">Departamentos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  {" "}
                  <a href="tel:+5502122222222"> +55 (98) 98922-2222</a>
                </th>
                <td>depseguranca@gmail.com</td>
                <td>Departamento de Segurança</td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <a href="tel:+5502122222222"> +55 (98) 98922-2222</a>
                </th>
                <td>depadmin@gmail.com</td>
                <td>Departamento de Admisnistração</td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <a href="tel:+5502122222222"> +55 (98) 98922-2222</a>
                </th>
                <td>depoperacoes@gmail.com</td>
                <td>Departamento de Operações</td>
              </tr>

              <tr>
                <th scope="row">
                  {" "}
                  <a href="tel:+5502122222222"> +55 (98) 98922-2222</a>
                </th>
                <td>depoperacoes@gmail.com</td>
                <td>Departamento de Operações</td>
              </tr>

              <tr>
                <th scope="row">
                  {" "}
                  <a href="tel:+5502122222222"> +55 (98) 98922-2222</a>
                </th>
                <td>depoperacoes@gmail.com</td>
                <td>Departamento de Operações</td>
              </tr>

              <tr>
                <th scope="row">
                  {" "}
                  <a href="tel:+5502122222222"> +55 (98) 98922-2222</a>
                </th>
                <td>depoperacoes@gmail.com</td>
                <td>Departamento de Operações</td>
              </tr>

              <tr>
                <th scope="row">
                  {" "}
                  <a href="tel:+5502122222222"> +55 (98) 98922-2222</a>
                </th>
                <td>depoperacoes@gmail.com</td>
                <td>Departamento de Operações</td>
              </tr>



            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-center">
                    <Botao 
                    caminho='/departamentos' 
                    estilo="btn btn-danger p-2 m-2 col-12"
                    titulo="VOLTAR"/>
                </div>
      </section>

     

      <Rodape />
    </>
  );
};
export default PaginaContatos;
