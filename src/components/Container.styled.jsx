import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  background-color: ${props => props.theme.colors.bground};
`;
