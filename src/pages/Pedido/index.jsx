import { useParams, useNavigate } from "react-router-dom"; // Adicionar o useNavigate
import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Acompanhamento from "../../components/Acompanhamento";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import pecas from "../../components/json/db.json";
import style from "./Pedido.module.css";
import { realizarPedido, acompanharPedido } from "../../Services/Services"; // Importa o serviço

function Pedido() {
  const params = useParams(); // Pega o ID da peça da URL
  const navigate = useNavigate(); // Hook para navegar programaticamente
  const [quantidade, setQuantidade] = useState(1); // Estado para armazenar a quantidade
  const [pedidoStatus, setPedidoStatus] = useState(""); // Estado para armazenar status do pedido (sucesso ou erro)
  const [acompanhamentoData, setAcompanhamentoData] = useState(null);
  const [op, setOp] = useState(null); // Estado para armazenar o OP do pedido

  // Supondo que você tenha uma lista de peças
  const pecaP = pecas.find((peca) => peca.id === params.id);

  if (!pecaP) {
    return <p>Peça não encontrada</p>;
  }

  // Função para manipular a realização do pedido
  const handlePedido = async () => {
    const pedido = {
      item: pecaP.id,
      quantidade: quantidade,
    };

    try {
      const response = await realizarPedido(pedido); // Chama a função do serviço
      console.log(response.dataPedidos.id);

      if (response.error === false) {
        setPedidoStatus(response.message);
        setOp(response.dataPedidos.OP); // Armazena o OP no estado
        console.log("OP:", response.dataPedidos.OP);

        // Redireciona para a página de acompanhamento, passando a OP como parâmetro
        navigate(`/acompanhamento/${response.dataPedidos.OP}`);
      } else {
        setPedidoStatus("Ocorreu um erro ao realizar o pedido.");
      }
    } catch (error) {
      setPedidoStatus("Erro ao realizar o pedido. Tente novamente.");
    }
  };

  // Função para converter o status numérico em texto
  const getStatusText = (status, op) => {
    switch (status) {
      case 1:
        return `Pedido Criado - OP: ${op}`;
      case 2:
        return "Entrou em Produção";
      case 3:
        return "Produzindo";
      case 4:
        return "Finalizado";
      default:
        return "Status Desconhecido";
    }
  };

  return (
    <>
      <Header />
      <Banner />
      <Container>
        <div className={style.containerr}>
          <div className={style.pedido}>
            <h1>Peça: {pecaP.titulo}</h1>
            <img src={pecaP.cover} alt="peca" />
            <div>
              <p><b>Cod da Peça:</b> {pecaP.id}</p>
              <p><b>Cor:</b> {pecaP.cor}</p>
              <p><b>Composição:</b> {pecaP.composicao}</p>
              <p><b>Condição:</b> {pecaP.condicao}</p>

              <label htmlFor="quantidade"><b>Quantidade:</b></label>
              <input
                type="number"
                id="quantidade"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)} // Atualiza o estado da quantidade
              />

              <button onClick={handlePedido}>Realizar Pedido</button>
              {pedidoStatus && (
                <div className={style.statusMessage}>
                  {pedidoStatus}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Pedido;
