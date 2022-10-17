import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "firebase/firestore";


const PrevContainer = styled.div`
background:#2C3639;

`
const OutterContainer = styled.div`
width:60%;
border:2px solid grey;
box-shadow:1px 1px 3px lightGrey;
margin:0 auto;
padding:4em;
background:#A27B5C;
color:#2C3639;
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
border:none;
background:white; 
outline:none;
margin:2em;
cursor:pointer;
`
const OptionsItems = styled.option`
border:none;
outline:none;
cursor:pointer;
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
cursor:pointer;
`
const InnerRightContainer = styled.div`
// background:green;
width:${props => props.width}px;
height:${props => props.height}px;
background:${props => props.color};
border:2px solid grey;
`
const HeadingTitle = styled.h3`
font-family:${props => props.font};
title:${props => props.title};
width:300px;
`
const InputText = styled.input`
padding:1em 3em;
background:white;
border:none;
outline:none;
margin-left:2em;
width:34%;
`


const PreviewItems = () => {

    useEffect(() => {
        const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBPgs7j1C2zEVyLCY9fGiC6S7Ya1rxBqGk`
        fetch(url)
            .then(res => res.json())
            .then(data => setFont(data.items))

    }, [])




    const [size, setSize] = useState({
        width: 0,
        height: 0
    })

    const [font, setFont] = useState([])
    const [title, setTitle] = useState({
        title: "",
    })
    const [color, setColor] = useState({
        color: "",
    })

    const [choice, setChoice] = useState({
        booksize: "",
        bookfont: "",
        bookcolor: "",
        booktitle: "",
        booktext: "",

    })
    console.log(font)

    useEffect(() => {
        let choiceArr;

        choice.booksize !== "" ? choiceArr = choice.booksize.split(" ") : choiceArr = "";
        setSize({ ...size, width: parseInt(choiceArr[0]), height: parseInt(choiceArr[2]) })

        choice.bookfont !== "" ? choiceArr = choice.bookfont : choiceArr = "";
        setFont({ ...font, fontFamily: choiceArr })

        choice.booktitle !== "" ? choiceArr = choice.booktitle.split(" ") : choiceArr = "";
        setTitle({ ...title, title: choiceArr })

        choice.bookcolor !== "" ? choiceArr = choice.bookcolor : choiceArr = "";
        setColor({ ...title, color: choiceArr })

    }, [choice])


    const setHandler = () => {


    }




    return (
<PrevContainer>
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
                                <OptionsItems selected>150 x 200</OptionsItems>
                                <OptionsItems>200  x 300</OptionsItems>
                                <OptionsItems> 300 x 400</OptionsItems>
                                <OptionsItems>500 x 600</OptionsItems>
                                <OptionsItems>600 x 700</OptionsItems>
                            </SelectItems>
                        </InnerContainers>
                    </Container>

                    <Container>
                        <HeadingContainer>


                            <Heading>BookTittle</Heading>
                        </HeadingContainer>
                        <InnerContainers>
                            <InputText type="text" placeholder="Edit your book" onChange={(e) => setChoice({ ...choice, booktitle: e.target.value })} />
                        </InnerContainers>
                    </Container>

                    <Container>
                        <HeadingContainer>

                            <Heading>BookFont</Heading>
                        </HeadingContainer>
                        <InnerContainers>
                            <SelectItems onChange={(e) => setChoice({ ...choice, bookfont: e.target.options[e.target.selectedIndex].text })}>
                                {
                                    
                                    Array.from(font).map(item => {
                                        return (
                                            <OptionsItems>{ item.family}</OptionsItems>
               )
           })
    
                                }

                            </SelectItems>
                        </InnerContainers>
                    </Container>

                    <Container>
                        <HeadingContainer>

                            <Heading>Bookcolor</Heading>
                        </HeadingContainer>
                        <InnerContainers>
                            <InputText type="text" placeholder="Edit your color" onChange={(e) => setChoice({ ...choice, booktitle: e.target.value })} />
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

                    <InnerRightContainer width={size.width} height={size.height} background={color.color}>
                        <HeadingTitle title={title.title}>{choice.booktitle}</HeadingTitle>
                        <HeadingTitle font-family={font.fontFamily}></HeadingTitle>
                        <HeadingTitle ></HeadingTitle>

                    <InnerRightContainer width={size.width} height={size.height} >




                    </InnerRightContainer>
                </PrevRight>
            </ResultContainer >
            </OutterContainer>
        </PrevContainer>
    )
}
export default PreviewItems;