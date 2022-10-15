import styled from "styled-components"


export const AppBar = styled.header`
padding: 10px;
background-color: #80b5f2;
color: #1b222a;
box-shadow: 0px 0px 3px 3px grey;
position: relative;


`
export const Container = styled.div`
width: 1200px;
box-sizing: border-box;
margin-left: auto;
margin-right: auto;
padding: 10px;
display: flex;
justify-content: space-between;
`
export const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const SpanRight = styled.span`
margin-right: 10px;
`

export const Logo = styled.span`
color: #ffffff;
font-weight: 900;
letter-spacing: 0.01em;
font-size: 20px;
`

export const RefreshButton = styled.button`
/* width: 32px;
height: 32px; */
border-radius: 4px;
border-color: #115fb9;
padding: 4px;
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
`

export const SpanTitle = styled.div`
font-weight: 700;
`
export const SpanTime = styled(SpanTitle)`
margin-right: 10px;
`


