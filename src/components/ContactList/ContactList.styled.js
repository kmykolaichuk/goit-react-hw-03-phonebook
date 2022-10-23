import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  margin-left: 12px;
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
