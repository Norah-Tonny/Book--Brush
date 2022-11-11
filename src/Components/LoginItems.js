
// import Login from "../Pages/Login";
import styled from "styled-components";
import { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";


const Button = styled.button`
padding:1em;
width:10%;
font-size:1rem;
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

`

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
const LoginLogo=styled.div`
color:#A27B5C;
font-size:3em;
padding:1.5em;
`

const RegisterHeading=styled.div`
color:#A27B5C;
font-size:1rem;
`
const Span=styled.span`
color:red;
outline:none;
`

const LoginItems = () => {
  const [show, setShow] = useState(false)

  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const [error, setError] = useState({
    emailError: "",
    passwordError: ""
    
  });
  console.log(error)


 const handleChange = async (e) => {
    e.preventDefault();
   try {
     
     if(values.email==""){
       setError(prev=>({...prev, emailError:"Enter your email" }))
     }
     if (values.password == "") {
       setError(prev=>({ ...prev, passwordError: "Enter your password" }));
    } 
       
     else {

    await addDoc(collection(db, "error"), values);
    setValues({
    email: "",
     password: "",

   });
     console.log(error);

   }
  }
    
   catch (error) {
     console.log("error fill in the correct information", error);
    }
  }

  return (
    <LoginContainer>
      <LoginLogo>Login</LoginLogo>
      <RegisterHeading>Don't have an account yet? <Span>Sing up.</Span></RegisterHeading>

      {values.email == "" && <p style={{color:"red"}}>{error.emailError}</p>}
      <LoginParagraph> Email</LoginParagraph>
      <LoginCheck> 
        <LoginInput type="text"  value={setValues.email} placeholder="Email" onChange={(e) =>{ setValues({...values, email:e.target.value})}} />

      </LoginCheck>
        {values.email == "" && <p style={{color:"red"}}>{error.passwordError}</p>}
      <LoginParagraph>Password</LoginParagraph>
      <LoginCheck>
        <Loginpassword>
          <LoginInput type={show?"text":"password"} value={setValues.Password} placeholder="Password" onChange={(e) => {setValues({ ...values, Password: e.target.value }) }} />
        </Loginpassword>
        <PasswordShower>
         <ShowPassword onClick={(e) => setShow(prev => !prev)}>{show ? <VisibilityIcon /> : <VisibilityOffIcon />}</ShowPassword>
        </PasswordShower>
      </LoginCheck>
      <LoginParagraph>
    <LoginInput type="checkbox"/>Remember me</LoginParagraph>

    <Link to="/">  <Button onClick={(e)=>handleChange(e)}>Login</Button> </Link>
   </LoginContainer>
   
  )
 }

export default LoginItems;