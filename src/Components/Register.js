import styled from "styled-components";
import { useState } from "react";
import { AirlineSeatIndividualSuiteSharp } from "@mui/icons-material";


const RegisterContainer = styled.div`
text-align:center;

`

const RegisterHeading = styled.h1``

const RegisterParagraph = styled.p``

const RegisterInput = styled.input`
padding:2em;
width:30%;
border-radius:5px;
`

const TextArea = styled.textarea`
width:30%;
padding:5em;
border-radius:5px;

`

const Button = styled.button`
padding:1em;
width:10%;
font-size 1em;
background:purple;
color:white;
border-radius:5px;
margin:2em 2em;
`

const RegisterArea = styled.div``

const Label = styled.div`
padding:2em;
`

const Register = () => {

    const [values, setValues] = useState({
        FirstName: "",
        SecondName: "",
        Contact: "",
        Email: "",
    });


    const [error, setError] = useState({

    })

    console.log(error)

    const handleChange = (e) => {
        e.preventDefault();

        
    }
    




    return (

        <RegisterContainer>
            <RegisterHeading>Restration Form</RegisterHeading>
            <RegisterParagraph> Please fill in the form keenly</RegisterParagraph>

            <Label>Full Name</Label>


            <RegisterInput type="text" placeholder="First Name" onChange={(e) => { setValues({ ...values, FirstName: e.target.value }) }} />

            <Label>Second Name</Label>
            <RegisterInput type="text" placeholder="Second Name" onChange={(e)=>{ setValues({...values, SecondName: e.target.value})}} />


            <Label>Contact no</Label>
            <RegisterInput type="text" placeholder="phone" onChange={(e)=>{ setValues({...values, Contact: e.target.value})}}  />

            <Label>Email</Label>
            <RegisterInput type="text" placeholder="Email" onChange={(e)=>{ setValues({...values, Email: e.target.value})}}  />

            <Label>    Write here any comments
            </Label>

            <Label> <TextArea></TextArea ></Label>

            <Button onChange={handleChange}>Submit</Button>
        </RegisterContainer>

    )
}

export default Register;