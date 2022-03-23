import styled from "styled-components";

const Container = styled.div`
display:flex;
  height: 30px;
  background-color: teal;
  color: white;
  align-items:center;
  justify-content:space-between;
  font-size: 14px;
  font-weight:500;
  position:sticky;
  text-align:center;
  justify-content:center;
`;

const Announcement = () => {
  return <Container>
      
      Super Deal ! Free Shipping Order Over $50 ! All
      </Container>;
};

export default Announcement;
