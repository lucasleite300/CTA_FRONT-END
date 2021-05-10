import React from 'react'

const PesquisaDepartamentos  = ()=>{
    return(
        <>
        
      
        <div class="d-flex justify-content-end text-center"><h1 className="caixa-usuario"><i className="bi bi-person-circle m-1"></i></h1>
                        <p className="caixa-usuario"><small>Bem-Vindo<br></br> Usuário</small></p></div>

                    <form action="" className="navbar-form navbar-right col-12">
                        <div className="input-group">
                            <input type="Search" placeholder="Pesquisar nessa área..." className="form-control" />
                            <div className="input-group-btn">
                                <button className="btn btn-outline-info">
                                    <span className="bi bi-search"></span>
                                </button>
                            </div>
                        </div>
                    </form>
        </>
    )


}
export default PesquisaDepartamentos