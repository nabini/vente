import styled from "styled-components";
import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  ${mobile({padding: "10px"})};
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  ${mobile({display: "none"})};

`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})};

`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})};

`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Iamge = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({margin: "5px 15px"})};

`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom: "20px"})};

`;

const Hr = styled.hr`
  background-color: #eee;
  height: 1px;
`;

const Sommaire = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SommaireTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItemText = styled.div``;
const SummaryItem = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24"};
`;
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>VOTRE SAC </Title>
        <Top>
          <TopButton>Continuer vos achats</TopButton>
          <TopTexts>
            <TopText>Sac de courses(2)</TopText>
            <TopText>Votre liste de souhaits(0)</TopText>
          </TopTexts>
          <TopButton type="filled">VÉRIFIER MAINTENANT</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Iamge src="data:image/jpeg;base64,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" />
                <Details>
                  <ProductName>
                    <b>Product:</b>Mobile pour tout le monde
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>88976543263
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Iamge src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b>HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>88976543996
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b>30.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 17</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Sommaire>
            <SommaireTitle>RÉCAPUTILATIF DE LA COMMANDE</SommaireTitle>
            <SummaryItem>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemText>$ 80</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Frais de livraison estimés</SummaryItemText>
              <SummaryItemText>$ 4.70</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Remise sur l'expédition</SummaryItemText>
              <SummaryItemText>$ -3.80</SummaryItemText>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemText>$ 80</SummaryItemText>
            </SummaryItem>
            <Button>vérifier</Button>
          </Sommaire>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;
