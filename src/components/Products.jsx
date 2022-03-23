import React from 'react';
import styled from "styled-components";
import { shirt } from '../data';
// import { djnes } from '../data';
import Product from '../Product';

const Container = styled.div`
padding: 20px; 
display:flex;
flex-wrap: wrap;
justify-content:space-between;
`;


const Products = () => {
    return (
        <Container>
            {shirt.map((shrt)=>(
                <Product  shrt={shrt} key={shrt.id} />
            ))}
        </Container>
    );
};

export default Products;