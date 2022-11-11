import HomeItems from "../Components/HomeItems";
import styled from "styled-components";

import Footer from "../Components/Footer";
import Nav from "../Components/Nav"
import Category from "../Components/Category";
import Slider from "../Components/Slider";


const HomeContainer = styled.div``

const Home = () => {

    return (
      <HomeContainer>
        <Nav />
        <HomeItems />
        <Slider/>
        <Category />
        <Footer />
        
        
        </HomeContainer>
    )

}
export default Home;
