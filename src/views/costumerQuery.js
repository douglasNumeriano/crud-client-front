import React from 'react'
import Card from '../components/card'
import TableCostumer from '../components/tableCostumer'
import CostumerService from '../app/service/costumerService';
import {mensagemSucesso, mensagemErro } from '../components/toastr'
import { withRouter } from 'react-router-dom';

class CostumerQuery extends React.Component{

    state = {
        clientes: []
    }

    constructor(){
        super();
        this.service = new CostumerService();
        this.carregarTabela();
    }

    carregarTabela = () => {
        this.service.consulta()
        .then(response =>{
            const lista = response.data;
            this.setState({clientes: lista})
        }).catch(error => {
            mensagemErro(error.response.data)
        }) 
    }

    cadastrarCliente = () => {
        this.props.history.push('/registerCostumer');
    }

    editar = (id) => {
        this.props.history.push(`/registerCostumer/${id}`);
    }   
    
    deletarCliente = (cliente) => {
       this.service.deletar(cliente.id)
       .then(response => {
            const clientes = this.state.clientes;
            const index = clientes.indexOf(cliente)
            clientes.splice(index, 1);
            this.setState(clientes);
            mensagemSucesso('Cliente deletado com sucesso!');
       })
       .catch(error =>{
           mensagemErro('Erro ao deletar cliente.')
       })
    }

    render(){
        return(
            <Card title="Lista de Clientes">
                <div className="row">
                    <div className="col-3">
                        <button 
                        onClick={this.cadastrarCliente} 
                        className="btn btn-success">
                        <i className="pi pi-plus"></i>Cadastrar Cliente
                        </button>
                    </div>
                    <br/><br/>
                    <div className="col-lg-12">
                       
                            <TableCostumer clientes={this.state.clientes}
                                            editar={this.editar}
                                            deletarCliente={this.deletarCliente}/>
                        
                    </div>
                   
                </div>        
            </Card>
        )
    }
}

export default withRouter(CostumerQuery)