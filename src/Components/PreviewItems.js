import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "firebase/firestore";



const OutterContainer = styled.div`
width:80%;
border:2px solid grey;
box-shadow:1px 1px 3px lightGrey;
margin:0 auto;
padding:4em;
`
const ResultContainer = styled.div`
display:flex;
justify-content:center center;
gap:2em;
`
const BookPreview = styled.h1`
text-align:center;
font-size:2rem; 
`
const PrevLeft = styled.div``
const PrevRight = styled.div``
const SelectItems = styled.select`
padding:1em 4em;
border-radius:6px;
background:white; 
margin:2em;
`
const OptionsItems = styled.option`

`
const Heading = styled.h3`
width:100px;

`
const Container = styled.div`
 display:flex;

`
const InnerContainers = styled.div`

`
const HeadingContainer = styled.div``
const Button = styled.button`
padding:1em 3em;
border-radius:6px;
border:none;
font-weight:bold;
font-size:1rem;
`
const InnerRightContainer = styled.div`
background:red;
width:${props => props.width}px;
height:${props => props.height}px;
font-family:${props=>props.font};
`





const PreviewItems = () => {


    const [size, setSize] = useState({
        width: 0,
        height: 0
    })

    const [font, setFont] = useState({
        font: "",
        })


    const [choice, setChoice] = useState({
        booksize: "",
        bookfont: "",
        bookcolor: "",
        booktitle: "",
        booktext: "",

    })

    useEffect(() => {
        let choiceArr;
        choice.booksize !== "" ? choiceArr = choice.booksize.split(" ") : choiceArr = "";
        setSize({ ...size, width: parseInt(choiceArr[0]), height: parseInt(choiceArr[2]) })

        choice.bookfont !== "" ? choiceArr = choice.bookfont .split(""): choiceArr = "";
        setFont({...font,font:"font"})

    }, [choice])


    const setHandler = () => {

        console.log("hello")

    }




    return (

        <OutterContainer>
            {console.log(choice)}
            <BookPreview>Book Preview.</BookPreview>
            <ResultContainer>

                <PrevLeft>
                    <Container>
                        <HeadingContainer>

                            <Heading>Booksize</Heading>
                        </HeadingContainer>
                        <InnerContainers>
                            <SelectItems onChange={(e) => setChoice({ ...choice, booksize: e.target.options[e.target.selectedIndex].text })
                            }>

                                <OptionsItems>200  x 300</OptionsItems>
                                <OptionsItems> 300 x 400</OptionsItems>
                                <OptionsItems>500 x 600</OptionsItems>
                                <OptionsItems>600 x 700</OptionsItems>
                            </SelectItems>
                        </InnerContainers>
                    </Container>

                    <Container>
                        <HeadingContainer>

                            <Heading>BookFont</Heading>
                        </HeadingContainer>
                        <InnerContainers>
                            <SelectItems onChange={(e) => setChoice({ ...choice, bookfont: e.target.options[e.target.selectedIndex].text })}>

                                <OptionsItems>san-serif</OptionsItems>
                                <OptionsItems>Roboto</OptionsItems>
                                <OptionsItems>poppins</OptionsItems>
                                <OptionsItems>Lobster</OptionsItems>
                            </SelectItems>
                        </InnerContainers>
                    </Container>

                    <Container>
                        <HeadingContainer>

                            <Heading>Bookcolor</Heading>
                        </HeadingContainer>
                        <InnerContainers>

                            <SelectItems onChange={(e) => setChoice({ ...choice, bookcolor: e.target.options[e.target.selectedIndex].text })}>
                                <OptionsItems>red</OptionsItems>
                                <OptionsItems>blue</OptionsItems>
                                <OptionsItems>green</OptionsItems>
                                <OptionsItems>yellow</OptionsItems>
                            </SelectItems>
                        </InnerContainers>
                    </Container>

                    <Container>
                        <HeadingContainer>


                            <Heading>BookTittle</Heading>
                        </HeadingContainer>
                        <InnerContainers>

                            <SelectItems onChange={(e) => setChoice({ ...choice, booktitle: e.target.options[e.target.selectedIndex].text })}>
                                <OptionsItems>Lion In Jungle</OptionsItems>
                                <OptionsItems>Largest Dragon</OptionsItems>
                                <OptionsItems>Education is the Key</OptionsItems>
                                <OptionsItems>The Sun Rise</OptionsItems>
                            </SelectItems>
                        </InnerContainers>
                    </Container>

                    <Container>
                        <HeadingContainer>
                            <Heading>BooksText</Heading>
                        </HeadingContainer>

                        <InnerContainers>

                            <SelectItems onChange={(e) => setChoice({ ...choice, booktext: e.target.options[e.target.selectedIndex].text })}>
                                <OptionsItems>0.2rem</OptionsItems>
                                <OptionsItems>.4rem</OptionsItems>
                                <OptionsItems>0.6rem</OptionsItems>
                                <OptionsItems>0.8rem</OptionsItems>
                                <OptionsItems>1rem</OptionsItems>
                            </SelectItems>
                        </InnerContainers>
                    </Container>

                    <Button onClick={setHandler}>Set Cover</Button>

                </PrevLeft >
                <PrevRight>
                    <InnerRightContainer width={size.width} height={size.height} >



                    </InnerRightContainer>
                </PrevRight>
            </ResultContainer >
        </OutterContainer>
    )
}
export default PreviewItems;