import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
background-color: black;
height: 8vh;
font-family: 'Urbanist', sans-serif;
width: 100vw;
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
                    HELPRO ©
                </Right>
            </Wrap>
        </Container>
    )
}
