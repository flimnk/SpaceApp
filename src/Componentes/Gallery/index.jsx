import { styled } from "styled-components"
import Title from "./Title"
import Tags from "./tags"
import Populares from "./Populars"
import Imagem from "./Image"
import Botao from "../buttun"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`


const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
    max-width: 100%;
`


const SecaoFixa= styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
    & > img{
        width: 212px;
        height: 158px;
        border-radius: 12px;
        
        
        

    }
` 

const Gallery = ({aoAlternarFavorito,aoFotoSelecionada , fotos = [] }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Title >Navegue pela galeria</Title>
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem
                            aoAlternarFavorito={aoAlternarFavorito}
                            aoZoomSelecionado = {aoFotoSelecionada}
                            key={foto.id} 
                            foto={foto} />)
                        }
                    </ImagensContainer>
                </SecaoFluida>
                <SecaoFixa>
                    <Populares $align='center'>Populares</Populares>
                    <img src="imagens/galeria/popular1.png" alt="" />
                    <img src="imagens/galeria/popular2.png" alt="" />
                    <img src="imagens/galeria/popular3.png" alt="" />
                    <img src="imagens/galeria/popular1.png" alt="" />
                    <img src="imagens/galeria/popular2.png" alt="" />
                    <Botao text={"Ver mais"}/>  
                </SecaoFixa>
            </GaleriaContainer>
        </>
    )
}

export default Gallery