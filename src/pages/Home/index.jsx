import Banner from "../../components/Banner";
import Category from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


function Home() {
  
  return (
    <>
      <Header/>
      <Banner/>
      <Container>
        <Category
          tipo="Bases"
        />
      </Container>
      <Footer/>
      </>
  )
}

export default Home