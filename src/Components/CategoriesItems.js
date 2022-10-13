import styled from "styled-components";
import { Categories } from "../data";

const CategoryContainer = styled.div`
  
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;

  `;

const CategoriesTitle = styled.h4`
  color: #a27b5c;
  font-size:2rem;
  font-weight:bold;
  `;
  const CategoriesParagraph = styled.p`
  color: skyBlue;
  font-size:2rem;
  font-weight:bold;
  `;

const BookContainer = styled.div`
width: 15%;
height: 300px;
position: relative;
`;

const BookImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius:5px; 
`;
const CategoriesTextContainer = styled.div`
text-align:center;
position: absolute;
text-transform:capitalize;
top: 0;
left: 0;
background:rgba(0,0,0,.5);
width:100%;
height:100%;
justify-content:center;
align-items:center;
`;
const CategoriesHeading = styled.h1`
color: #a27b5c;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  `;
  const ImageContainer = styled.div``;
  const Container = styled.div`
  background: #2c3639;
  padding-bottom:10em;
`
const CategoriesPara = styled.p`
margin-left:5em;
padding-top:5em; 
color:#a27b5c;`
const CategoriesItems = () => {
  return (
    <Container>
      <CategoriesHeading>3D Book Covers</CategoriesHeading>
    <CategoryContainer>
      {Categories.map((Category, index) => {
        return (
          <BookContainer>
            <BookImg src={Category.img} />
            <CategoriesTextContainer>
                    <CategoriesTitle>{Category.name}</CategoriesTitle>
              <CategoriesParagraph>{Category.desc}</CategoriesParagraph>
              <CategoriesPara>{Category.publisher}</CategoriesPara>
            </CategoriesTextContainer>
          </BookContainer>
        );
      })}
      </CategoryContainer>
      </Container>
  );
};
export default CategoriesItems;
