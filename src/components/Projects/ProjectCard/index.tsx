import {
  Body,
  CardContainer,
  ChartContainer,
  Date,
  DateContainer,
  DateValue,
  FakeChart,
  Title,
} from "./styels";

export function ProjectCard() {
  return (
    <CardContainer>
      <Title>Título do Card</Title>

      <Body>
        <DateContainer>
          <Date>Inicio</Date>
          <DateValue>30/11/2023</DateValue>
          <Date>Previsão Fim</Date>
          <DateValue>05/04/2024</DateValue>
        </DateContainer>
        <ChartContainer>
          Andamento: <span>67%</span>
        </ChartContainer>
      </Body>
    </CardContainer>
  );
}
