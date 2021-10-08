import styled from "styled-components";
import { Route, Switch, Redirect } from "react-router-dom"

import Contact from "./Components/Contact";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Price from "./Components/Price";
import Services from "./Components/Services";
const Container = styled.div`
height:100vh;
width: 100vw;
font-family: 'Urbanist', sans-serif;
position: relative;
padding: 0;
margin: 0;
@media only screen and (max-width:480px){
    height: auto;
}

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
