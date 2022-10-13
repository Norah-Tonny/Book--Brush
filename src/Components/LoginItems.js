
// import Login from "../Pages/Login";
import styled from "styled-components";
import {useState} from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const LoginContainer = styled.div`

padding:2em;
justify-content:space-around;
text-align:center;
border-radius:5px;
`;
const LoginHeading = styled.h3``;

const ShowPassword=styled.div``
const ShowEmail=styled.div``


const LoginInput = styled.input`
padding:2em;
width:30%;
border-radius:5px;
`;
const LoginParagraph = styled.p`
font-size:1.5em;
color:#A27B5C;
`;

const LoginParagraphCheck=styled.p`
text-align:center;
color:#A27B5C;
`
const LoginCheck=styled.div``;
const LoginItems = () => {
  const [show, setShow] = useState(false)
  return (
    <LoginContainer>

      <LoginParagraph>Username or Email</LoginParagraph>
      <LoginCheck>

        <LoginInput type={show ? "text" :"email"} placeholder="Email" />
        <ShowEmail onClick={()=>setShow(prev=>!prev)}>{show?<VisibilityIcon/>:<VisibilityOffIcon/>}</ShowEmail>
      </LoginCheck>

      <LoginParagraph>Password</LoginParagraph>
      <LoginCheck>
        <LoginInput type={show?"text":"password"} placeholder="Password" />
       <ShowPassword onClick={()=>setShow(prev=>!prev)}>{show?<VisibilityIcon/>:<VisibilityOffIcon/>}</ShowPassword>
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
