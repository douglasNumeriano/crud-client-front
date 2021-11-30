import React from 'react'
import { withRouter } from 'react-router-dom';

class Home extends React.Component {

    cadastraUsuario = () =>{
        this.props.history.push("/resgisterUser");
    }

    cadastraCliente = () =>{
        this.props.history.push("/");
    }

    render(){
        return(
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Este é meu sistema de estudo.</p>
                <hr className="my-4"/>
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                <a className="btn btn-primary btn-lg" 
                   href="#/registerUser" 
                   role="button"><i className="fa fa-users"></i>  Cadastrar Usuário</a>
                <a className="btn btn-danger btn-lg" 
                   href="#/costumerQuery"
                   role="button"><i className="fa fa-users"></i>  Lista de Clientes</a>
                </p>
            </div>
        );
    }
}

export default withRouter(Home)