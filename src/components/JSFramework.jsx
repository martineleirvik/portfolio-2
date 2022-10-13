import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import * as S from "./Portfolio.styled";
import JSF from "../img/jsf/Skjermbilde.PNG";
import JSF1 from "../img/jsf/Skjermbilde1.PNG";
import JSF2 from "../img/jsf/Skjermbilde2.PNG";
import JSF3 from "../img/jsf/Skjermbilde3.PNG";

function JSFramework() {
  return (
    <div>
      <S.StyledCard style={{ width: "25rem" }}>
        <Carousel>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={JSF}
              alt="Screenshot of the website I made to JavaScript Frameworks Course Assignment."
            />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={JSF1}
              alt="Screenshot of the website I made to JavaScript Frameworks Course Assignment."
            />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={JSF2}
              alt="Screenshot of the website I made to JavaScript Frameworks Course Assignment."
            />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={JSF3}
              alt="Screenshot of the website I made to JavaScript Frameworks Course Assignment."
            />
          </S.StyledCarouselItem>
        </Carousel>
        <Card.Body>
          <Card.Title>JS Framework Course Assignment</Card.Title>
          <Card.Text>
            First course learning React. The website consists of a visitor side
            and an admin side. The API returns an array of items in the
            homepage, and a single item retrieved by a parameter in the details
            page. It also has an contact page, where yup is used to do the
            validation. When the admin is logged in it returns to an Admin page
            which is only visible when logged in.
          </Card.Text>
          <S.StyledButton variant="primary">
            <a href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-martineleirvik">
              Github
            </a>
          </S.StyledButton>
        </Card.Body>
      </S.StyledCard>
    </div>
  );
}

export default JSFramework;
