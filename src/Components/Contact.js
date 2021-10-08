import React from 'react'
import styled from 'styled-components'
import hands from "../Images/hands.png"


const Shape = styled.div`
clip-path: polygon(76% 0%, 100% 0%, 100% 100%, 76% 100%);
background-color: #F1BBD5;
z-index: -2;
width: 100%;
height: 100%;
position: absolute;
`
const Container = styled.div`
display: flex;
width: 100%;
height: 100%;
position: relative;
margin-top:-1px ;
`
const Wrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
width: 100%;

`
const Form_wrap = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content:center;
align-items: center;
margin-top: 15%;
`
const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
padding: 3% 7%;
background-color: white;
border-radius:10px ;
box-shadow: -3px 1px 22px 16px rgba(0,0,0,0.08);
-webkit-box-shadow: -3px 1px 22px 16px rgba(0,0,0,0.08);
-moz-box-shadow: -3px 1px 22px 16px rgba(0,0,0,0.08);

@media only screen and (max-width:480px){
flex-direction:column;
margin:5% 0;
}

`
const Left = styled.div`
display: flex;
flex-direction: column;
`
const Right = styled.div`
display: flex;
flex-direction: column;
`
const Input = styled.input`
font-size: 16px;
padding: 14px 10px;
border-radius: 10px;
border: 1px solid grey ;
margin: 10px 20px;
`
const Textarea = styled.textarea`
font-size: 16px;
padding: 10px 10px 80px;
border-radius: 10px;
border: 1px solid grey ;
margin: 10px 20px;
`
const Image = styled.img`
height: 50%;
position: absolute;
height: 100%;
width: 100%;
display:flex;
justify-content: end;
z-index: -1;
@media only screen and (max-width:480px){
  display: none;
}
`
const Button = styled.button`
border-radius: 10px;
border: none;
color:white;
background-color:#FB5B5A;
cursor: pointer;
padding: 10px 10px;
font-size: 20px;
letter-spacing: 2px;
margin: 10px 20px;

`
const Title = styled.p`
font-size: 35px;
font-weight: 600;
margin: 0 10%;
`


export default function Contact() {
    return (
        <Container id="contact">
            <Wrap>
                <Form_wrap>
                    <Form>
                        <Title> Questions?<br />
                            Let's get in touch!
                        </Title>

                        <Left>
                            <Input placeholder="Your Name"></Input>
                            <Input placeholder="Your Email"></Input>
                            <Input placeholder="Subject"></Input>
                        </Left>
                        <Right>
                            <Textarea placeholder="Your Message"></Textarea>
                            <Button>Send</Button>
                        </Right>
                    </Form></Form_wrap>
                <Image src={hands}></Image>
            </Wrap>
            <Shape />
        </Container>
    )
}
