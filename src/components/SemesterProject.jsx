import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import * as S from "./Portfolio.styled";
import SP1 from "../img/sp/Skjermbilde.PNG";
import SP2 from "../img/sp/Skjermbilde1.PNG";
import SP3 from "../img/sp/Skjermbilde2.PNG";
import SP4 from "../img/sp/Skjermbilde3.PNG";
import SP5 from "../img/sp/Skjermbilde4.PNG";
import SP6 from "../img/sp/Skjermbilde5.PNG";
import SP7 from "../img/sp/Skjermbilde6.PNG";

function SemesterProject() {
  return (
    <div>
      <S.StyledCard style={{ width: "25rem" }}>
        <Carousel>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={SP1}
              alt="Printscreen of the website I made to the semester project 2 - a sneaker e-commerce."
            />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={SP2}
              alt="Screenshot of the website I made to the semester project 2 - a sneaker e-commerce."
            />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={SP3}
              alt="Screenshot of the website I made to the semester project 2 - a sneaker e-commerce."
            />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={SP4}
              alt="Screenshot of the website I made to the semester project 2 - a sneaker e-commerce."
            />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={SP5}
              alt="Screenshot of the website I made to the semester project 2 - a sneaker e-commerce."
            />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={SP6}
              alt="Screenshot of the website I made to the semester project 2 - a sneaker e-commerce."
            />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={SP7}
              alt="Screenshot of the website I made to the semester project 2 - a sneaker e-commerce."
            />
          </S.StyledCarouselItem>
        </Carousel>
        <Card.Body>
          <Card.Title>Semester Project 2</Card.Title>
          <Card.Text>
            This project is made with Strapi, and HTML, Sass and vanilla
            Javascript. This e-commerce has both customer facing pages and admin
            facing pages. Customers can see a list of all the products and
            search products and then view details about each product. The
            customer can add a product to the cart and then view all the
            products added in the cart. As admin you can add/edit products. And
            the admin can login with jwt-key in local storage. The data is
            populated by a Strapi API supplied by Noroff that is deployed
            locally.
          </Card.Text>
          <S.StyledButton variant="primary">
            <a href="https://github.com/martineleirvik/Semester-project-2">
              Github
            </a>
          </S.StyledButton>
        </Card.Body>
      </S.StyledCard>
    </div>
  );
}

export default SemesterProject;
