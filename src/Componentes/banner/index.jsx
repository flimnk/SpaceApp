import styled from "styled-components"
const StylizeBanner = styled.div`

    width: 1000px;
    min-height: 300px;
    border-radius:20px;
    background-image:${props => `url(${props.$backgroundImage})`};
    background-repeat:no-repeat;
    background-size: cover;

    `

const Banner= ({backgroundImage})=>{
    return(

        <StylizeBanner $backgroundImage={backgroundImage}>
       </StylizeBanner>



    )
}

export default Banner