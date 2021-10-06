import React from 'react'
import styled from 'styled-components'
const Card_in = styled.div`
display: flex;
flex-direction: column;
padding: 5%;
border-radius: 10px;
background-color: white;
height: 100%;
align-items: center;
box-shadow: -3px 1px 22px 16px rgba(0,0,0,0.08);
-webkit-box-shadow: -3px 1px 22px 16px rgba(0,0,0,0.08);
-moz-box-shadow: -3px 1px 22px 16px rgba(0,0,0,0.08);
`
const Button = styled.div`
background-color: white;
border: 1px solid #A12559;
color: #A12559;
padding: 10px 5px;
border-radius: 25px;
font-size: 16px;
text-align: center;
width: max-content;
cursor: pointer;
`
const Price = styled.p`
font-size: 25px;
`
const Plan_info = styled.div`
margin:15px 0 ;
font-size: 16px;
text-align: left;
width: 100%;
`
const Button_down = styled.div`
border-radius: 10px;
border: none;
color:white;
background-color:#FB5B5A;
cursor: pointer;
padding: 10px 15px;
font-size: 20px;
letter-spacing: 2px;
margin-top: 10%;
`
export default function Card({ price, plan }) {
    return (
        <Card_in>
            <Price>$<b>{price}</b>/month</Price>
            <Button>{plan} Plan</Button>
            <Plan_info>200 Hand-Crafted Templates</Plan_info>
            <Plan_info>Exclusive Support</Plan_info>
            <Plan_info>50+ PreBuilt</Plan_info>
            <Plan_info>Premium Plugins</Plan_info>
            <Button_down>Join Now</Button_down>
        </Card_in>
    )
}
