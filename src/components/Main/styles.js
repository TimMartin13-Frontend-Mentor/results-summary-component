import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    width: 740px;
    height: 510px;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 6px 16px 0px,
      rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    border-radius: 2rem;
  }
`;
