import styled from "styled-components"
const FooterContainer = styled.div``
const FooterUl = styled.ul``
const FooterList = styled.li``
const FooterHeading=styled.h1``

const Footer = () => {
    return (
        <FooterContainer>
This is a footer
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
      <FooterList>Contact us through 0721346578/0798674532</FooterList>
      </FooterUl>
    </FooterContainer>
  
        </FooterContainer>
    )
}
export default Footer; 