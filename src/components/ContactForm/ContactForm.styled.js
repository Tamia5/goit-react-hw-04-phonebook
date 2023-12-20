import { Form } from 'formik';
import styled from 'styled-components';

export const Container = styled(Form)`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: fit-content;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
export const Btn = styled.button`
  border: none;
  padding: 10px;
  border-radius: 50px;
  font-size: 14px;
  background-color: #3480eb;
  color: #ffff;
  margin-top: 10px;
`;

export const Err = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
