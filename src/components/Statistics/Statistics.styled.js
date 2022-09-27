import styled from '@emotion/styled';

export const StatList = styled.ul`
  width: 350px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const StatItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
