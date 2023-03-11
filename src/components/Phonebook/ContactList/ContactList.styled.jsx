import styled from 'styled-components';

export const ContactListGetUp = styled.ul`
  .contact__item {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 10px;
    padding: 10px 20px;
    border: 1px solid ${props => props.theme.colors.bground};
    border-radius: 4px;
    background-color: #fff;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .contact__name {
    width: 120px;
  }

  .contact__button {
    cursor: pointer;
    padding: 4px 8px;
    border: 1px solid ${props => props.theme.colors.bground};
    color: ${props => props.theme.colors.primText};
    background-color: ${props => props.theme.colors.fground};
    border-radius: 4px;
    &:hover {
      background-color: ${props => props.theme.colors.bground};
    }
  }
`;
