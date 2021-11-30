import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
// import FormCheck from '../components/form-check'
import { withRouter } from 'react-router-dom';
import UserService from '../app/service/userService'
// import LocalStorageService from '../app/service/localstorageService'
import { mensagemErro } from '../components/toastr'
// import { AuthContext  } from '../main/provedorAutenticacao'

class Login extends React.Component{

    state = {
        login: '',
        senha: '',
        // tipoAdmin: false
    }

    constructor(){
        super();
        this.service = new UserService();
    }

    entrar = () => {
       this.service.autenticar({
            login: this.state.login,
            senha: this.state.senha
        }).then( response => {
            console.log(response.data)
            this.props.history.push('/home')
        }).catch( error => {
            mensagemErro(error.response.data)
        })
    }

    prepareCadastrar = () => {
       this.props.history.push('/registerUser');
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Login: *" htmlFor="exampleInputLogin">
                                                <input type="text" 
                                                    value={this.state.login}
                                                    onChange={e => this.setState({login: e.target.value})}
                                                    className="form-control" 
                                                    id="exampleInputLogin"  
                                                    placeholder="Digite o Login" />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="exampleInputPassword">
                                                <input type="password" 
                                                        value={this.state.senha}
                                                        onChange={e => this.setState({senha: e.target.value})}
                                                        className="form-control" 
                                                        id="exampleInputPassword" 
                                                        placeholder="Password" />
                                            </FormGroup>
                                            <br/>
                                            <button 
                                            onClick={this.entrar} 
                                            className="btn btn-success">
                                                <i className="pi pi-sign-in"></i>Entrar</button>
                                            <button 
                                            onClick={this.prepareCadastrar} 
                                            className="btn btn-danger">
                                            <i className="pi pi-plus"></i>  Cadastrar
                                            </button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }                                        
}

// Login.contextType = AuthContext

export default withRouter( Login )