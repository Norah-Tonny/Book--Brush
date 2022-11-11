import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "firebase/firestore";

import GoogleFontLoader from 'react-google-font-loader';
import { BlockPicker, SketchPicker } from "react-color";






const PrevContainer = styled.div`
background:white;

`
const BlockContainer = styled.div`
padding:2em;
width:80%;
margin:0 auto;

`
const OutterContainer = styled.div`

border-radius:12px;
box-shadow:1px 1px 3px lightGrey;
padding:4em;
background:#FA2FB5;
color:#31087B;
height:130vh;
`
const ResultContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center center;
gap:2em;

`
const BookPreview = styled.h1`
text-align:center;
font-size:4rem; 
text-shadow:2px 9px 1px green;
font-weight:bold;
font-style:italic;
`
const PrevLeft = styled.div`
display:flex;
gap:1em;


// width:fit-content;
`
import GoogleFontLoader from "react-google-font-loader";

const PrevContainer = styled.div``;
const OutterContainer = styled.div`
  width: 80%;
  border: 2px solid grey;
  box-shadow: 1px 1px 3px lightGrey;
  margin: 0 auto;
  padding: 4em;
  background: red;
`;
const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center center;
  gap: 2em;
  // height:100vh;
  // width:100px;
`;
const BookPreview = styled.h1`
  text-align: center;
  font-size: 2rem;
`;
const PrevLeft = styled.div`
  display: flex;
  gap: 1em;
  // width:fit-content;
`;

const PrevRight = styled.div`
  height: 100vh;
`;
const SelectItems = styled.select`
  padding: 0.3em 1em;
  border-radius: 6px;
  // border:none;
  // background:white;
  // outline:none;
  // margin:2em;
  // cursor:pointer;
`;
const OptionsItems = styled.option`
  border: none;
  outline: none;
  cursor: pointer;
`;
const Heading = styled.h3`

// width:100px;
`

  // width:100px;
`;
const Container = styled.div`
  //  display:flex;
  // flex-direction:column;
`;
const InnerContainers = styled.div`
  // border:2px solid green
  // margin:2em;
  // width:90px;
`;
const HeadingContainer = styled.div``;
const Button = styled.button`
  padding: 1em 3em;
  border-radius: 6px;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
`;
const InnerRightContainer = styled.div`

width:${props => props.width}px;
height:${props => props.height}px;
background:${props => props.color};
// border:2px solid #2C3639;
box-shadow:2px 2px 8px #2C3639;
border-radius:8px;
margin:0 auto;
`
const HeadingTitle = styled.h3`
font-family:${props => props.font};
title:${props => props.title};
font-size:${props => props.size}
width:fit-content;
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

const ColorPadding = styled.div`
margin-top:4em;

`
const TitleContainer = styled.div`

`

const ContainerFlex = styled.div`
display:flex;
gap:8em;
box-shadow:2px 2px 9px #31087B;
padding:.1em;
border-radius:6px;
font-size:1.1rem;
width:90%;
width:105 %;
`
const Titles = styled.div`
`
const TitleExample = styled.h3``


  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: ${(props) => props.color};
  border: 2px solid #2c3639;
`;
const HeadingTitle = styled.h3`
  font-family: ${(props) => props.font};
  title: ${(props) => props.title};
`;
const InputText = styled.input`
  padding: 1em 2em;
  background: black;
  // border:2px solid black;;
  outline: none;
  // width:100%;
  // margin:2em;
  border-radius: 6px;
  color: white;
`;


const PreviewItems = () => {

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const [font, setFont] = useState([]);
  const [title, setTitle] = useState({
    title: "",
  });
  const [color, setColor] = useState({
    color: "",
  });

  const [choice, setChoice] = useState({
    booksize: "",
    bookfont: "",
    bookcolor: "",
    booktitle: "",
    booktext: "",
  });
  console.log(font);

  useEffect(() => {
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBPgs7j1C2zEVyLCY9fGiC6S7Ya1rxBqGk`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFont(data.items));
  }, []);
  console.log(font);

  useEffect(() => {
    // const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBPgs7j1C2zEVyLCY9fGiC6S7Ya1rxBqGk`
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => setFont(data.items))

    let choiceArr;

    choice.booksize !== ""
      ? (choiceArr = choice.booksize.split(" "))
      : (choiceArr = "");
    setSize({
      ...size,
      width: parseInt(choiceArr[0]),
      height: parseInt(choiceArr[2]),
    });

    choice.bookfont !== "" ? (choiceArr = choice.bookfont) : (choiceArr = "");
    setFont({ ...font, fontFamily: choiceArr });

    choice.booktitle !== ""
      ? (choiceArr = choice.booktitle.split(" "))
      : (choiceArr = "");
    setTitle({ ...title, title: choiceArr });

    choice.bookcolor !== "" ? (choiceArr = choice.bookcolor) : (choiceArr = "");
    setColor({ ...title, color: choiceArr });

    // Get Fonts
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBPgs7j1C2zEVyLCY9fGiC6S7Ya1rxBqGk`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFont(data.items));
  }, [choice]);

  const setHandler = () => {};

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
                <SelectItems
                  onChange={(e) =>
                    setChoice((prev) => ({
                      ...prev,
                      booksize: e.target.options[e.target.selectedIndex].text,
                    }))
                  }
                >
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
                <InputText
                  type="text"
                  placeholder="Edit your book"
                  onChange={(e) =>
                    setChoice((prev) => ({
                      ...prev,
                      booktitle: e.target.value,
                    }))
                  }
                />
              </InnerContainers>
            </Container>

            <Container>
              <HeadingContainer>
                <Heading>BookFont</Heading>
              </HeadingContainer>
              <InnerContainers>
                <SelectItems
                  value={choice.bookfont}
                  onChange={(e) =>
                    setChoice((prev) => ({
                      ...prev,
                      bookfont: e.target.options[e.target.selectedIndex].text,
                    }))
                  }
                >
                  {console.log(choice.bookfont)}
                  {Array.from(font).map((item) => {
                    return (
                      <OptionsItems key={item.family}>
                        {item.family}
                      </OptionsItems>
                    );
                  })}
                </SelectItems>
              </InnerContainers>
            </Container>

            <GoogleFontLoader
              fonts={[
                {
                  font: choice.bookfont,
                  weights: [400, "400i"],
                },
              ]}
              subsets={["cyrillic-ext", "greek"]}
            />

            <Container>
              <HeadingContainer>
                <Heading>Bookcolor</Heading>
              </HeadingContainer>
              <InnerContainers>
                <InputText
                  type="text"
                  placeholder="Edit your color"
                  onChange={(e) =>
                    setChoice((prev) => ({
                      ...prev,
                      bookcolor: e.target.value,
                    }))
                  }
                />
              </InnerContainers>
            </Container>

            <Container>
              <HeadingContainer>
                <Heading>BooksText</Heading>
              </HeadingContainer>

              <InnerContainers>
                <SelectItems
                  onChange={(e) =>
                    setChoice((prev) => ({
                      ...prev,
                      booktext: e.target.options[e.target.selectedIndex].text,
                    }))
                  }
                >
                  <OptionsItems>0.2rem</OptionsItems>
                  <OptionsItems>.4rem</OptionsItems>
                  <OptionsItems>0.6rem</OptionsItems>
                  <OptionsItems>0.8rem</OptionsItems>
                  <OptionsItems>1rem</OptionsItems>
                </SelectItems>
              </InnerContainers>
            </Container>

            {/* <Button onClick={setHandler}>Set Cover</Button> */}
          </PrevLeft>
          <PrevRight>
            <InnerRightContainer
              width={size.width}
              height={size.height}
              background={color.color}
              style={{ fontFamily: choice.bookfont }}
            >
              <HeadingTitle title={title.title}>
                {choice.booktitle}
              </HeadingTitle>
              {/* <HeadingTitle font-family={font.fontFamily}></HeadingTitle> */}
            </InnerRightContainer>
          </PrevRight>
        </ResultContainer>
      </OutterContainer>
    </PrevContainer>
  );
};
export default PreviewItems;



    //creating state to store our color and also set color using onChange event for sketch picker
    const [sketchPickerColor, setSketchPickerColor] = useState({
        r: "255",
        g: "255",
        b: "255",
        a: "1",
    })


    // destructuring rgba from state
    const { r, g, b, a } = sketchPickerColor;





    const [blockPickerColor, setBlockPickerColor] = useState("#37d67a");



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
    const [text, setText] = useState({
        fontSize: 0,
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
        choice.booktext !== "" ? choiceArr = choice.booktext.split(" ") : choiceArr = "";
        setText({ ...text, text: choiceArr })


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

            <BlockContainer>
            <OutterContainer>

                    {/* {console.log(choice)} */}
                    <TitleContainer>
                        <BookPreview>Book Preview.</BookPreview>
                    </TitleContainer>

                    <ContainerFlex>
                        <Titles><TitleExample>BookSize</TitleExample></Titles>
                        <Titles><TitleExample>BookTitle</TitleExample></Titles>
                        <Titles><TitleExample>BookFont</TitleExample></Titles>
                        <Titles><TitleExample>BookColor</TitleExample></Titles>
                        <Titles><TitleExample>BookText</TitleExample></Titles>


</ContainerFlex>

                    <ResultContainer>
                        

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

                                {/* Sketch Picker from react-color and handling color on onChange event */}
                                <SketchPicker
                                    onChange={(color) => {
                                        setSketchPickerColor(color.rgb);
                                    }}
                                    color={sketchPickerColor}
                                />

                            </InnerContainers>
                        </Container>

                        <ColorPadding>
                            {/* <div
                            style={{
                                backgroundColor: `rgba(${r},${g},${b},${a})`,
                                width: 100,
                                height: 50,
                                border: "2px solid white",
                            }}
                        ></div> */}

                        </ColorPadding>




                        <Container>
                            <HeadingContainer>
                                <Heading>BooksText</Heading>
                            </HeadingContainer>

                            <InnerContainers>

                                <SelectItems onChange={(e) => setChoice(prev => ({ ...prev, booktext: e.target.options[e.target.selectedIndex].text }))}>
                                    {console.log(choice.booktext)}
                                    <OptionsItems>0.5rem</OptionsItems>
                                    <OptionsItems>1rem</OptionsItems>
                                    <OptionsItems>1.5rem</OptionsItems>
                                    <OptionsItems>2.0rem</OptionsItems>
                                    <OptionsItems>2.5rem</OptionsItems>
                                    <OptionsItems>3rem</OptionsItems>
                                    <OptionsItems>3.5rem</OptionsItems>
                                </SelectItems>
                            </InnerContainers>
                        </Container>

                        {/* <Button onClick={setHandler}>Set Cover</Button> */}

                    </PrevLeft >

                    <PrevRight>
                        <InnerRightContainer width={size.width} height={size.height} style={{ fontFamily: choice.bookfont, fontSize: choice.booktext, backgroundColor: `rgba(${r},${g},${b},${a})`, borderRadius: '8px' }}>
                            <HeadingTitle style={{ textAlign: 'center', padding: '2em', textTransform: 'capitalize', backgroundColor: `rgba(${r},${g},${b},${a})` }}>{choice.booktitle}  </HeadingTitle>
                            {/* style={{ text: choice.booktext }} */}
                        </InnerRightContainer>
                    </PrevRight>
                </ResultContainer >
                </OutterContainer>
            </BlockContainer>
        </PrevContainer>
    )
}
export default PreviewItems;


