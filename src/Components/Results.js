
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
const OptionsItems = styled.option``
const Heading = styled.h3`width:300px;`
const Container = styled.div`
 display:flex;
gap:2em;

        

`
const InnerContainers = styled.div``
const HeadingContainer=styled.div``


const Results = () => {
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
                        <SelectItems>
                            <OptionsItems>1200 X 628</OptionsItems>
                            <OptionsItems>1080 x 1080</OptionsItems>
                            <OptionsItems>1200 x 628</OptionsItems>
                            <OptionsItems>828 x 315</OptionsItems>
                        </SelectItems>
                    </InnerContainers>
                </Container>

                <Container>
                    <HeadingContainer>

                    <Heading>BookCover</Heading>
                    </HeadingContainer>
                    <InnerContainers>
                        <SelectItems>
                            <OptionsItems></OptionsItems>
                            <OptionsItems></OptionsItems>
                            <OptionsItems></OptionsItems>
                            <OptionsItems></OptionsItems>
                        </SelectItems>
                    </InnerContainers>
                </Container>

                <Container>
                    <HeadingContainer>

                    <Heading>Bookcolor</Heading>
                    </HeadingContainer>
                    <InnerContainers>

                        <SelectItems>
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

                        <SelectItems>
                            <OptionsItems></OptionsItems>
                            <OptionsItems></OptionsItems>
                            <OptionsItems></OptionsItems>
                            <OptionsItems></OptionsItems>
                        </SelectItems>
                    </InnerContainers>
                </Container>

                <Container>
                    <HeadingContainer>
                    <Heading>Books</Heading>
                    </HeadingContainer>
                        
                    <InnerContainers>

                        <SelectItems>
                            <OptionsItems></OptionsItems>
                            <OptionsItems></OptionsItems>
                            <OptionsItems></OptionsItems>
                            <OptionsItems></OptionsItems>
                        </SelectItems>
                    </InnerContainers>
                </Container>



            </PrevLeft >
                <PrevRight><p>Where the display will appear</p></PrevRight>
            </ResultContainer >
        </OutterContainer>
    )
}
export default Results;