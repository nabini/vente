import Announcement from "../components/Announcement";
import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin: 20px;
  ${mobile({marginRight:"0px"})};
`;
const Select = styled.select`
  margin-right: 10px;
  ${mobile({margin : "10px 0"})}
`;

const Option = styled.option`
  padding: 10px;
`;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />

      <Title>Robes</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrer les produits :</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Blanc</Option>
            <Option>Noir</Option>
            <Option>Rouge</Option>
            <Option>Blue</Option>
            <Option>Jaune</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Taille
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filtre de tri</FilterText>
          <Select>
            <Option selected>Le plus récent</Option>
            <Option>Prix(asc)</Option>
            <Option>Prix(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
