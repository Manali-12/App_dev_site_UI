import React from 'react'
import styled from 'styled-components'
import lady from "../Images/ladycrop.png"
import Animatedshapes from './Animatedshapes'

const Container = styled.div`
height:100%;
font-family: 'Urbanist', sans-serif;
position: relative;
`
const Intro_wrap = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: 100%;
`
const Left_side = styled.div`
width:60%;
height: 100%;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`
const Main_heading = styled.h1`
text-align:left;
font-size: 75px;
`
const Heading_discription = styled.h5`
text-align:left;
font-size: 30px;
color: grey;
font-weight: 400;
`
const Left_wrap = styled.div`
`
const Info = styled.div``
const Button = styled.button`
border-radius: 10px;
border: none;
color:white;
background-color:#FB5B5A;
cursor: pointer;
padding: 20px 25px;
font-size: 20px;
letter-spacing: 2px;
`
const Right_side = styled.div`
width:40%;
height: 100%;
display: flex;
justify-content: flex-end;
`
const Image = styled.img`
padding: 10% 0 0 10%;
`
const Shape = styled.div`
clip-path: polygon(100% 0%, 100% 100%, 46% 100%, 84% 0%);
background-color:#3B0944;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -1;
`
export default function Intro() {
    return (
        <>
            <Container>
                <Animatedshapes />
                <Intro_wrap>
                    <Left_side>
                        <Left_wrap>
                            <Main_heading>
                                Adventures in <br />
                                creative age
                            </Main_heading>
                            <Heading_discription>
                                We believe that designing products and services in<br />
                                close partnership with our clients is the only way to<br />
                                have a real impact on their buisness.
                            </Heading_discription>
                            <Info>
                                <Button>
                                    Start Project
                                </Button>
                            </Info>
                        </Left_wrap>
                    </Left_side>
                    <Right_side>
                        <Image src={lady}></Image>
                    </Right_side>
                </Intro_wrap>
                <Shape></Shape>
            </Container>
        </>
    )
}