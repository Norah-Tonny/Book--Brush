
import styled from "styled-components"

const HomeContainer = styled.div`
background:purple;
height:30vh;
padding:2em;
`
const HomeHeading = styled.h1`
text-align:center;
font-size:3rem;
font-weight:bold;
color:skyBlue;`
// const TitleInput = styled.input``
// const AuthorInput=styled.input``
const HomeCover=styled.div``



const HomeItems = () => {
  return (
    <HomeContainer>
      <HomeHeading>THE EASIEST WAY TO CREATE<br/> PROFESSIONAL ADS & SOCIAL MEDIA<br/> IMAGES FOR YOUR BOOKS
      </HomeHeading>
      {/* <HomeCover> */}
        {/* <TitleInput type="text" placeholder="Book title" />
        <AuthorInput type="text" placeholder="Author"/> */}
      {/* </HomeCover> */}
    </HomeContainer>
  )

}
export default HomeItems;  