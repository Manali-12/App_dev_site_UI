import React from 'react'
import styled from 'styled-components'
import { Link as LinkS } from "react-scroll"


const Division = styled.div`
height:70px;
font-family: 'Rubik', sans-serif;
width:100%;
position: fixed;
top: 0;
left: 0;
z-index: 1000000;
background-color: white;
box-shadow: 0px 0px 38px -5px rgba(181,181,181,0.75);
-webkit-box-shadow: 0px 0px 38px -5px rgba(181,181,181,0.75);
-moz-box-shadow: 0px 0px 38px -5px rgba(181,181,181,0.75);
`
const Wrap = styled.div`
display:flex;
flex-direction:row;
padding:10px 60px;
align-items: center;
`
const Left_side = styled.div`
width:40%;
`
const Logo = styled.h2`
margin:0;
color:#560764;
font-size:25px;
text-decoration:underline;`
const Forcolor = styled.span`
color:#ECBC55 ;`
const Forbold = styled.span`
font-size:30px;`
const Right_side = styled.div`
width: 60%;
`
const Page_nav_wrap = styled.div`
display:flex;
flex-direction:row;
align-items: center;
justify-content: end;
`
const Page_nav = styled.div`
margin:0;
display:flex;
flex-direction:row;
justify-content:space-between;
@media only screen and (max-width:480px){
    display: none;
}

`
const Nav_menu = styled.div`
margin:0 10px;
font-size:20px;
color:grey;
cursor: pointer;

&::hover{
    color: darkslategray;
}
`
const Button = styled.button`
margin-left:40px;
color: white;
border: none;
border-radius: 10px;
background-color:#560764 ;
padding: 10px 25px;
font-size: 16px;
cursor: pointer;
`

export default function Navbar() {
    return (
        <Division id="features">
            <Wrap>
                <Left_side>
                    <Logo>
                        HEL<Forbold>P<Forcolor>RO</Forcolor></Forbold>
                    </Logo>
                </Left_side>
                <Right_side>
                    <Page_nav_wrap>
                        <Page_nav>
                            <Nav_menu ><LinkS to="/" smooth={true} duration={1000}>Home</LinkS></Nav_menu>
                            <Nav_menu ><LinkS to="features" smooth={true} duration={1000}>Features</LinkS></Nav_menu>
                            <Nav_menu ><LinkS to="services" smooth={true} duration={1000}>Services</LinkS></Nav_menu>
                            <Nav_menu><LinkS to="pricing" smooth={true} duration={1000}>Pricing</LinkS></Nav_menu>
                            <Nav_menu><LinkS to="contact" smooth={true} duration={1000}>Contact</LinkS></Nav_menu>
                        </Page_nav>
                        <Button><LinkS to="contact" smooth={true} duration={1000}>Join Us</LinkS></Button>
                    </Page_nav_wrap>

                </Right_side>
            </Wrap>
        </Division>
    )
}
