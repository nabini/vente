import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import {useState} from 'react'
import {robes} from '../data';
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow:hidden;
  ${mobile({display: "none"})};
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  margin: auto;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  align-items: center;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #${props=>props.bg };
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Parag = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
 const handlerClick = (direction) => {
   if(direction==="left"){
     setSlideIndex(slideIndex > 0 ? slideIndex -1 : 4)
   } else {
     setSlideIndex(slideIndex < 4 ?  slideIndex + 1 : 0);
   }
 };

 
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handlerClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {robes.map(item=>(

          <Slide bg={item.bg} key={item.id}>
          <ImageContainer>
            <Image src={item.image}/>
          </ImageContainer>
          <InfoContainer>
            <Title>{item.name}</Title>
            <Desc>{item.description}</Desc>
            <Parag>{item.price}</Parag>
            <Button>Allez-y</Button>
          </InfoContainer>
        </Slide>
          ))}
        </Wrapper>
      <Arrow direction="right" onClick={()=>handlerClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
