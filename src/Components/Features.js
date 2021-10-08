import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import mobile from "../Images/mobile.png"

const Container = styled.div`
margin-top: -1px;
height: 100%;
display: flex;
position: relative;


`
const Left_side = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: flex-end;
@media only screen and (max-width:480px){
   display: none;
}
`
const Image = styled.img`
width: 70%;
height: 70%;
margin:auto 10% 10% auto;
`
const Right_side_wrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
@media only screen and (max-width:480px){
   width: 100%;
   padding: 5% 5% 10% 17%;
}
`
const Right_side = styled.div`
`
const Heading = styled.h1`
font-weight: 400;
font-size:55px ;
margin-top: 30px;
@media only screen and (max-width:480px){
    font-size:35px;
    color: #FB5B5A;
}
`
const Disc = styled.h4`
font-size: 30px;
color: darkslategray;
font-family: 'Courgette', cursive;
margin-bottom: 10px;
@media only screen and (max-width:480px){
   font-size:20px;
}
`
const Brief = styled.h6`
font-size: 25px;
color: grey;
font-weight: 400;
margin-top: 0;
@media only screen and (max-width:480px){
  font-size:16px
}
`
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
const Shape = styled.div`
width: 100%;
height: 100%;
background-color:#3B0944;
clip-path: polygon(50% 0%, 0% 0%, 0% 100%, 16% 100%);
position: absolute;
z-index: -1;
`



export default function Features() {
    return (
        <Container id="features">
            <Left_side>
                <Image src={mobile}>

                </Image>
            </Left_side>
            <Right_side_wrap>
                <Right_side>
                    <Heading>
                        <b>Good</b> design<br />
                        <b>Good</b> buisness
                    </Heading>
                    <Disc>
                        We know that good design means good buisness.
                    </Disc>
                    <Brief>
                        We help our clients succeed by creating brand identitie, digital<br />
                        experiences and print materials that communicate clearly, achieve<br />
                        marketing goals, and look fantastic.<br /><br />
                        we care your buisness and guarantee you to achieve marketing goals.
                    </Brief>
                    <Button><Link to="services" smooth={true} duration={1000}>Learn More</Link></Button>
                </Right_side>
            </Right_side_wrap>
            <Shape />
        </Container>
    )
}
