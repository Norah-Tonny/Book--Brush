
import LoginItems from "../Components/LoginItems"
import styled from "styled-components";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer"



const LoginContainer = styled.div`
background:#2C3639;
`



const Login = () => {
    return (
        <LoginContainer>

   <Nav />
            <LoginItems />
            <Footer />
        </LoginContainer >



    )
}
export default Login;

