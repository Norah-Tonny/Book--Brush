import HomeItems from "../Components/HomeItems";
import styled from "styled-components"

import Footer from "../Components/Footer"
import Login from "./Login"
import Register from "../Components/Register";
import CategoriesItems from "../Components/CategoriesItems";


const HomeContainer = styled.div``

const Home = () => {

    return (
      <HomeContainer>
      {/* <HomeItems /> */}
      {/* <CategoriesItems /> */}
<Register/>
        {/* <Login/> */}
        <Footer/>
        </HomeContainer>
    )
}
export default Home;