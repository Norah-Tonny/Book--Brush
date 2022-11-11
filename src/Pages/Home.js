import HomeItems from "../Components/HomeItems";
import styled from "styled-components";


import Footer from "../Components/Footer";


import Register from "../Components/Register";

import Footer from "../Components/Footer"

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


        <Category /> 
      
    
        

        {/* <Login/> */}
        {/* <Register/> */}

        <Category /> 

        <Footer />
        
        </>
    )

}
export default Home;

