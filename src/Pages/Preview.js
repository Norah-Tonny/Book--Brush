

import styled from "styled-components";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import PreviewItems from "../Components/PreviewItems";




const PreviewContainer = styled.div`
background:#2C3639;
`



const Preview = () => {
    return (
        <PreviewContainer>
            <Nav />

            <PreviewItems/>
            <Footer />
        
        </PreviewContainer >


    )
}
export default Preview;