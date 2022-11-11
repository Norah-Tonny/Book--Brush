
import styled from "styled-components";
import { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Password } from "@mui/icons-material";


const Button = styled.button`
padding:1em;
width:10%;
font-size 1em;
background:#A27B5C;
color:white;
border-radius:5px;
margin:2em 2em;
`

const LoginContainer = styled.div`

padding:2em;
justify-content:space-around;
text-align:center;
border-radius:5px;
`;
const LoginHeading = styled.h3``;

const ShowPassword = styled.div`
align-items:center;
`
const ShowEmail = styled.div``


const LoginInput = styled.input`

font-size:1rem;
outline:none;
border:none;
padding:1em 3em;
`;

const LoginParagraph= styled.p`
text-align:center;
color:#A27B5C;
`
const LoginCheck = styled.div`
display:flex;
justify-content:center;
width:30%;
margin:0 auto;

border-radius:6px;
align-items:center;
background:white;
`;
const PasswordShower = styled.div``
const Loginpassword = styled.div`

`
const LoginItems = () => {
  const [show, setShow] = useState(false)
  const [values, setValues] = useState({
    Email: "",
    Password: "",
    Login: "",
  })

  const handleEmailInputeChange = (event) => {
    setValues({ ...values, Email: event.target.values })
  }
  const handlePasswordInputChange = (event) => {
    setValues({ ...values, Password: event.target.values })

  }

  const handleLoginInputChange = (event) => {
    setValues({ ...values, Login: event.target.values })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.Email && values.Password && values.Login) {
      
    }
  }
  return (
    <LoginContainer>

      <LoginParagraph onSubmit={handleSubmit}> username or Email</LoginParagraph>
      <LoginCheck>
        <LoginInput onChange={handleEmailInputeChange}
          value={values.Email}
          type="text" placeholder="Email" />
        
      </LoginCheck>

      <LoginParagraph>Password</LoginParagraph>
      <LoginCheck>
        <Loginpassword>
          <LoginInput onChange={handlePasswordInputChange}
            value={values.Password}
            type={show ? "text" : "password"} placeholder="Password" />
        </Loginpassword>
        <PasswordShower>
          <ShowPassword onClick={() => setShow(prev => !prev)}>{show ? <VisibilityIcon /> : <VisibilityOffIcon />}</ShowPassword>
        </PasswordShower>
      </LoginCheck>
      <LoginParagraph>
        <input type="checkbox" />
        Remember me
      </LoginParagraph>


      <Button onClick={handleSubmit}>Login</Button>

    </LoginContainer>
  )
}

export default LoginItems;
