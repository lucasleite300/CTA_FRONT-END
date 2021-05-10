import React from 'react'
import '../Rodape/rodape.css'

const Rodape = (props) =>{
    return(
        
    <footer className="container-flex text-center">

        <div className="row">

        <div className="col-6 col-sm-6 col-md-6 col-lg-4 p-2">
                <small><strong>Links Úteis:</strong> </small><br/>
                <small><a href="#"> Policia Militar do Maranhão</a><br/></small>
                <small><a href="#"> Policia Civil do Maranhão</a><br/></small>
                <small><a href="#"> Corpo de Bombeiros do Maranhão </a><br/></small>
                <small><a href="#"> Governo do Estado do Maranhão</a><br/></small>
                <small><a href="#"> Secretaria de Segurança Pública MA</a><br/></small>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-4 p-2">
                <small><strong>Redes Sociais:</strong> </small><br/>
                <small><a href="#"><i className="bi bi-instagram"></i> Instagram</a><br/></small>
                <small><a href="#"><i className="bi bi-facebook"></i> Facebook</a></small>
            </div>
           

            <div className=" col-sm-12 col-md-12 col-lg-4 p-2">
                <small> <strong> <i className="bi bi-map"/> Endereço:</strong> </small><br/>
                <small>Avenida Colares Moreira - Jardim Renascença, São Luís - MA</small><br/>
                <small><strong> <i className="bi bi-telephone"/> Contato:</strong> </small><br/>
                <small>(98) 3218-8995</small>
                
            </div>
        </div>
        <div className="p-3">
        <small ><strong>Desenvolvido pela Equipe Engenharia de Computação - UEMA</strong><br></br><strong>São Luis/MA - 2021</strong></small>
        </div>
    </footer>
    )
}
export default Rodape