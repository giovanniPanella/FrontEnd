import styles from "./Category.module.css"
import pecas from"../json/db.json"
import Card from "../Card"


export const categories =[
    "Bases", 
    "Peças",
  ]
  
  export function filterCategory(id){

    return pecas.filter(peca=> peca.category ===categories[id])
  }


function Category({tipo}){
    return (
    <section className={styles.category}>
        <h2>{tipo}</h2>
        <div>
          {
            filterCategory(0).map((peca)=>{ 
              return <Card 
              id={peca.id} 
              key={peca.id}
              tit={peca.titulo}
              linkImg={peca.id}
              cor={peca.cor}
              composicao={peca.composicao}
              condicao = {peca.condicao}                
              />})
          }          
      
        </div>
     </section>
    )}
export default Category
