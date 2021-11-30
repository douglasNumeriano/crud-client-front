import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import SelectPadrao from '../components/select-padrao'
import InputTel from '../components/input-tel'
import InputCep from '../components/input-cep'
import InputCpf from '../components/input-cpf'
import { buscarCep } from '../utils/buscarcep'
import CostumerService from '../app/service/costumerService'
import { mensagemSucesso, mensagemErro } from '../components/toastr'
import { withRouter } from 'react-router-dom';


class RegisterCostumer extends React.Component{

    state={
        id: null,
        cpf: '',
        nome: '',
        cep: '',
        uf: '',
        bairro: '',
        cidade: '',
        logradouro: '',
        complemento:'',
        tipoTelefone:'',
        numero: '',
        enderecoVirtual: ''
    }

    constructor(){
        super();
        this.service = new CostumerService();
    }

    validar(){
        const msgs = [];

        if(!this.state.cpf || !this.state.nome || !this.state.cep  || !this.state.uf
            || !this.state.bairro || !this.state.cidade || !this.state.logradouro || !this.state.tipoTelefone
            || !this.state.numero || !this.state.enderecoVirtual){
            msgs.push('Um (ou mais) campos obrigatórios não está(ão) preenchidos');
        }  

        return msgs;
    }

    removerMascara = () => {
        let cepAtualizado = this.state.cep
        let cpfAtualizado = this.state.cpf
        let telefoneAtualizado = this.state.numero

        cepAtualizado = cepAtualizado.replace('-', '');
        cpfAtualizado = cpfAtualizado.replace('-', '');
        cpfAtualizado = cpfAtualizado.replaceAll('.', '');

        telefoneAtualizado = telefoneAtualizado.replace('(', '');
        telefoneAtualizado = telefoneAtualizado.replace(')', '');
        telefoneAtualizado = telefoneAtualizado.replace('-', '');

        console.log("Remover mascara", cepAtualizado, cpfAtualizado, telefoneAtualizado);

        // this.setState{cep: cepAtualizado} 
        // this.setState({cpf: cpfAtualizado})
        // this.setState({numero: telefoneAtualizado})

        console.log('Mascara removida', this.state);
    }

    // Este método é executado após ao render
    componentDidMount(){
        const params = this.props.match.params;
        if(params.id){
            this.service
            .buscarPorId(params.id)
            .then(response => {
                this.setState({...response.data})
            })
            .catch(error => {
                mensagemErro(error.response .data)
            })
        }
    }

    cadastrar = () =>{

        const msgs = this.validar();

        if(msgs && msgs.length > 0){
            msgs.forEach((msg, index) =>{
                mensagemErro(msg);
            });
            return false;  
        }

        this.removerMascara();

        console.log(this.state);
       
        // this.service.salvar(this.state)
        // .then( response =>{
        //     mensagemSucesso(response.data.message);
        //     this.props.history.push('/costumerQuery')
        // })
        // .catch(error =>{
        //     mensagemErro(error.response.data)
        // })
    }

    handleBuscarCep = async () => {
        let cep = this.state.cep.replace('-', '')
        const dataCep =  await buscarCep('13481237');
        console.log(dataCep);
        this.setState(
            {
                cidade: dataCep.localidade
            }
        )
        console.log("aquiii", this.state);
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name] : value })
    }

    render(){

        const tipoTelefone = [
            {label: 'Residencial', value: 1},
            {label: 'Comercial', value: 2},
            {label: 'Celular', value: 3} 
        ]

        return(
            <Card title="Cadastro de Cliente">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <div div className="row">
                                <div className="col-6">
                                    <FormGroup label="Cpf *" htmlFor="inputCpf">
                                    <InputCpf type="text"
                                                id="inputCpf"
                                                className="form-control"
                                                name="cpf"
                                                value={this.state.cpf}
                                                onChange={this.handleChange}></InputCpf>
                                    </FormGroup>
                                </div>
                                <div className="col-6">
                                    <FormGroup label="Nome *" htmlFor="inputNome">
                                    <input type="text"
                                                id="inputNome"
                                                className="form-control"
                                                name="nome"
                                                value={this.state.nome}
                                                onChange={this.handleChange}/>
                                    </FormGroup>
                                </div>
                            </div>
                            <div div className="row">
                                <div className="col-4">
                                    <FormGroup label="Cep *" htmlFor="inputCep">
                                    <InputCep   type="text"
                                                id="inputCep"
                                                className="form-control"
                                                name="cep"
                                                value={this.state.cep}
                                                onChange={this.handleChange}>
                                                </InputCep>
                                                
                                    </FormGroup>
                                </div>
                                <div className="col-2">
                                    <br/>
                                    <button 
                                        onClick={this.handleBuscarCep} 
                                        className="btn btn-success">
                                        <i className="pi pi-sign-in"></i>Buscar Cep
                                    </button> 
                                </div>
                                <div className="col-2">
                                    <FormGroup label="UF *" htmlFor="inputUf">
                                    <input type="text"
                                                id="inputUf"
                                                className="form-control"
                                                name="uf"
                                                value={this.state.uf}
                                                onChange={this.handleChange}/>
                                    </FormGroup>
                                </div>
                                <div className="col-4">
                                    <FormGroup label="Bairro *" htmlFor="inputBairro">
                                    <input type="text"
                                                id="inputBairro"
                                                className="form-control"
                                                name="bairro"
                                                value={this.state.bairro}
                                                onChange={this.handleChange}/>
                                    </FormGroup>
                                </div>
                            </div>

                            <div div className="row">
                                <div className="col-4">
                                    <FormGroup label="Cidade *" htmlFor="inputCidade">
                                        <input type="text"
                                                id="inputCidade"
                                                className="form-control"
                                                name="cidade"
                                                value={this.state.cidade}
                                                onChange={this.handleChange}/>
                                    </FormGroup>
                                </div>
                                <div className="col-4">
                                    <FormGroup label="Logradouro *" htmlFor="inputLogradouro">
                                    <input type="text"
                                                id="inputLogradouro"
                                                className="form-control"
                                                name="logradouro"
                                                value={this.state.logradouro}
                                                onChange={this.handleChange}/>
                                    </FormGroup>
                                </div>
                                <div className="col-4">
                                    <FormGroup label="Complemento" htmlFor="inputComplemento">
                                    <textarea type="textArea"
                                                id="inputComplemento"
                                                rows="4" cols="50"
                                                className="form-control"
                                                name="complemento"
                                                value={this.state.complemento}
                                                onChange={this.handleChange}/>
                                    </FormGroup>
                                </div>
                            </div>

                            <div div className="row">
                                <div className="col-4">
                                    <FormGroup label="Tipo telefone *" htmlFor="inputTipoTefone">
                                    <SelectPadrao className="form-control" value={this.state.tipoTelefone} onChange={this.handleChange} name="tipoTelefone" lista={tipoTelefone}/>
                                    </FormGroup>
                                </div>
                                <div className="col-4">
                                    <FormGroup label="Numero Tel *" htmlFor="inputNumero">
                                            <InputTel   type="text"
                                            id="inputNumero"
                                            className="form-control"
                                            name="numero"
                                            value={this.state.numero}
                                            onChange={this.handleChange}
                                         /> 
                                    </FormGroup>
                                </div>
                                <div className="col-4">
                                    <FormGroup label="Email: *" htmlFor="inputEmail">
                                    <input type="email"
                                                id="inputEmail"
                                                className="form-control"
                                                name="enderecoVirtual"
                                                value={this.state.enderecoVirtual}
                                                onChange={this.handleChange}
                                                />
                                    </FormGroup>
                                </div>
                            </div>
                            <button 
                            onClick={this.cadastrar} 
                            className="btn btn-success">
                                <i className="pi pi-sign-in"></i>Salvar</button>
                            <button 
                            // onClick={this.cancelar} 
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

export default withRouter(RegisterCostumer)