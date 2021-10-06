import styled from "styled-components";
import Contact from "./Components/Contact";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Price from "./Components/Price";
import Services from "./Components/Services";
const Container = styled.div`
height:100vh;
font-family: 'Urbanist', sans-serif;
`
function App() {
  return (
    <>
      <Navbar />
      <Container><Intro /></Container>
      <Container><Features /></Container>
      <Container><Services /></Container>
      <Container><Price /></Container>
      <Container><Contact /></Container>
      <Footer />
    </>
  );
}

export default App;
