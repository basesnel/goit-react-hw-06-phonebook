import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.bground};
`;
