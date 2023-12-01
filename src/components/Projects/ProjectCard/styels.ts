import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin-bottom: 24px;
  margin-right: 2%;
  max-width: 350px;
  word-break: break-all;
`;

export const Title = styled.h2`
  border-radius: 8px 8px 0px 0px;
  border-width: 1px 1px 0px 1px;
  border-color: #c1c2c1;
  border-style: solid;
  padding: 12px 18px;
  text-align: center;
  background-color: #0f2573;
  color: #f4f5f6;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 18px;
  border-radius: 0px 0px 8px 8px;
  border: 1px solid #c1c2c1;
`;

export const DateContainer = styled.div`
  display: block;
  margin-bottom: 12px;
`;

export const Date = styled.p`
  font-weight: bold;
  margin-bottom: 12px;
`;

export const DateValue = styled.span`
  font-weight: 300;
`;

export const ChartContainer = styled.div`
  display: block;
  margin-left: 10%;
`;
export const FakeChart = styled.span`
  padding: 20px;
  border-radius: 50%;
  background-color: #4a1b55;
`;
