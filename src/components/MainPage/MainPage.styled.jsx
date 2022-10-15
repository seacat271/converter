import styled from "styled-components";

export const Container = styled.main`
max-width: 1200px;
height: 100vh;
box-sizing: border-box;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
gap: 20px;
justify-content: center;
align-items: center;
padding: 20px;
background-color: #cbdef4;
box-shadow: 0px 0px 3px 3px grey;
color: #1b222a;
`

export const Title = styled.h1`
color: inherit;
font-size: 66px;
font-weight: 700;
text-align: center;
margin-bottom: 20px;
`

export const MainBox = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
gap: 20px;
justify-content: flex-start;
align-items: center;
`
export const Input = styled.input`
border-radius: 4px;
border-color: #115fb9;
font-size: 46px;

outline-color: #115fb9;
box-shadow: 0px 0px 2px 2px grey;
margin-right: 20px;
`
export const Select = styled.select`
border-radius: 4px;
border-color: #115fb9;
box-shadow: 0px 0px 2px 2px grey;
font-size: 46px;
`
export const ConvertButton = styled.button`
width: 108px;
height: 108px;
border-radius: 4px;
border-color: #115fb9;
box-shadow: 0px 0px 2px 2px grey;
font-size: 26px;
padding: 4px;
background-color: #ffffff;
`