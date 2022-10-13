import { Button, Card, CarouselItem } from "react-bootstrap";
import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  margin: 20px 0;
`;

export const StyledCard = styled(Card)`
  margin: 10px auto;
  padding: 0 0 30px 0;
  border-radius: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const StyledCarouselItem = styled(CarouselItem)`
  img {
    border-radius: 30px 30px 0 0;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #fe5f55;
  border: none;
  padding: 5px 22px;
  border-radius: 10px;
  a {
    color: white;
    text-decoration: none;
  }
  :hover {
    background-color: #fe5f55;
  }
`;
