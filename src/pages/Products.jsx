import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding:"10px", flexDirection:"column"})}
`;
const ImageContainer = styled.div`
  padding: 0px 50px;
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({padding:"10px"})}

`;
const InfoContainer = styled.div`
  flex: 1;
  ${mobile({height:"40vh"})}

`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Prix = styled.span`
  font-weight: 200;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width:"100%"})}

`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FililterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width:"100%"})}

`;
const AmountContainer = styled.div`
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Products = () => {
  return (
    <Container>
      <Navbar />

      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Notre Boutique vous offres les Vetements de qualité</Title>
          <Desc>
            Poutr toute information une suele addresse vous donne toute les
            informations Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Ipsam, mollitia temporibus consequatur id maiores facere harum
            velit voluptatem dicta hic!
          </Desc>
          <Prix>$ 20</Prix>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FililterSizeOption>XS</FililterSizeOption>
                <FililterSizeOption>S</FililterSizeOption>
                <FililterSizeOption>M</FililterSizeOption>
                <FililterSizeOption>L</FililterSizeOption>
                <FililterSizeOption>XL</FililterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />

      <Footer />
    </Container>
  );
};

export default Products;
