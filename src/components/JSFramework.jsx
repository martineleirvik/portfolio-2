import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import * as S from "./Portfolio.styled";
import Exam1 from "../img/Skjermbilde.PNG";
import Exam2 from "../img/Skjermbilde2.PNG";
import Exam3 from "../img/Skjermbilde3.PNG";

function JSFramework() {
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
            <a href="https://github.com/Noroff-FEU-Assignments/project-exam-2-martineleirvik">
              Github
            </a>
          </S.StyledButton>
        </Card.Body>
      </S.StyledCard>
    </div>
  );
}

export default JSFramework;
