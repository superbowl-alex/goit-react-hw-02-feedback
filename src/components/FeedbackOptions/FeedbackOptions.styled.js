import styled from '@emotion/styled';
export const Button = styled.button`
  display: inline-block;
  width: 100px;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 4px;
  background-color: #ffffff;
  font-size: 24px;
  line-height: 1.2;
  text-transform: capitalize;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 250ms linear;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  :focus {
    background-color: azure;
    transform: scale(1.1);
  }
`;
