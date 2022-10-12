import styled from "styled-components";

const RegisterContainer=styled.div`
text-align:center;

`

const RegisterHeading=styled.h1``

const RegisterParagraph=styled.p``

const RegisterInput=styled.input`
padding:2em;
width:30%;
border-radius:5px;
`

const TextArea=styled.textarea`
width:30%;
padding:5em;
border-radius:5px;

`

const Button=styled.button`
padding:1em;
width:10%;
font-size 1em;
background:purple;
color:white;
border-radius:5px;
margin:2em 2em;
`

const RegisterArea=styled.div``

const Register = () =>{
    return(
        <>
        <RegisterContainer>
            <RegisterHeading>Restration Form</RegisterHeading>
            <RegisterParagraph>Please fill in the form keenly</RegisterParagraph>
            <RegisterParagraph>
                Full Name
                </RegisterParagraph>
            <RegisterInput type="text" placeholder="First Name"/>
            <RegisterParagraph>
                Second Name
                </RegisterParagraph>
            <RegisterInput type="text" placeholder="Second Name"/>
    
  
<RegisterParagraph>Contact no</RegisterParagraph>
<RegisterInput type="text" placeholder="phone"/>

<RegisterParagraph>Email</RegisterParagraph>
    <RegisterInput type="text" placeholder="Email"/>

<RegisterArea>
<RegisterParagraph>    Write here any comments
</RegisterParagraph>
    <TextArea></TextArea>
    </RegisterArea>
    <Button>Submit</Button>
        </RegisterContainer>
        </>
    )
}
export default Register;