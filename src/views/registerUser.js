import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import FormCheck from '../components/form-check'
import { withRouter } from 'react-router-dom';
import { buscarCep } from '../utils/buscarcep'
import UserService from '../app/service/userService'
import { mensagemSucesso, mensagemErro } from '../components/toastr'

class RegisterUser extends React.Component{

    state={
        login:'',
        senha:'',
        senhaConfirmacao:'',
        tipoAdmin: false
    }

    constructor(){
        super();
        this.service = new UserService();
    }

    validar(){
        const msgs = [];

        if(!this.state.login){
            msgs.push('O campo Login é obrigatório');
        }

        if(!this.state.senha || !this.state.senhaConfirmacao){
            msgs.push('Para confirmação digite a senha 2X');
        } else if(this.state.senha !== this.state.senhaConfirmacao){
            msgs.push('As senhas são incompatíveis')
        }
        return msgs;
    }

    cadastrar = () =>{

        const msgs = this.validar();

        if(msgs && msgs.length > 0){
            msgs.forEach((msg, index) =>{
                mensagemErro(msg);
            });
            return false;  
        }

        const usuario = {
            login: this.state.login,
            senha: this.state.senha,
            tipoAdmin: this.state.tipoAdmin
        }

        this.service.salvar(usuario)
        .then( response =>{
            mensagemSucesso(response.data.message);
            this.props.history.push('/login')
        })
        .catch(error =>{
            mensagemErro(error.response.data)
        })
    }

    cancelar = () => {
        this.props.history.push('/login')
    }
    // buscaCEP= async () =>{
    //   const dataCep =  await buscarCep('13481237');
    //   console.log(dataCep);
    // }

    render(){
        return(
            <Card title="Cadastro de Usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Login *" htmlFor="inputLogin">
                                <input type="text"
                                        id="inputLogin"
                                        className="form-control"
                                        name="login"
                                        onChange={e => this.setState({login: e.target.value})}/>
                            </FormGroup>
                            <FormGroup label="Senha *" htmlFor="inputSenha">
                            <input type="password"
                                        id="inputLogin"
                                        className="form-control"
                                        name="senha"
                                        onChange={e => this.setState({senha: e.target.value})}/>
                            </FormGroup>
                            <FormGroup label="Confirmar Senha *" htmlFor="inputSenhaConfirmacao">
                            <input type="password"
                                        id="inputSenhaConfirmacao"
                                        className="form-control"
                                        name="senhaConfirmacao"
                                        onChange={e => this.setState({senhaConfirmacao: e.target.value})}/>
                            </FormGroup>
                            <FormCheck label="Admin" htmlFor="checkboxAdmin">
                                <input className="form-check-input"
                                type="checkbox" 
                                id="checkboxAdmin"
                                name="tipoAdmin" 
                                onChange={e => this.setState({tipoAdmin: e.target.checked})}/>
                            </FormCheck>
                            <button 
                            onClick={this.cadastrar} 
                            className="btn btn-success">
                                <i className="pi pi-sign-in"></i>Salvar</button>
                            <button 
                            onClick={this.cancelar} 
                            className="btn btn-danger">
                            <i className="pi pi-plus"></i>  Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(RegisterUser)