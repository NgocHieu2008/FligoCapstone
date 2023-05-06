import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";
export const Wrapper = styled.section`
  background-color: #f2f2f2;
  padding: 30px 35px;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const FormWrapper = styled.div`
  width: 60%;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.div`
  color: var(--white-color);
  font-weight: 600;
  letter-spacing: 0.3px;
  font-size: 18px;
  background-color: var(--blue-secondary-color);
  width: 100%;
  padding: 10px;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px 0;
  background-color: var(--white-color);
`;

export const FieldWrapper = styled.div`
  background-color: var(--white-color);
  height: 100%;
  width: 100%;
  padding: 10px 20px 5px;
`;

export const LabelStyled = styled.label`
  font-size: 1.5rem;
  font-weight: 700;
  display: block;
  margin-bottom: 10px;
  color: var(--blue-secondary-color);
  span {
    color: red;
  }
`;

export const InputStyled = styled(Field)`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 4px 4px #c4c4c4;
  border: 0.4px solid #c4c4c4;
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
`;

export const ErrorStyled = styled(ErrorMessage)`
  color: red;
  font-size: 1.2rem;
`;

export const PhoneContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const ButtonStyled = styled.button`
  width: 20%;
  height: 40px;
  border: none;
  border-radius: 1rem;
  background-color: var(--green-primary-color);
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-top: 20px;
  align-self: flex-end;
  &:hover {
    background-color: #fff;
    color: var(--green-primary-color);
    border: 1px solid var(--green-primary-color);
  }
`;

export const DetailWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: var(--white-color);
    overflow: hidden;
    align-items: center;
`

export const ImageStyled = styled.div`
    width: 100%;
    height: 50%;
    border-radius: 5px 5px 0 0;
`

export const InforStyled = styled.div`
    padding: 10px;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const InforItem = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`