import styled from "styled-components";
import React from 'react';
import { djnes } from '../data';
import CategoryItem from './CategoryItem';
import { mobile } from "../responsive";

const Container =  styled.div` 
display:flex;
padding:20px;
justify-content:space-between;
${mobile({padding: "0px", flexDirection:"column"})};
`;


const Categories = () => {
    return (
        <Container>
            {djnes.map(djne=>(
                <CategoryItem djne={djne} key={djne.id} />

            ))}
        </Container>
    );
};

export default Categories;