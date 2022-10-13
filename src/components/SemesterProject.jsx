import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import * as S from "./Portfolio.styled";
import Exam1 from "../img/Skjermbilde.PNG";
import Exam2 from "../img/Skjermbilde2.PNG";
import Exam3 from "../img/Skjermbilde3.PNG";

function SemesterProject() {
  return (
    <div>
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
          <Card.Title>Semester Project 2</Card.Title>
          <Card.Text>
            This project is made with Strapi, and HTML, Sass and vanilla
            Javascript. This e-commerce has both customer facing pages and admin
            facing pages. As admin you can add/edit products. And the admin can
            login with jwt-key in local storage.
          </Card.Text>
          <S.StyledButton variant="primary">
            <a href="https://github.com/Noroff-FEU-Assignments/project-exam-2-martineleirvik">
              Github
            </a>
          </S.StyledButton>
        </Card.Body>
      </S.StyledCard>
    </div>
  );
}

export default SemesterProject;
