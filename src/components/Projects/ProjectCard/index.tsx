import {
  Body,
  CardContainer,
  Date,
  DateContainer,
  DateValue,
  Title,
} from "./styels";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { value: 5, label: "A" },
  { value: 10, label: "B" },
  { value: 15, label: "C" },
  { value: 20, label: "D" },
];

export function ProjectCard() {
  return (
    <CardContainer>
      <Title>Título do Card</Title>

      <Body>
        <PieChart
          series={[
            {
              data: data,
              innerRadius: 30,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: -90,
              endAngle: 180,
              cx: 150,
              cy: 150,
            },
          ]}
        />
        <DateContainer>
          <Date>Inicio</Date>
          <DateValue>30/11/2023</DateValue>
        </DateContainer>
        <DateContainer>
          <Date>Previsão Fim</Date>
          <DateValue>05/04/2024</DateValue>
        </DateContainer>
      </Body>
    </CardContainer>
  );
}
