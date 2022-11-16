import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import * as S from "./styles";

const HomeTemplate = () => (
  <S.Wrapper>
    <Header />
    <Container>
      <S.MainContent>
        <h1>Coy template</h1>
      </S.MainContent>
    </Container>
    <Footer />
  </S.Wrapper>
);

export default HomeTemplate;
