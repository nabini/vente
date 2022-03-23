import  styled  from 'styled-components';
import React from 'react';

import { Send} from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div`
display:flex;
height: 60vh;
background-color: #fcf5f5;
align-items:center;
justify-content:center;
flex-direction:column;

 `;

const Title =  styled.h1`
font-size:70px;
margin-bottom: 20px;
 `;
const Description = styled.div`
display:flex;
flex-direction:column;
font-size:24px;
font-weight:300;
margin-bottom: 20px;
${mobile({textAlign: "center", maxWidth:"100%",alignItems:"center" })};


` ;
const InputContainer = styled.div`
width:50%;
height: 40px;
background-color: white;
display:flex;
justify-content:space-between;
border: 1px solid lightgray;
` ;
const Input = styled.input`
border: none;
flex: 8;
padding-left:20px;
` ;
const Button = styled.button`
border:none;
background-color: teal;
color: white;
flex: 1;
 ` ;


const Newsletter = () => {
    return (
        <div>
            <Container>
                <Title>Abonnez-vous</Title>
                <Description>obtenez une mise à jour rapide de vos produits favoris</Description>
                <InputContainer>
                <Input placeholder='Entrez votre addresse email...' />
                <Button>
                    <Send/>
                </Button>
                </InputContainer>
            </Container>
            
        </div>
    );
};

export default Newsletter;