import { slide } from "../data";
import styled from "styled-components";
import {useState} from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const NavigationArrow = styled.div`
cursor: pointer;
background:#A27B5C;
border-radius:50%;
width:40px;
height:40px;
display: flex;
justify-content: center;
align-items:center;
position:absolute;
top: 50%; left: ${props => props.direction === "left" ? 1 : 96}%;
transform: translateY(750%);
z-index:200 ;`



const SliderContainer = styled.div`
display:flex;
flex-wrap:wrap;
//  overflow: hidden;
border-radius:10px;
// background:#2C3639;
width:70%;
margin:0 auto;

`;

const SliderItem = styled.div`
// position:relative;
width:50%;
 height:600px;
transition: all 2s ease-in;
// background:#2C3639;

`;

const Image = styled.img`

width:100%;
height:100%;
object-fit:cover;`;



const SliderInfo = styled.div`
position:absolute;
top:0; 
  left:0;
width: 100%;
height: 100%;
z-index:100;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: rgba(0,0,0,.5);
font-size: 2rem;`

const SliderHeading = styled.h2`
color: #a27b5c;
  font-size:4rem;
//   padding:2em;
  font-weight: bold;
`

const SliderPara = styled.p`
margin-left: 5em;
padding-top: 5em;
color: #a27b5c;
`

const SliderDescription = styled.div`

color: skyBlue;
  font-size: 4rem;
  font-weight: bold;
`;
const ImageContainer = styled.div`
width:100%;
height:100%;
`

const Slider = () => {
  const [activeIndex, setActiveIndex]=useState(0)
  const handleSlide = (side) => {
      if (side === "left") {
          setActiveIndex(activeIndex>0?activeIndex -1:5)
      }
      else {
      setActiveIndex(activeIndex<5?activeIndex+1:0)
      }

  }
  return (
    
      <SliderContainer>
          <NavigationArrow direction="left" onClick={ ()=>handleSlide ("left")}>
                              <NavigateBeforeIcon />
                          </NavigationArrow>
                          <NavigationArrow direction="right"  onClick={ ()=>handleSlide ("right")}>
                              <NavigateNextIcon />
                          </NavigationArrow>
          {
              slide.map((slide, index) => {
                  return (
                      <SliderItem key={index} style={{transform:`translateX(${activeIndex*-100}vw)`}}>
                          
                          <ImageContainer>
                              <Image src={slide.img}/>
                          </ImageContainer>
                          <SliderInfo>
                              <SliderHeading>{slide.name}</SliderHeading>
                              <SliderDescription>{slide.desc}</SliderDescription>
                              <SliderPara>{slide.publisher}</SliderPara>
                          </SliderInfo>
                      </SliderItem>)
              })
          }
      </SliderContainer>
  )
}
 export default Slider;