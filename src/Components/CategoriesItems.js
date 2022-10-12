import styled from "styled-components"
import { Categories } from "../data";




const CategoryContainer = styled.div``
const CategoriesTitle=styled.h4``
const BookContainer = styled.div``
const BookImg = styled.img`
width:20%;
`
const Content=styled.div``

const CategoriesItems = () => {
    return (
        <CategoryContainer>

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