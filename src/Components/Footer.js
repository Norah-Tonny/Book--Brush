import styled from "styled-components"

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from "@mui/icons-material/LocationOn";


const FooterContainer = styled.div`
display:flex;
justify-content:space-between;
background:#A27B5C;
padding:2em;
`
const FooterUl = styled.ul`

jusify_content:space-around; 
`
const FooterList = styled.li`
list-style-type:none;
color:#2C3639;
font-size:1rem;
font-weight:bold;

`
const ContactText = styled.div`
color:#2C3639;
font-size:1rem;
font-weight:bold;`

const FooterHeading = styled.h1`
color:#2C3639;
font-size:1.5rem;
font-weight:bold;`
const Container = styled.div`
border:2px solid #2C3639;;
width:160px;
height:160px;
border-radius:50%;
background:#2C3639;
box-shadow:1px 1px 6px #2C3639;`
const FooterLogo=styled.div``

const MaterianUl=styled.div`
display:flex;
flex-direction:column;
gap:3em;

`
const Logo = styled.h1`
text-align:center;
color:#A27B5C;`

const FooterPara = styled.p`
color:#2C3639;
font-size:1rem;
font-weight:bold;`


const Footer = () => {
    return (
      <FooterContainer>
        <Container>
        <FooterLogo>
        <Logo className="fontFamily">Book Brush</Logo>
        </FooterLogo>

       </Container>
      <FooterUl>
        <FooterHeading>
        Menu
        </FooterHeading>
        <FooterList>Home</FooterList>
        <FooterList>Login</FooterList>
          <FooterList>REgister</FooterList>
          <FooterList>Preview</FooterList>
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
          <ContactText>
          {<LocationOnIcon />}Kibera, Nairobi, Kenya
          </ContactText>

      </FooterUl>
     
      <FooterUl>
      <FooterHeading>
      Loving Book Brush?
          </FooterHeading>
          <FooterPara>You can follow our social here:</FooterPara>
      <ContactText>{<CallIcon />} Call: 0712345678</ContactText>
          <ContactText>{<EmailIcon />} Email:bookbrush@gmail.com</ContactText>
          <ContactText>{<InstagramIcon />}BookBrush</ContactText>
      </FooterUl>
      
    </FooterContainer>
  
    )
}
export default Footer; 