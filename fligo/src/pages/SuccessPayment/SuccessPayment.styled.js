import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: #f2f2f2;
  padding: 30px 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: var(--blue-secondary-color);
  letter-spacing: 0.3px;
`;
export const Image = styled.img`
  margin: 40px 0;
  object-fit: scale-down;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  padding: 10px 30px;
  width: 120px;
  height: 50px;
  font-weight: 600;
  background-color: ${(props) =>
    props.$secondary
      ? "var(--green-primary-color)"
      : "var(--blue-secondary-color)"};
  color: var(--white-color);
  border: none;
  display: block;
  margin: 30px;
  &:hover {
    cursor: pointer;
    background-color: var(--white-color);
    color: ${(props) =>
      props.$secondary ? "var(--green-primary-color)" : "var(--blue-secondary-color)"};
    border: ${(props) =>
      props.$secondary ? "1px solid var(--green-primary-color)" : "1px solid var(--blue-secondary-color)"};
    transition: 0.2s ease-in;
  }
`;
