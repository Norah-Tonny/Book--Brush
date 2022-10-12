import styled from "styled-components"
import { Categories } from "../data";




const CategoryContainer = styled.div``
const CategoriesTitle=styled.h4``
const BookContainer = styled.div``
const BookImg = styled.img``
const Content=styled.div``

const CategoriesItems = () => {
    return (
        <CategoryContainer>
            {
                Categories.map((Category, index) => {
                    return (

                        <BookContainer key={index}>
                            <CategoriesTitle>{Category.name}</CategoriesTitle>
                            
                            <BookImg>
                            <Content>{Category.img}</Content>
                            </BookImg>

                        </BookContainer>

                    )

                })
            }

            
        </CategoryContainer>

    )
}
export default CategoriesItems;