import styled from "styled-components";
import { useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

const RegisterContainer = styled.div`
gap:6em; 
 text-align:center;
 flex-direction:column;
`;

const RegisterHeading = styled.h1``;

const RegisterParagraph = styled.p``;

const RegisterInput = styled.input`
  padding: 2em;
  width: 30%;
  border-radius: 5px;
`;
const RgisterRegister=styled.div``

const Button = styled.button`
padding:1em;
width:10%;
font-size 1em;
background:purple;
color:white;
border-radius:5px;
margin:2em 2em;
`;

const RegisterArea = styled.div``;

const Label = styled.div`
  padding: 2em;
`;

const P = styled.p``;

const Register = () => {
  const [values, setValues] = useState({
    FirstName: "",
    SecondName: "",
    Contact: "",
    Email: "",
    Password: "",
  });

  const [error, setError] = useState({
    FirstnameError: "",
    SecondnameError: "",
    ContactError: "",
    EmailError: "",
    PasswordError: ""
  });

  const handleChange = async (e) => {
    e.preventDefault();
    try {
      if (values.FirstName == "") {
        setError(prev=>({ ...prev, FirstnameError: "Enter your firstName " }));
      } 
      if (values.SecondName == "") {
        setError(prev=>({ ...prev, SecondnameError: "Enter your secondName " }));
      }
       if (values.Contact == "") {
        setError(prev=>({ ...prev, ContactError: "Enter your contact" }));
      }
      if(values.Email==""){
        setError(prev=>({...prev, EmailError:"Enter your email" }))
      }
        if (values.Password == "") {
        setError(prev=>({ ...prev, PasswordError: "Enter your password" }));
      } 
       
      else {

    await addDoc(collection(db, "error"), values);
    setValues({
      FirstName: "",
      SecondName: "",
      Contact: "",
      Email: "",
      Password: "",
    });
        console.log();
      }
    } 
    catch (error) {
      console.log("error fill in the correct information", error);
    }

  };
  
  return (
    
    <RegisterContainer>
      <RegisterHeading>Registration Form</RegisterHeading>
      <RegisterParagraph> Please fill in the form keenly</RegisterParagraph>

      {values.FirstName == "" && <P>{error.FirstnameError}</P>}
  <RegisterInput type="text" placeholder="First Name" onChange={(e) => { setValues({ ...values, FirstName: e.target.value }) }} />
      
      {values.FirstName == "" &&  <P>{error.SecondnameError}</P>}
      <RegisterInput type="text" placeholder="Second Name" onChange={(e) => { setValues({ ...values, SecondName: e.target.value }) }} />

      {values.Contact == "" && <P>{error.ContactError}</P>}
      <RegisterInput type="text" placeholder="phone" onChange={(e) => { setValues({ ...values, Contact: e.target.value }) }} />
      
      {values.Email == "" && <P>{error.EmailError}</P>}
      <RegisterInput type="text" placeholder="Email" onChange={(e) => { setValues({ ...values, Email: e.target.value })}}/>

{values.Password == "" && <P>{error.PasswordError}</P>} 
<RegisterInput type="text" value={setValues.Password} placeholder="Password" onChange={(e) => {setValues({ ...values, Password: e.target.value }) }} />

<RgisterRegister>
<Button onClick={(e)=>handleChange(e)}>Submit</Button>
</RgisterRegister>
    </RegisterContainer>
  );
};


export default Register;
