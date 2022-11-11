import styled from "styled-components";
import { useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "@mui/material";
import Nav from "./Nav";
import Footer from "./Footer";

const RegisterContainer = styled.div`
 gap:6em; 
 text-align:center;
 background:#2C3639;

`;

const RegisterHeading = styled.h1`
color:#A27B5C;
`;

const RegisterParagraph = styled.p`
color:#A27B5C;

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

const Button = styled.button`
padding:1em;
width:100%;
font-size:1rem;
curser:;
background:#A27B5C;
color:white;
border-radius:5px;
margin:2em 2em;
border:none;
`;

const RegisterArea = styled.div``;

const Label = styled.div`
`;

const P = styled.p``;

const Form = styled.form`
display:flex;
flex-direction:column;
align-items:center;
`

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
  
    try {
      if (values.FirstName == "") {
        setError(prev => ({ ...prev, FirstnameError: "Enter your firstName " }));
      }
      if (values.SecondName == "") {
        setError(prev => ({ ...prev, SecondnameError: "Enter your secondName " }));
      }
      if (values.Contact == "") {
        setError(prev => ({ ...prev, ContactError: "Enter your contact" }));
      }
      if (values.Email == "") {
        setError(prev => ({ ...prev, EmailError: "Enter your email" }))
      }
      if (values.Password == "") {
        setError(prev => ({ ...prev, PasswordError: "Enter your password" }));
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
        
      }
    }
    catch (error) {
      console.log("error fill in the correct information", error);
    }

  };

  return (

    <RegisterContainer>
      <Nav />
      <RegisterHeading>Registration Form</RegisterHeading>
      <RegisterParagraph> Please fill in the form keenly</RegisterParagraph>
      <Form>
        {values.FirstName == "" ? <P style={{ color: "red" }}>{error.FirstnameError}</P>:<P></P>}
        <RegisterInput type="text" placeholder="First Name" onChange={(e) => { setValues({ ...values, FirstName: e.target.value }) }} />

        {values.FirstName == "" ? <P style={{ color: "red" }}>{error.SecondnameError}</P>:<P></P>}
        <RegisterInput type="text" placeholder="Second Name" onChange={(e) => { setValues({ ...values, SecondName: e.target.value }) }} />

        {values.Contact == "" ? <P style={{ color: "red" }}>{error.ContactError}</P>:<P></P>}
        <RegisterInput type="contact" placeholder="Contact" onChange={(e) => { setValues({ ...values, Email: e.target.value }) }} />

        {values.Email == "" ? <P style={{ color: "red" }}>{error.EmailError}</P>:<P></P>}
        <RegisterInput type="email" placeholder="Email" onChange={(e) => { setValues({ ...values, Email: e.target.value }) }} />

        {values.Password == "" ? <P style={{ color: "red" }}>{error.PasswordError}</P>:<P></P>}
        <RegisterInput type="text" value={setValues.Password} placeholder="Password" onChange={(e) => { setValues({ ...values, Password: e.target.value }) }} />


        <RgisterRegister>
        <Link to="/"> <Button onClick={(e) => handleChange(e)}>Submit </Button></Link>

        </RgisterRegister>
      </Form>

      <Footer />
    </RegisterContainer>
  );
};


export default Register;  