import HomeItems from "../Components/HomeItems";
import styled from "styled-components"

import Footer from "../Components/Footer"
import Login from "./Login"

import CategoriesItems from "../Components/CategoriesItems";


const HomeContainer = styled.div``

const Home = () => {

    return (
      <HomeContainer>
        <Login/>
        {/* <Footer/> */}
        </HomeContainer>
    )

  return (
    
    <HomeContainer>
      <HomeItems />
      <CategoriesItems />
    </HomeContainer>
  )
}
export default Home;