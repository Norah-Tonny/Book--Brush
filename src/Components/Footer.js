import styled from "styled-components"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';

const FooterContainer = styled.div`
display:flex;
justify-content:space-between;
background:#A27B5C;
padding:2em;
`
const FooterUl = styled.ul`

jusify_content:space-around; 
// color:white; 
`
const FooterList = styled.li`
list-style-type:none;
color:#2C3639;

`
const FooterHeading = styled.h1`
color:#2C3639;`

const MaterianUl=styled.div`
display:flex;
flex-direction:column;
gap:3em;

`


const Footer = () => {
    return (
    <FooterContainer>
      <FooterUl>
        <FooterHeading>
        Menu
        </FooterHeading>
        <FooterList>Home</FooterList>
        <FooterList>Login</FooterList>
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
      <MaterianUl>
      <FacebookRoundedIcon/>
      <InstagramIcon/>
      <SubscriptionsRoundedIcon/>
      </MaterianUl>
    </FooterContainer>
  
    )
}
export default Footer; 