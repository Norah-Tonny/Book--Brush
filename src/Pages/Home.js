import HomeItems from "../Components/HomeItems"
import styled from "styled-components"
import Footer from "../Components/Footer"
import Login from "./Login"


const HomeContainer=styled.div``

const Home = () => {
    return (
      <HomeContainer>
        <Login/>
        {/* <Footer/> */}
        </HomeContainer>
    )
}
export default Home;