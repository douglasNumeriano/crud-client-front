import Axios from 'axios';

export async function buscarCep(cep){  
   return await 
   Axios.get(`http://viacep.com.br/ws/${cep}/json/`)
   .then(response => {
    return response.data;
   })
   .catch(error =>{
       console.log(error);
   })
}