import HomeItems from "../Components/HomeItems";
import styled from "styled-components"
import CategoriesItems from "../Components/CategoriesItems";


const HomeContainer = styled.div``

const Home = () => {
  return (
    
    <HomeContainer>
      <HomeItems />
      <CategoriesItems />
    </HomeContainer>
  )
}
export default Home;