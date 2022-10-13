import styled from "styled-components"
import { Categories } from "../data";




const CategoryContainer = styled.div`
background:#2C3639;`

const CategoriesTitle = styled.h4`
color:#A27B5C;
`
const BookContainer = styled.div``
const BookImg = styled.img`
width:20%;
`
const Content = styled.div``
const CategoriesHeading = styled.h1`
color:#A27B5C;
padding:2em;

text-align:center;`

const CategoriesItems = () => {
    return (
        <CategoryContainer>
<CategoriesHeading>Browse Our Categories</CategoriesHeading>
            {
                Categories.map((Category, index) => {
                    return (

                        <BookContainer key={index}>
                            <CategoriesTitle>{Category.name}</CategoriesTitle>
                            
                            <BookImg src={Category.img} alt="img" />
                            
                            

                        </BookContainer>

                    )


                })
            }

            
        </CategoryContainer>

    )
}
export default CategoriesItems;