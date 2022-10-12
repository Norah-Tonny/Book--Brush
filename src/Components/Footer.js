import styled from "styled-components"

const FooterContainer = styled.div`
display:flex;
justify-content:space-between;
background:magenta;
`
const FooterUl = styled.ul`
padding:2em;
jusify_content:space-around;  
`
const FooterList = styled.li`
list-style-type:none;

`
const FooterHeading=styled.h1``

const Footer = () => {
    return (
    <FooterContainer>
      <FooterUl>
        <FooterHeading>
        Menu
        </FooterHeading>
        <FooterList>Home</FooterList>
        <FooterList>Login</FooterList>
        <FooterList>Results</FooterList>
      </FooterUl>

      <FooterUl>
      <FooterHeading>
       TOOLS
       </FooterHeading>
        <FooterList>Custom Creator</FooterList>
        <FooterList>Instant Mockups</FooterList>
        <FooterList>Trailer Creator</FooterList>
        <FooterList>Cover Creator</FooterList>
        <FooterList>Box Set Creator</FooterList>
     
      </FooterUl>
      <FooterUl>

      <FooterHeading>
        Location
        </FooterHeading>
        <FooterList>Nairobi</FooterList>
        <FooterList>Nakuru </FooterList>
        <FooterList>Thika</FooterList>
        <FooterList>Kirinyaga</FooterList>
      </FooterUl>
     
      <FooterUl>
      <FooterHeading>
      Contact us through 
      </FooterHeading>
      <FooterList>0721346578</FooterList>
        <FooterList>0798674532</FooterList>
      </FooterUl>
      
    </FooterContainer>
  
    )
}
export default Footer; 