import styled from 'styled-components'
import tags from './tags.json'

const ContainerTags= styled.section`
    p{
        font-size: 24px;
        font-family: 'GandhiSansRegular' ;     
        color: #D9D9D9;
    }
    margin-top: 2em;
    display: flex;
    gap: 110px;

`

const ContainerBtn= styled.section`
    display: flex;
    gap: 25px;

`


const StylizedBtn = styled.button`
min-width:100px;
max-height: 50px;

cursor: pointer;
text-align: center;
background: rgba(217, 217, 217, 0.3);
border-radius: 12px;
border-color:${props=>props.$ativo ? '#7B78E5' : 'White'};
color: white;
font-size: 20px;
font-family: 'GandhiSansRegular' ;     
border: 2px solid transparent;
&:hover {
        border-color: #C98CF1;
        }

`


const Tags = ({ativo=false,})=>{
    return <>
    < ContainerTags>
        <p>Busque por tags:</p>
        <ContainerBtn>
            {tags.map(tag =><StylizedBtn  $ativo={ativo}  key={tag.id}>{tag.titulo}</StylizedBtn>)}
        </ContainerBtn>
    </ContainerTags>

</>
}
export default Tags