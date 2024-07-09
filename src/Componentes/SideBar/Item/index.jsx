import styled from "styled-components"

   
   const StylizeItem =  styled.li`
        display:  flex;
        font-family: 'Gandhi Sans', sans-serif;  
        font-size:24px;
        margin-bottom:30px;
        cursor: pointer;
        .img{
            width: 24px;
        }
        color:${props=> props.$ativo ? "#7B78E5 ": "#D9D9D9"};
        font-family:${props=> props.$ativo ? "GandhiSansBold": "GandhiSansRegular"};
        align-items: center;
        display:flex;
        gap:22px;
    `

const Item = ({children, ativo = false, iconeAtivo,iconeInativo })=>{
    return(
        <StylizeItem $ativo={ativo} >
            <img src={ativo? iconeAtivo:iconeInativo } alt="" />
            {children}
        </StylizeItem>



        )

}

export default Item