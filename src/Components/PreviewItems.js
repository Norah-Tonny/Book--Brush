import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "firebase/firestore";
import GoogleFontLoader from 'react-google-font-loader';

const PrevContainer = styled.div`


`
const OutterContainer = styled.div`
width:80%;
border:2px solid grey;
box-shadow:1px 1px 3px lightGrey;
 margin:0 auto;
padding:4em;
background:red;
`
const ResultContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center center;
gap:2em;
// height:100vh;
// width:100px;
`
const BookPreview = styled.h1`
text-align:center;
font-size:2rem; 
`
const PrevLeft = styled.div`
display:flex;
gap:1em;
// width:fit-content;
`
const PrevRight = styled.div`
height:100vh;

`
const SelectItems = styled.select`
padding:.3em 1em;
border-radius:6px;
// border:none;
// background:white; 
// outline:none;
// margin:2em;
// cursor:pointer;
`
const OptionsItems = styled.option`
border:none;
outline:none;
cursor:pointer;
`
const Heading = styled.h3`
// width:100px;

`
const Container = styled.div`
//  display:flex;
// flex-direction:column;
`
const InnerContainers = styled.div`
// border:2px solid green
// margin:2em;
// width:90px;
`
const HeadingContainer = styled.div`

`
const Button = styled.button`
padding:1em 3em;
border-radius:6px;
border:none;
font-weight:bold;
font-size:1rem;
cursor:pointer;
`
const InnerRightContainer = styled.div`
width:${props => props.width}px;
height:${props => props.height}px;
background:${props => props.color};
border:2px solid #2C3639;
`
const HeadingTitle = styled.h3`
font-family:${props => props.font};
title:${props => props.title};

`
const InputText = styled.input`
padding:1em 2em;
background:black;
// border:2px solid black;;
outline:none;
// width:100%;
// margin:2em;
border-radius:6px;
color:white;
`


const PreviewItems = () => {






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
        const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBPgs7j1C2zEVyLCY9fGiC6S7Ya1rxBqGk`
        fetch(url)
            .then(res => res.json())
            .then(data => setFont(data.items))

    }, [])
    console.log(font)

    useEffect(() => {
        // const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBPgs7j1C2zEVyLCY9fGiC6S7Ya1rxBqGk`
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setFont(data.items))

        let choiceArr;

        choice.booksize !== "" ? choiceArr = choice.booksize.split(" ") : choiceArr = "";
        setSize({ ...size, width: parseInt(choiceArr[0]), height: parseInt(choiceArr[2]) })

        choice.bookfont !== "" ? choiceArr = choice.bookfont : choiceArr = "";
        setFont({ ...font, fontFamily: choiceArr })

        choice.booktitle !== "" ? choiceArr = choice.booktitle.split(" ") : choiceArr = "";
        setTitle({ ...title, title: choiceArr })

        choice.bookcolor !== "" ? choiceArr = choice.bookcolor : choiceArr = "";
        setColor({ ...title, color: choiceArr })

        // Get Fonts
        const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBPgs7j1C2zEVyLCY9fGiC6S7Ya1rxBqGk`
        fetch(url)
            .then(res => res.json())
            .then(data => setFont(data.items))

    }, [choice])


    const setHandler = () => {


    }




    return (
        <PrevContainer>
            <OutterContainer>
                {/* {console.log(choice)} */}
                <BookPreview>Book Preview.</BookPreview>
                <ResultContainer>

                    <PrevLeft>
                        <Container>
                            <HeadingContainer>

                                <Heading>Booksize</Heading>
                            </HeadingContainer>
                            <InnerContainers>
                                <SelectItems onChange={(e) => setChoice(prev => ({ ...prev, booksize: e.target.options[e.target.selectedIndex].text }))
                                }>
                                    <OptionsItems selected>150 x 200</OptionsItems>
                                    <OptionsItems>200 x 300</OptionsItems>
                                    <OptionsItems>300 x 400</OptionsItems>
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
                                <InputText type="text" placeholder="Edit your book" onChange={(e) => setChoice(prev => ({ ...prev, booktitle: e.target.value }))} />
                            </InnerContainers>
                        </Container>

                        <Container>
                            <HeadingContainer>

                                <Heading>BookFont</Heading>
                            </HeadingContainer>
                            <InnerContainers>
                                <SelectItems value={choice.bookfont} onChange={(e) => setChoice(prev => ({ ...prev, bookfont: e.target.options[e.target.selectedIndex].text }))}>
                                    {console.log(choice.bookfont)}
                                    {

                                        Array.from(font).map(item => {
                                            return (
                                                <OptionsItems key={item.family}>{item.family}</OptionsItems>
                                            )
                                        })

                                    }

                                </SelectItems>
                            </InnerContainers>
                        </Container>




                        <GoogleFontLoader
                            fonts={[
                                {
                                    font: choice.bookfont,
                                    weights: [400, '400i'],
                                },
                            ]}
                            subsets={['cyrillic-ext', 'greek']}
                        />



                        <Container>
                            <HeadingContainer>

                                <Heading>Bookcolor</Heading>
                            </HeadingContainer>
                            <InnerContainers>
                                <InputText type="text" placeholder="Edit your color" onChange={(e) => setChoice(prev => ({ ...prev, bookcolor: e.target.value }))} />
                            </InnerContainers>
                        </Container>

                        <Container>
                            <HeadingContainer>
                                <Heading>BooksText</Heading>
                            </HeadingContainer>

                            <InnerContainers>

                                <SelectItems onChange={(e) => setChoice(prev => ({ ...prev, booktext: e.target.options[e.target.selectedIndex].text }))}>
                                    <OptionsItems>0.2rem</OptionsItems>
                                    <OptionsItems>.4rem</OptionsItems>
                                    <OptionsItems>0.6rem</OptionsItems>
                                    <OptionsItems>0.8rem</OptionsItems>
                                    <OptionsItems>1rem</OptionsItems>
                                </SelectItems>
                            </InnerContainers>
                        </Container>

                        {/* <Button onClick={setHandler}>Set Cover</Button> */}

                    </PrevLeft >
                    <PrevRight>
                        <InnerRightContainer width={size.width} height={size.height} background={color.color} style={{ fontFamily: choice.bookfont }}>
                            <HeadingTitle title={title.title}>{choice.booktitle}</HeadingTitle>
                            {/* <HeadingTitle font-family={font.fontFamily}></HeadingTitle> */}
                        </InnerRightContainer>
                    </PrevRight>
                </ResultContainer >
            </OutterContainer>
        </PrevContainer>
    )
}
export default PreviewItems;