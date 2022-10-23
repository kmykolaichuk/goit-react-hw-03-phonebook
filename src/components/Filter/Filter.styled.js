import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;

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
