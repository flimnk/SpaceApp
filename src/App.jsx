import { useState } from 'react'
import Banner from './Componentes/banner'
import styled from 'styled-components'
import EstiloGlobais from './Componentes/EstilosGlobais'
import Cabecalho from './Componentes/cabecalho'
import SideBar from './Componentes/SideBar'
import Gallery from './Componentes/Gallery'
import fotos  from '/public/fotos.json'
import ModalZoom from './Componentes/ModalZoom'

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`
const MainContainer = styled.section`
  display: flex;
  gap: 24px;
`
const GalleryContainer=styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;

`
const FundoGradiante = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100vw;
min-height: 100vh;`



function App() {

  const [fotosGaleria,setFotosGaleria] = useState(fotos)
  const [fotoSelecionada,setfotoSelecionada] = useState(null)


const aoAlternarFavorito = (foto) => {
  if(foto.id===fotoSelecionada?.id){
    setfotoSelecionada({...fotoSelecionada, favorita: !fotoSelecionada.favorita})

  }
    setFotosGaleria(fotosGaleria.map(fotoGaleria =>{
      return{
        ...fotoGaleria,
        favorita: foto.id === fotoGaleria.id ? !fotoGaleria.favorita : fotoGaleria.favorita
      }
    }))

}

  return (
    <>
     <FundoGradiante>
      <EstiloGlobais/>
      <AppContainer>   
          <Cabecalho></Cabecalho>
          <MainContainer>
            <SideBar></SideBar>
            <GalleryContainer>
              <Banner backgroundImage={'public/imagens/Banner.png'}> </Banner> 
              <Gallery aoFotoSelecionada = {foto => setfotoSelecionada(foto)} fotos={fotosGaleria} aoAlternarFavorito={aoAlternarFavorito}>
              </Gallery>
            </GalleryContainer>
          </MainContainer>
          <ModalZoom aoAlternarFavorito={aoAlternarFavorito} foto={fotoSelecionada} aoFecharFoto ={()=>setfotoSelecionada(null)}></ModalZoom>
        </AppContainer> 
     </FundoGradiante>
    </>
  )
}

export default App
