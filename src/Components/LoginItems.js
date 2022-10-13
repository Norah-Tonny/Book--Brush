
import Login from "../Pages/Login";
import styled from "styled-components";
const LoginContainer = styled.div`

padding:2em;
justify-content:space-around;
text-align:center;
border-radius:5px;
`;
const LoginHeading = styled.h3``;




const LoginInput = styled.input`
padding:2em;
width:30%;
border-radius:5px;
`;
const LoginParagraph = styled.p`
font-size:1.5em;
`;

const LoginParagraphCheck=styled.p`
text-align:center;
`
const LoginCheck=styled.div``;
const LoginItems = () => {
  
  return (
    <LoginContainer>

      <LoginParagraph>Username or Email</LoginParagraph>
      <LoginCheck>

      <LoginInput type="text" placeholder="Email"/>
      </LoginCheck>

      <LoginParagraph>Password</LoginParagraph>
      <LoginCheck>
      <LoginInput type="text" placeholder="password"/>
      </LoginCheck>
      <LoginParagraph>
      <input type="checkbox" />
        Remember me
      </LoginParagraph>
<LoginCheck>
<LoginParagraphCheck>
      <LoginInput type="text" placeholder="Login" />
      </LoginParagraphCheck>
      </LoginCheck>
      <LoginParagraph>
      <input type="checkbox" />
        Forgot Pasword
        </LoginParagraph>
    </LoginContainer>
  )
}

export default LoginItems;
