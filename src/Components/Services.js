import React from 'react'
import styled from 'styled-components'
import lady from "../Images/lady.png"
import PermDataSettingOutlinedIcon from '@material-ui/icons/PermDataSettingOutlined';

const Shape = styled.div`
clip-path: polygon(16% 0%, 0% 0%, 0% 100%, 16% 100%);
background-color: #5F1854;
z-index: -1;
position: absolute;
width: 100%;
height: 100%;
`
const Container = styled.div`
display: flex;
height: 100%;
position: relative;
margin-top: -1px;
`
const Left_side = styled.div`
display: flex;
justify-content: flex-end;
width: 40%;
height: 100%;
overflow: hidden;
`
const Right_side = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 60%;
`
const Right_side_wrap = styled.div`

`
const Image = styled.img`
width: 100%;

margin: 10% auto auto auto ;
`
const Heading = styled.h1`
font-size: 55px;
font-weight: 600;

`
const Disc = styled.p`
color: grey;
font-size: 20px;
letter-spacing: 1px;
`
const Card_wrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 10%;
`
const Card = styled.div`
text-align: center;
box-shadow: -3px 1px 22px 16px rgba(0,0,0,0.08);
-webkit-box-shadow: -3px 1px 22px 16px rgba(0,0,0,0.08);
-moz-box-shadow: -3px 1px 22px 16px rgba(0,0,0,0.08);
width: 25%;
padding: 16px;
`
const Info = styled.p``
const Button = styled.button`
border-radius: 10px;
border: none;
color:white;
background-color:#FB5B5A;
cursor: pointer;
padding: 20px 25px;
font-size: 20px;
letter-spacing: 2px;
margin: 10% auto 0;
`

export default function Services() {
    return (
        <Container>
            <Shape />
            <Left_side>
                <Image src={lady}></Image>
            </Left_side>
            <Right_side>
                <Right_side_wrap>
                    <Heading>
                        Simple process to start
                    </Heading>
                    <Disc>
                        We provide digital experiences services to startups and small<br>
                        </br>buisnesses to looking for partner of their digital media,<br />
                        design and development, lead generation and communications<br />
                        requirements. We work with you , not for you.Although we have a <br />
                        great resources
                    </Disc>
                    <Card_wrap>
                        <Card>
                            <PermDataSettingOutlinedIcon />
                            <Info>Just few Steps <br />to understand <br />how this works</Info>
                        </Card>
                        <Card>
                            <PermDataSettingOutlinedIcon />
                            <Info>Just few Steps <br />to understand <br />how this works</Info>
                        </Card>
                        <Card>
                            <PermDataSettingOutlinedIcon />
                            <Info>Just few Steps <br />to understand <br />how this works</Info>
                        </Card>
                    </Card_wrap>
                    <Button>How it works</Button>
                </Right_side_wrap>
            </Right_side>
        </Container>
    )
}
