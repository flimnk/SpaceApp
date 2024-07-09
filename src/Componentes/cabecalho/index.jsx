import styled from "styled-components";
import CampoTexto from "../campoTexto";

const HeaderEstilizado = styled.header`
padding:60px 0;
display: flex;
justify-content: space-between;
align-items: center;
img{
    max-width: 212px;
}
`

const Cabecalho = ()=>{
    return(
   
        <HeaderEstilizado>
            <img src="imagens/logo.png" alt="logo" />
            <CampoTexto ></CampoTexto>
        </HeaderEstilizado>
            
    )
}

export default Cabecalho