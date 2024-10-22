import axios from "axios";
const API_URL = 'http://localhost:8081';

export const realizarPedido = async (pedido) => {
  try {
    const response = await axios.post("http://localhost:8081/", pedido);
    return response.data; // Acessa a resposta JSON do backend
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Erro ao realizar o pedido.");
    }
    throw new Error("Erro ao realizar o pedido.");
  }
};


export const acompanharPedido = async (op) => {
  try {
    const response = await axios.get(`${API_URL}/acompanhar/${op}`);
    return response.data; // Retorna a resposta da API
  } catch (error) {
    console.error("Erro ao buscar acompanhamento do pedido:", error);
    return { error: true, message: "Erro ao buscar dados do pedido." };
  }
};