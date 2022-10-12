
import styled from "styled-components";


const ResultContainer = styled.div`
display:flex;

`
const BookPreview = styled.h1``
const PrevLeft = styled.div``
const PrevRight = styled.div``
const SelectItems = styled.select`
padding:1em 4em;
border-radius:6px;
background:white;   
`
const OptionsItems = styled.option``
const Heading = styled.h3``
const Container=styled.div`display:`
const Results = () => {
    return (
        <>
        
        </>
     

        <ResultContainer>

            <BookPreview>Book Preview.</BookPreview>
            <PrevLeft>
                <Container>
                    <Heading>Booksize</Heading>
                    <SelectItems>
                        <OptionsItems>1200 X 628</OptionsItems>
                        <OptionsItems>1080 x 1080</OptionsItems>
                        <OptionsItems>1200 x 628</OptionsItems>
                        <OptionsItems>828 x 315</OptionsItems>
                    </SelectItems>
                </Container>

                <Container>
                    <Heading>BookCover</Heading>
                    <SelectItems>
                        <OptionsItems></OptionsItems>
                        <OptionsItems></OptionsItems>
                        <OptionsItems></OptionsItems>
                        <OptionsItems></OptionsItems>
                    </SelectItems>
                </Container>

                <Container>
                    <Heading>Bookcolor</Heading>
                    <SelectItems>
                        <OptionsItems>red</OptionsItems>
                        <OptionsItems>blue</OptionsItems>
                        <OptionsItems>green</OptionsItems>
                        <OptionsItems>yellow</OptionsItems>
                    </SelectItems>
                </Container>

                <Container>
                    <Heading>BookTittle</Heading>
                    <SelectItems>
                        <OptionsItems></OptionsItems>
                        <OptionsItems></OptionsItems>
                        <OptionsItems></OptionsItems>
                        <OptionsItems></OptionsItems>
                    </SelectItems>
                </Container>

                <Container>
                    <Heading>Books</Heading>
                    <SelectItems>
                        <OptionsItems></OptionsItems>
                        <OptionsItems></OptionsItems>
                        <OptionsItems></OptionsItems>
                        <OptionsItems></OptionsItems>
                    </SelectItems>
                </Container>



            </PrevLeft >
            <PrevRight><p>Where the display will appear</p></PrevRight>
        </ResultContainer >
    )
}
export default Results;