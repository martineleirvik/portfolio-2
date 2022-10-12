import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import * as S from "./Portfolio.styled";
import Exam1 from "../img/Skjermbilde.PNG";
import Exam2 from "../img/Skjermbilde2.PNG";

function Portfolio() {
  return (
    <>
      <S.Heading>Martine's Portfolio</S.Heading>
      <S.StyledCard style={{ width: "25rem" }}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Exam1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Exam2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title>Exam 2 - Holidaze</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Github</Button>
        </Card.Body>
      </S.StyledCard>
    </>
  );
}

export default Portfolio;
