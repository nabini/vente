import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
${mobile({height: "30vh"})};

`;
const Title = styled.h1`
color: white;
margin-bottom: 20px; 
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  /* color: #d78453; */
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;

const Desc = styled.div``;
const Parag = styled.div``;
const Price = styled.div`
  color: #3cb371;
`;
const Button = styled.button` 
border: none;
padding: 10px;
background-color: white;
color:gray;
cursor:pointer;
font-weight:600;
`

const CategoryItem = ({ djne }) => {
  return (
    <Container>
      <Image src={djne.image} />
      <Info>
        <Title>
          <Desc>{djne.name}</Desc>
          <Parag>{djne.category}</Parag>
          <Price>$.{djne.price}</Price>
          <Button>Montrer maintenant </Button>
        </Title>
      </Info>
    </Container>
  );
};

export default CategoryItem;
