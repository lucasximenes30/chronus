import { Container } from "../../components/Container";
import { Countdown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { MainTemplate } from "../../components/templates/MainTemplate";


function Home() {
  return (
    <MainTemplate>
        <Container>
            <Countdown />
        </Container>

        <Container>
            <MainForm />
        </Container>
    </MainTemplate>
  );
}

export { Home };
