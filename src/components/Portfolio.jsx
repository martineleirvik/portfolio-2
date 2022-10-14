import Exam from "./Exam";
import JSFramework from "./JSFramework";
import * as S from "./Portfolio.styled";
import SemesterProject from "./SemesterProject";

function Portfolio() {
  return (
    <>
      <S.Heading>Martine's Portfolio page</S.Heading>
      <Exam />
      <JSFramework />
      <SemesterProject />
    </>
  );
}

export default Portfolio;
