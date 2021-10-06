import React from 'react'
import styled from 'styled-components'
const Division = styled.div`
height:60px;
font-family: 'Rubik', sans-serif
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
justify-content:space-between;`
const Nav_menu = styled.div`
margin:0 5px;
font-size:20px;
color:darkslategray;`
const Button = styled.button`
margin-left:40px;
color: white;
border: none;
border-radius: 10px;
background-color:#560764 ;
padding: 10px 25px;
font-size: 16px;
`

export default function Navbar() {
    return (
        <Division>
            <Wrap>
                <Left_side>
                    <Logo>
                        HEL<Forbold>P<Forcolor>RO</Forcolor></Forbold>
                    </Logo>
                </Left_side>
                <Right_side>
                    <Page_nav_wrap>
                        <Page_nav>
                            <Nav_menu>Home</Nav_menu>
                            <Nav_menu>Features</Nav_menu>
                            <Nav_menu>Services</Nav_menu>
                            <Nav_menu>Pricing</Nav_menu>
                            <Nav_menu>Contact</Nav_menu>
                        </Page_nav>
                        <Button>Join Us</Button>
                    </Page_nav_wrap>

                </Right_side>
            </Wrap>
        </Division>
    )
}
