import React from 'react'
import styled from 'styled-components'

const Circle = styled.div`
background-color:${props => props.color} ;
width:${props => props.width};
height: ${props => props.height};
position: absolute;
top:${props => props.top};
left:0px;
z-index: -1;
opacity: 2;
animation: circle ${props => props.time} linear infinite;
@keyframes circle{
    to{
        transform: translate(${props => props.mw},${props => props.mh})
    }
}

`


export default function Animatedshapes() {
    return (<>
        <Circle top="0px" color="#D7E9F7" width="70px" height="70px" mw="100vw" mh="70vh" time="25s" />
        <Circle top="600px" color="#FFFEB7" width="60px" height="60px" mw="100vw" mh="10vh" time="6s" />
        <Circle top="90px" color="#E5FBB8" width="150px" height="150px" mw="100vw" mh="0vh" time="9s" />
    </>
    )
}
