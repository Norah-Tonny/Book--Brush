
import Login from "../Pages/Login";
import { useState } from "react";
import { db } from "../Firebase";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const RegisterContainer = styled.div`
 gap:6em; 
 text-align:center;
 background:#2C3639;

`;


const RegisterParagraph = styled.p`
color:#A27B5C;
font-size:1em;

`;

const RegisterInput = styled.input`
   padding: 2em;
   width: 30%;
  border-radius: 5px;
  border:none;
  box-shadow:0 0 3px 1px lightgrey;
  outline:none;
`;
const RgisterRegister = styled.div``

const Button =styled.button``


const Button = styled.button`
padding:1em;
font-size:1rem;
curser:;
background:#A27B5C;
color:white;
border-radius:5px;
margin:2em 2em;
border:none;
`;

const LoginParagraph = styled.div`
color:#A27B5C;
font-size:1em;
padding-bottom:2em;
`;

const Label = styled.div`
`;


const P = styled.p``;

const Form = styled.form`
display:flex;
flex-direction:column;
align-items:center;
`
const LoginParagraphCheck=styled.p`
text-align:center;
`

const LoginCheck = styled.div``;
const LoginItems = () => {

   const [show, setShow] = useState(false)


const Register = () => {
  const [values, setValues] = useState({

    Email: "",
    Password: "",
  });

  const [error, setError] = useState({
 
    EmailError: "",
    PasswordError: ""
  });

  const handleChange = async (e) => {
  
    try {
    
      if (values.Email == "") {
        setError(prev => ({ ...prev, EmailError: "Enter your email" }))
      }
      if (values.Password == "") {
        setError(prev => ({ ...prev, PasswordError: "Enter your password" }));
      }

      else {

        await addDoc(collection(db, "error"), values);
        setValues({
          Email: "",
          Password: "",
        });
        
      }
    }
    catch (error) {
      console.log("error fill in the correct information", error);
    }

  };

  return (

    <RegisterContainer>
      <RegisterParagraph>Email Address</RegisterParagraph>

        {values.Email == "" ? <P style={{ color: "red" }}>{error.EmailError}</P>:<P></P>}
        <RegisterInput type="email" placeholder="Email" onChange={(e) => { setValues({ ...values, Email: e.target.value }) }} />
<RegisterParagraph>password</RegisterParagraph>
        {values.Password == "" ? <P style={{ color: "red" }}>{error.PasswordError}</P>:<P></P>}
        <RegisterInput type="text" value={setValues.Password} placeholder="Password" onChange={(e) => { setValues({ ...values, Password: e.target.value }) }} />
        {/* <InputShowFlex>
                        <PasswordInput type={show?"text":"password"} placeholder="Password" />
                        <ShowPassword onClick={()=>setShow(prev=>!prev)}>{show?<VisibilityIcon/>:<VisibilityOffIcon/>}</ShowPassword>
                    </InputShowFlex> */}


        <RgisterRegister>
        <Link to="/"> <Button onClick={(e) => handleChange(e)}>Login </Button></Link>


        </RgisterRegister>
      
        <LoginParagraph>
        <input type="checkbox" />
        Remember me
      </LoginParagraph>
    </RegisterContainer>
  );
};


export default Register;  

   </LoginContainer>
    
  );
};
export default LoginItems;
