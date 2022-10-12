
import styled from "styled-components";


const ResultContainer = styled.div`
display:flex;

`
const BookPreview=styled.h1``
const PrevLeft = styled.div``
const PrevRight = styled.div``
const SelectItems = styled.select``
const OptionsItems = styled.option``
const Heading = styled.h3``
const Results = () => {
    return (
        <>
        
        </>
     

        <ResultContainer>

<BookPreview>Book Preview.</BookPreview>
            <PrevLeft>
                <SelectItems>
                    <Heading>Booksize</Heading>
                    <OptionsItems>1200 X 628</OptionsItems>
                    <OptionsItems>1080 x 1080</OptionsItems>
                    <OptionsItems>1200 x 628</OptionsItems>
                    <OptionsItems>828 x 315</OptionsItems>
                </SelectItems>
            
            
                <SelectItems>
                    <Heading>BookCover</Heading>
                    <OptionsItems></OptionsItems>
                    <OptionsItems></OptionsItems>
                    <OptionsItems></OptionsItems>
                    <OptionsItems></OptionsItems>
                </SelectItems>


                <SelectItems>
                    <Heading>Bookcolor</Heading>
                    <OptionsItems></OptionsItems>
                    <OptionsItems></OptionsItems>
                    <OptionsItems></OptionsItems>
                    <OptionsItems></OptionsItems>
                </SelectItems>


                <SelectItems>
                    <Heading>BookTittle</Heading>
                    <OptionsItems></OptionsItems>
                    <OptionsItems></OptionsItems>
                    <OptionsItems></OptionsItems>
                    <OptionsItems></OptionsItems>
                </SelectItems>


                <SelectItems>
                    <Heading>Books</Heading>
                    <OptionsItems></OptionsItems>
                    <OptionsItems></OptionsItems>
                    <OptionsItems></OptionsItems>
                    <OptionsItems></OptionsItems>
                </SelectItems>


                <SelectItems>
                    <Heading>Booksize</Heading>
                    <OptionsItems></OptionsItems>
                    <OptionsItems></OptionsItems>
                    <OptionsItems></OptionsItems>
                    <OptionsItems></OptionsItems>
                </SelectItems>


          
            </PrevLeft>
            <PrevRight><p>Where the display will appear</p></PrevRight>
        </ResultContainer>
    )
}
export default Results;