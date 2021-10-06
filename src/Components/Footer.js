import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
background-color: black;
height: 8vh;
font-family: 'Urbanist', sans-serif;

`
const Wrap = styled.div`
display: flex;
height: 100%;
justify-content: space-between;
align-items: center;
`
const Left = styled.div`
display: flex;
flex-direction: row;
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
