import styled from "styled-components"

const StylizeButtun  = styled.button`
    border-radius:12px;
    padding: 1em 0;
    background-color: #001634;
    color: white;
    cursor: pointer;
    border: 3px solid white;
    font-family: 'GandhiSansRegular'; 
    &:hover{
        border-color: #7B78E6;
    }
    
`




const   Botao = ({text})=>{
    return(
        <StylizeButtun>{text}</StylizeButtun>
    )


}


export default Botao 