import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
height: 100%;
position: relative;
display: flex;
align-items: center;
justify-content: center;
padding: 0 10%;
`
const Card_wrap = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
`
const Shape = styled.div`
clip-path: polygon(100% 0%, 100% 100%, 76% 100%, 16% 0%);
background-color: #A12559;
z-index: -1;
position: absolute;
width: 100%;
height: 100%;
`

export default function Price() {
    return (
        <Container>
            <Shape />
            <Card_wrap>
                <Card price="10" plan="Basic" />
                <Card price="20" plan="Intermediate" />
                <Card price="30" plan="Advance" />
            </Card_wrap>
        </Container>
    )
}
