import { Link } from "react-router-dom"
import styled from "styled-components"


const NavContainer = styled.div`
background:magenta;
margin:0 auto;`

const NavUl = styled.ul`
display:flex`

const NavList = styled.li`
list-style-type:none;
gap:3em;`

const Logo = styled.h1`
font-size:3rem;
font-weight:bold;`;

const InnerNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
//   margin:0 auto;
`;
const NavRight = styled.div``
const NavLeft=styled.div``

const Nav = () => {
    return (
        <NavContainer>
            <InnerNav>
                <NavLeft>
                <Logo>Book Brush</Logo>
            </NavLeft>
            <NavRight>
            <NavUl>
                <NavList><Link to="/home">Home</Link> </NavList> 
                <NavList> <Link to="/login">Login</Link></NavList> 
                <NavList><Link to="/preview">Preview</Link> </NavList> 
                <NavList> </NavList> 
                </NavUl>
                </NavRight>
                </InnerNav>
    
       </NavContainer> 
     )
}
export default Nav;