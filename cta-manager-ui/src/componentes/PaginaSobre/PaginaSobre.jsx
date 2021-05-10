import React from "react";

import BarraNavegacao from "../basicos/BarraNavegacaoPrincipal/BarraNavegacaoPrincipal";
import Rodape from "../basicos/Rodape/Rodape";
import Botao from '../basicos/Botao/Botao'

const PaginaSobre = (props) => {
  return (
    <>
      <BarraNavegacao />

      <div className="container marketing p-5">
        <div className="row">
          <div className="col-lg-4 ">
            <h2 className="text-center p-2"> Nossa Visão</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum inventore quia enim! Deserunt molestias inventore corporis at nemo debitis, accusamus, delectus asperiores quis nihil perspiciatis repellendus dolore dolorem temporibus sunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab distinctio rem harum, eum quaerat minima dolores voluptatibus animi provident totam labore accusantium neque, quasi rerum impedit beatae, architecto reiciendis dignissimos.
            </p>
           
          </div>
          <div className="col-lg-4 ">
            <h2 className="text-center p-2 ">Nossos Valores</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum inventore quia enim! Deserunt molestias inventore corporis at nemo debitis, accusamus, delectus asperiores quis nihil perspiciatis repellendus dolore dolorem temporibus sunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab distinctio rem harum, eum quaerat minima dolores voluptatibus animi provident totam labore accusantium neque, quasi rerum impedit beatae, architecto reiciendis dignissimos.
            </p>
           
          </div>
          <div className="col-lg-4">
            <h2 className="text-center p-2" >Nossa Missão</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum inventore quia enim! Deserunt molestias inventore corporis at nemo debitis, accusamus, delectus asperiores quis nihil perspiciatis repellendus dolore dolorem temporibus sunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab distinctio rem harum, eum quaerat minima dolores voluptatibus animi provident totam labore accusantium neque, quasi rerum impedit beatae, architecto reiciendis dignissimos.
            </p>
           
          </div>
        </div>
      </div>

      <Botao 
                    caminho='/departamentos' 
                    estilo="btn btn-danger mb-5"
                    titulo="VOLTAR"/>

      <Rodape />
    </>
  );
};
export default PaginaSobre;
