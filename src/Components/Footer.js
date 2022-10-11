import styled from "styled-components"
const FooterContainer = styled.div``
const FooterUl = styled.ul``
const FooterList = styled.li``

const Footer = () => {
    return (
        <FooterContainer>

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
      <Footer>

      <FooterHeading>
        Location
        </FooterHeading>
        <FooterList>Nairobi</FooterList>
        <FooterList>Nakuru </FooterList>
        <FooterList>Thika</FooterList>
        <FooterList>Kirinyaga</FooterList>
      </Footer>
      <FooterUl>
      <FooterList>Contact us through 0721346578/0798674532</FooterList>
      </FooterUl>
    </FooterContainer>
  
        </FooterContainer>





    )
}
export default Footer; 