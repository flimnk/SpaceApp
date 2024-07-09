import styled from "styled-components"
import Imagem from "../Gallery/Image"
import BotaoIcone from "../BotaoIcone"

const FundoOpaco = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
`
    const StylizeDialog = styled.dialog`
      display: flex;
      justify-content: center;
      background: transparent;
       position: absolute;
        top: 24px;
           border: 0;
            padding: 0;
             width: 1156px;
             
             form{
                button{
                    position: relative;
                    top: 20px;
                    right: 60px;
           
            
                }

             }
    
    
    `

const ModalZoom = ({foto,aoFecharFoto,aoAlternarFavorito}) => {
    return (
        <>
    
            {foto &&
            <>
            <FundoOpaco>
             <StylizeDialog open ={!!foto}>
             <Imagem  aoAlternarFavorito={aoAlternarFavorito} expandida={true} foto={foto}> </Imagem>
                <form method="dialog">
                    <BotaoIcone onClick={ ()=> aoFecharFoto(null)} type="submit"><img src="icones/close.png" alt="d" /></BotaoIcone>
                </form>
            </StylizeDialog>
            </FundoOpaco>
            </>
            }
              </>
        
    )
}

export default ModalZoom