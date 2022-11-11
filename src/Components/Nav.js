import { Link } from "react-router-dom"
import styled from "styled-components"


const NavContainer = styled.div`
background:#A27B5C;

`
const InnerNav = styled.div`
margin:0 auto;
width:70%;  
display:flex;
justify-content:space-between;
`;
const NavUl = styled.ul`
display:flex;
gap:2em;
font-weight:bold;
font-size:2rem;
list-style-type:none;
color:#2C3639;
`

const NavList = styled.li`
color:#2C3639;

`

const Logo = styled.h1`
// font-size:3rem;
color:#A27B5C;
padding-left:1em;
`;
const LogoContainer = styled.div`
border:2px solid #2C3639;;
width:160px;
height:160px;
border-radius:50%;
background:#2C3639;
box-shadow:1px 1px 6px #2C3639;
`


const NavRight = styled.div``
const NavLeft=styled.div``

const Nav = () => {
    return (
        <NavContainer>
            <InnerNav>
                <NavLeft>
                    <LogoContainer>
                        <Logo className="fontFamily">Book Brush</Logo>
                        </LogoContainer>
            </NavLeft>
            <NavRight>
            <NavUl>
                <NavList><Link to="/">Home</Link> </NavList> 
                        <NavList> <Link to="/login">Login</Link></NavList>
                        <NavList> <Link to="/register">Register</Link></NavList> 

                <NavList><Link to="/preview">Preview</Link> </NavList> 
                <NavList> </NavList> 
                </NavUl>
                </NavRight>
                </InnerNav>
    
       </NavContainer> 
     )
}
export default Nav;