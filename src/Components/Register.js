import styled from "styled-components";
import { useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

const RegisterContainer = styled.div`
  text-align: center;
`;

const RegisterHeading = styled.h1``;

const RegisterParagraph = styled.p``;

const RegisterInput = styled.input`
  padding: 2em;
  width: 30%;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 30%;
  padding: 5em;
  border-radius: 5px;
`;

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
    date: new Date(),
  });

  // const [error, setError] = useState({
  //   FirstnameError: "",
  //   SecondnameError: "",
  //   ContactError: "",
  //   EmailError: "",
  //   PasswordError: "",
  //   date: new Date(),
  // });
  // // console.log(error);

  const handleChange = async (e) => {
    e.preventDefault();
    // setError(validation(values));

    await addDoc(collection(db, "error"), values);
    setValues({
      FirstName: "",
      SecondName: "",
      Contact: "",
      Email: "",
      Password: "",
      date: new Date(),
    });

    const validation = (values) => {
      let error = {};
      if (!values.username.trim()) {
        error.username = "username required";
      }
    };
  };
  // try {
  //   if (values.FirstName === "") {
  //     setError({ ...error, FirstName: "Enter your FirstName !!" });
  //   } else if (values.SecondName === "") {
  //     setError({ ...error, SecondName: "Enter your secondName !!" });
  //   } else if (values.phone === "") {
  //     setError({ ...error, phone: "Enter your phone!!" });
  //   } else if (values.Password === "") {
  //     setError({ ...error, Password: "Enter your password" });
  //   } else {
  //     console.log();
  //   }
  // } catch (error) {
  //   console.log("error fill in the correct information", error);
  // }
  return (
    
    <RegisterContainer>
      <RegisterHeading>Restration Form</RegisterHeading>
      <RegisterParagraph> Please fill in the form keenly</RegisterParagraph>

      <Label>Full Name</Label>

      {/* <P>{error.FirstnameError}</P> */}

      <RegisterInput type="text" placeholder="First Name" onChange={(e) => { setValues({ ...values, FirstName: e.target.value }) }} />

      {/* <P>{error.SecondnameError}</P> */}
      <Label>Second Name</Label>
      <RegisterInput type="text" placeholder="Second Name" onChange={(e) => { setValues({ ...values, SecondName: e.target.value }) }} />

      {/* <P>{error.ContactError}</P> */}

      <Label>Contact no</Label>
      <RegisterInput type="text" placeholder="phone" onChange={(e) => { setValues({ ...values, Contact: e.target.value }) }} />
      {/* <P>{error.EmailError}</P> */}
      <Label>Email</Label>
      <RegisterInput type="text" placeholder="Email" onChange={(e) => {
        setValues({ ...values, Email: e.target.value });
      }}
      />
      {/* <P>{error.PasswordError}</P> */}

      <Label>Password</Label>

      <RegisterInput
        type="text"
        value={setValues.Password}
        placeholder="Password"
        onChange={(e) => {
          setValues({ ...values, Password: e.target.value });
        }}
      />
      <Button onClick={handleChange}>Submit</Button>
    </RegisterContainer>
  );
};

export default Register;
