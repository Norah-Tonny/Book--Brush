import { useState } from "react";
import styled from "styled-components";

const OutterContainer = styled.div`
width:80%;
margin:0 auto;
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

 
`
const OptionsItems = styled.option`

`
const Heading = styled.h3`width:300px;`
const Container = styled.div`
 display:flex;
gap:2em;

        

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
const InnerRightContainer = styled.div``

const Preview = () => {
    const [choice, setChoice] = useState({
        booksize: "",
        bookfont: "",
        bookcolor: "",
        booktitle: "",
        booktext: "",

    })


    const SetHandler = () => {

        console.log(choice)

    }




    return (

        <OutterContainer>

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

                                <OptionsItems>1200 X 628</OptionsItems>
                                <OptionsItems>1080 x 1080</OptionsItems>
                                <OptionsItems>1200 x 628</OptionsItems>
                                <OptionsItems>828 x 315</OptionsItems>
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
                                <OptionsItems>Robot</OptionsItems>
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
                                <OptionsItems>Education the Key</OptionsItems>
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

                    <Button onClick={SetHandler}>Set Cover</Button>

                </PrevLeft >
                <PrevRight>
                    <InnerRightContainer>

                        <p>{choice.booksize}</p>
                        <p>{choice.bookfont}</p>
                        <p>{choice.bookcolor}</p>
                        <p>{choice.booktitle}</p>
                        <p>{choice.BookPreview}</p>

                    </InnerRightContainer>
                </PrevRight>
            </ResultContainer >
        </OutterContainer>
    )
}
export default Preview;