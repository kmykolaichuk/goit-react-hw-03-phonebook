import styled from 'styled-components';

export const Form = styled.form`
  padding-left: 10px;
  padding-top: 10px;
  max-width: 320px;

  border: 1px solid #08090a;

  label {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
  input {
    margin-top: 6px;
    max-width: 150px;
    padding: 4px;
    border: 1px solid #e1e1e1;
    border-radius: 2px;

    :hover,
    :focus {
      border-color: #363dba;
      outline: none;
    }
  }
`;

export const Button = styled.button`
  margin-bottom: 10px;
  padding: 4px 8px;
  max-width: 100px;
  border-radius: 4px;
  border: 1px solid #e1e1e1;
  background-color: #ffffff;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.2);

  :hover,
  :focus {
    background-color: #afb2e0;
    border: 1px solid #afb2e0;
  }
`;
