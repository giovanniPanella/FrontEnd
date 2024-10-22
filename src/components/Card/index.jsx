import { Link, useNavigate } from "react-router-dom"
import styles from "./Card.module.css"

function Card({linkImg,cor,composicao,condicao,tit}){
    const navigate = useNavigate();

    const handleGoToPedidos = () => {
      // Navegar para a página de pedidos com o ID da peça
      navigate(`/pedido/${linkImg}`);
    };
    return (
        <>
        <section className={styles.card}>
        <a href={`/pedido/${linkImg}`} onClick={handleGoToPedidos} rel="noreferrer noopener">
          <img src={`/images/peca${cor}.png`} alt={`Imagem da Peça - ${cor}`} />
        </a>
            <h2>{tit}</h2>
               <p><b>Cor do Item:</b> {cor}</p>
               <p><b>Composição:</b> {composicao}</p>
               <p><b>Condição: </b>{condicao}</p>


        </section>
        </>
    )}
export default Card
