import styled from "styled-components";

export const TitleDiv = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  background-color: var(--white-color);
  margin: 20px;
`;

export const Title = styled.h2`
  color: var(--blue-primary-color);
  text-transform: uppercase;
`;

export const Process = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const OrderDiv = styled.div`
  display: flex;
  margin-right: 30px;
  align-items: center;
`;

export const Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blue-secondary-color);
  font-weight: bold;
  border: 1px solid var(--blue-secondary-color);
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 5px;
  font-size: 14px;

  ${({ active }) =>
    active &&
    `
    color: white;
    background-color: var(--blue-secondary-color);
    `};
`;
export const Content = styled.span`
  ${({ active }) =>
    active &&
    `
    color: var(--blue-secondary-color);
    font-weight: bold;
    font-size: 14px;
    `};
`;
