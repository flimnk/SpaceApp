import styled from "styled-components"
import Item from "./Item"

const StylizeList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 212px;


`






const SideBar = () =>{
     return(
       <aside>
            <nav>
                <StylizeList>
                    <Item iconeAtivo={"icones/home-ativo.png"} iconeInativo={"icones/home-inativo.png"}>Start</Item>
                    <Item iconeAtivo={"icones/mais-vistas-ativo.png"} iconeInativo={"icones/mais-vistas-inativo.png"}>most viewed</Item>
                    <Item iconeAtivo={"icones/mais-curtidas-ativo.png"} iconeInativo={"icones/mais-curtidas-inativo.png"}>Most likes</Item>                 
                    <Item iconeAtivo={"icones/novas-ativo.png"} iconeInativo={"icones/novas-inativo.png"}>New</Item>
                    <Item iconeAtivo={"icones/surpreenda-me-ativo.png"} iconeInativo={"icones/surpreenda-me-inativo.png"}>supply me</Item>
                    
                        



                </StylizeList>


            </nav>


       </aside>         
                

    )
}   

export default SideBar