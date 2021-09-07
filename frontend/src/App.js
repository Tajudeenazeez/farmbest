import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './bootstrap.min.css';
//import BootstrapCarousel from "./components/BootstrapCarousel";
import HomeScreen from "./screens/Homescreen";

function App() {
  return (
    <>
      <main style={{height:'max-content'}}>
        <Container>
          <Header/>
          <HomeScreen/>
        </Container>
      </main>
          <Footer/>
    </>
  );
}

export default App;
