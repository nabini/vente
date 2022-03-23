import React from "react";
import styled from "styled-components";
import { Search,ShoppingCartOutlined } from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 60px;
  padding: 20px 0px;
  ${mobile({height: '50px'})};
`;

const Wrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  height: 20px; // ajouter 
  display: flex;
  margin: 20px; // ajouter 
  padding: 10px 20px; 
  ${mobile({padding: '10px 0px'})};
  


`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: 'none'})};

`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({width: '50px'})};
  

`;

const Left = styled.div`
  display: flex;
  align-items: center;

  flex: 1;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: '24px'})};

  
`;

const Right = styled.div`
flex: 1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({flex: 2, justifyContent: 'center'})};

`;

const MenuItem = styled.div`
margin-left:25px;
  font-size: 14px;
  cursor: pointer;
  ${mobile({fontSize: '12px', marginLeft: "10px"})};

  
`;

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>Fr</Language>
            <SearchContainer>
              <Input placeholder="Search..." />
              <Search style={{color:"gray", fontSize:16}} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>Client.</Logo>
          </Center>
          <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
            <Badge badgeContent={4} color="primary" >
                <ShoppingCartOutlined />
            </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
