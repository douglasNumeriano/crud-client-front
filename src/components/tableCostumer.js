import React from 'react'

export default props => {

    const rows = props.clientes.map( cliente => {
        return (
            <tr key={cliente.id}>
                <td>{cliente.nome}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.cidade}</td>
                <td>{cliente.numero}</td>
                <td>{cliente.enderecoVirtual}</td>
                <tb>
                    <button type="button" 
                            className="btn btn-primary"
                            onClick={e => props.editar(cliente.id)}>Editar
                    </button>
                    <button type="button" 
                            className="btn btn-danger" 
                            onClick={e => props.deletarCliente(cliente)}>
                            Excluir
                    </button>
                </tb>
            </tr>    
        )    
    })
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Cpf</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Ação</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}