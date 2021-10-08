import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'


const Container = styled.div`
background-color: black;
height: 8vh;
font-family: 'Urbanist', sans-serif;
width: 100vw;
margin: 0 0 -10px 0;
`
const Wrap = styled.div`
display: flex;
height: 100%;
justify-content: space-between;
align-items: center;
@media only screen and (max-width:480px){
   flex-direction: column;
}
`
const Left = styled.div`
display: flex;
flex-direction: row;
margin: 0 10px;
@media only screen and (max-width:480px){
    margin:5px 0 ;
}
`
const Right = styled.div`
color: whitesmoke;
margin: 0 10px;
`
const Points = styled.div`
color: whitesmoke;
margin: 0 10px;
cursor: pointer;
`


export default function Footer() {
    return (
        <Container>
            <Wrap>
                <Left>
                    <Points>Guide</Points>
                    <Points>Support</Points>
                    <Points>APIs</Points>
                    <Points>Community</Points>
                </Left>
                <Right>
                    <Link to="home" smooth={true} duration={1000}>HELPRO ©</Link>
                </Right>
            </Wrap>
        </Container>
    )
}
