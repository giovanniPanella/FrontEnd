import styles from "./Acompanhamento.module.css"



function Acompanhamento({ pedido, inicioProducao, statusProducao, pronto }){

    return (
        <>
        <div className={styles.acompanhamento}>
            <h2>Acompanhamento do Pedido</h2>
            <p><strong>Pedido:</strong> {pedido}</p>
            <p><strong>Início da Produção:</strong> {inicioProducao}</p>
            <p><strong>Status de Produção:</strong> {statusProducao}</p>
            <p><strong>Pronto:</strong> {pronto ? 'Sim' : 'Não'}</p>
            {/* <div className={styles.imagens}>
            <p>Pedido Recebido</p>
            <img src={'../../images/caixa.png'} alt="" />
            <h2> - </h2>
            <p>Entrou em Produção</p>
            <h2> - </h2>
            <img src={'../../images/producao.png'} alt="" />
            <h2> - </h2>
            <p>Produzindo</p>
            <h2> - </h2>
            <img src={'../../images/engrenagem.png'} alt="" />
            <h2> - </h2>
            <p>Pronto</p>
            <h2> - </h2>
                <img src={'../../images/Caminhao.png'} alt="" />
            </div> */}
        </div>
        </>
    )}
export default Acompanhamento
