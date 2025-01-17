// Servicio para comunicarnos con el back-end

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/clientes'

class ClienteService {

  static async getAllClientes() {
    return axios.get(API_URL);
  }

  static async createCliente(cliente) {
    return axios.post(API_URL, cliente);
  }

  static async getClienteById(clienteId) {
    return axios.get(API_URL + '/' + clienteId);
  }

  static async updateCliente(clienteId, cliente) {
    return axios.put(API_URL + '/' + clienteId, cliente);
  }

  static async deleteCliente(clienteId) {
    return axios.delete(API_URL + '/' + clienteId);
  }
  
}

export default ClienteService;
