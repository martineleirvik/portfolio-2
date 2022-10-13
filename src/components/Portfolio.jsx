import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import * as S from "./Portfolio.styled";
import Exam1 from "../img/Skjermbilde.PNG";
import Exam2 from "../img/Skjermbilde2.PNG";
import Exam3 from "../img/Skjermbilde3.PNG";

function Portfolio() {
  return (
    <>
      <S.Heading>Martine's Portfolio</S.Heading>
      <S.StyledCard style={{ width: "25rem" }}>
        <Carousel>
          <S.StyledCarouselItem>
            <img className="d-block w-100" src={Exam1} alt="First slide" />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img className="d-block w-100" src={Exam2} alt="Second slide" />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img className="d-block w-100" src={Exam3} alt="Third slide" />
          </S.StyledCarouselItem>
        </Carousel>
        <Card.Body>
          <Card.Title>Exam 2 - Holidaze</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <S.StyledButton variant="primary">
            <a href="https://github.com/Noroff-FEU-Assignments/project-exam-2-martineleirvik">
              Github
            </a>
          </S.StyledButton>
        </Card.Body>
      </S.StyledCard>
    </>
  );
}

export default Portfolio;
