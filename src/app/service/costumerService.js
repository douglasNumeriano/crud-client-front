import ApiService from '../apiservice'

// import ErroValidacao from '../exception/ErroValidacao'

class CostumerService extends ApiService {

    constructor(){
        super('/api/cliente')
    }

    buscarPorId(id){
        return this.get(`/${id}`);
    }

    salvar(cliente){
        return this.post('', cliente);
    }

    consulta(){
        return this.get('');
    }

    deletar(id){
        return this.delete(`/${id}`)
    }

}

export default CostumerService;