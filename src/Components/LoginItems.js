
import Login from "../Pages/Login";
import styled from "styled-components";
import { useState } from "react";

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
  
const [values,setValues]= useState({
firstName:"",
secondName:"",
email:"",
})
const handleFirstName = (event) =>{
  setValues({...values, firstName:event.target.values})
}
const handleLastName = (event) =>{
  setValues({...values, SecondName:event.target.values})

}
const handleEmail = (event) =>{
  setValues({...values, Email:event.target.values})

}


  return (
    <LoginContainer>

      <LoginParagraph>Login</LoginParagraph>
      <LoginCheck>

      <LoginInput value={values.firstName}
      onChange={handleFirstName}
      type="text"  placeholder="First Name" name="firstName"/>
      </LoginCheck>

      <LoginParagraph>Last Name</LoginParagraph>
      <LoginCheck>
      <LoginInput onChange={handleLastName}  value={values.firstName}  type="text" placeholder="Last name" />
      <LoginCheck>
      <LoginParagraph>Email</LoginParagraph>
      <LoginInput  value={values.Email} type="text" placeholder="Email"/>
      </LoginCheck>
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
