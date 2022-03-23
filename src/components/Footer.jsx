import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Email,
  Twitter,
  Phone,
  Room,
  
} from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection:"column"})}


`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
  padding: 20px;
  ${mobile({display: "none"})};

  flex: 1;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 30px;
`;

const Payment = styled.img` 
width: 70% ;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor:"#fff8f8"})}


`;
const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Client.</Logo>
        <Description>
          Il existe encore des vêtements qui vous faire briller , c'est
          certainnement nos offres
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Liens utiles</Title>
        <List>
          <ListItem>Hommes</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Juenes</ListItem>
          <ListItem>Femmes</ListItem>
          <ListItem>Accessoires</ListItem>
          <ListItem>Mon Coumpt</ListItem>
          <ListItem>Suivi de commande</ListItem>
          <ListItem>Liste de souhaits</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}} />
          Addrres: xxx Rabat Salé ou Abidjan 677 Avnue des sages
        </ContactItem>
        <ContactItem style={{marginRight:"10px"}}>
          <Phone />
          Mobile: + 212 00x 09x 25x
        </ContactItem>
        <ContactItem>
          <Email style={{marginRight:"10px"}} />
          Email: client@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6//payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
