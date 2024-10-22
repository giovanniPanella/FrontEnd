import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Acompanhamento() {
  const { op } = useParams();
  const [pedido, setPedido] = useState(null);

  useEffect(() => {
    // Buscar o pedido baseado na OP
    fetch(`http://localhost:8081/acompanhar/${op}`)
      .then(response => response.json() 
    )
      .then(data => setPedido(data))
      .catch(error => console.error('Erro ao buscar o pedido:', error));
  }, [op]);
      
  if (!pedido) {
    return <div>Carregando...</div>;
    
  }

  return (
    <div>
      <h2>Acompanhamento do Pedido</h2>
      <p>Pedido: {pedido.id}</p>
      <p>Início da Produção: {pedido.inicioProducao}</p>
      <p>Status de Produção: {pedido.status}</p>
      <p>Pronto: {pedido.pronto ? 'Sim' : 'Não'}</p>
    </div>
  );
}

export default Acompanhamento;