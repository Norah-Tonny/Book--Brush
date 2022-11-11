import HomeItems from "../Components/HomeItems";
import styled from "styled-components";

import Footer from "../Components/Footer";
import { db,collection } from "firebase/firestore";

import Nav from "../Components/Nav"
import Category from "../Components/Category";
import Slider from "../Components/Slider";


const HomeContainer = styled.div``

const Home = () => {

    return (
      <>
      
        <Nav />
        <HomeItems />
        <Slider/>

        <Category /> 

        <Footer />
        
        </>
    )

}
export default Home;

