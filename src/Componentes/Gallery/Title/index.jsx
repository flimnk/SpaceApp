import styled from "styled-components"

const Title= styled.p`
font-size: 2em;
font-family: 'GandhiSansRegular' ;   
color: #7B78E6;

text-align: ${props=>props.$align?props.$align: "left"};
`
export default Title