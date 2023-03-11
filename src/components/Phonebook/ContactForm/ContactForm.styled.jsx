import styled from 'styled-components';

export const ContactFormGetUp = styled.form`
  margin-bottom: 20px;

  .contactform__label {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    margin: 0 auto 10px;
    padding: 10px 20px;
    border: 1px solid ${props => props.theme.colors.bground};
    border-radius: 4px;
  }

  .contactform__input {
    padding: 4px;
    border: 1px solid ${props => props.theme.colors.bground};
    border-radius: 2px;
    color: ${props => props.theme.colors.primText};
  }

  .contactform__button {
    cursor: pointer;
    display: block;
    width: 160px;
    margin: 0 auto;
    padding: 4px 8px;
    border: 1px solid ${props => props.theme.colors.bground};
    color: ${props => props.theme.colors.primText};
    background-color: ${props => props.theme.colors.fground};
    border-radius: 4px;
    font-weight: 700;
    &:hover {
      background-color: ${props => props.theme.colors.bground};
    }
  }
`;
