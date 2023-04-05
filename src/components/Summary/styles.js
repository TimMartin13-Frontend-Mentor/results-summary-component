import styled from 'styled-components';

export const SectionContainer = styled.div`
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.1rem;
  border-radius: 0 0 2rem 2rem;
  width: 375px;
  padding: 0 2rem 2.5rem 2rem;

  @media screen and (min-width: 800px) {
    padding: 0 2.5rem 2.5rem 2.5rem;
  }
`;

export const Typography = styled.h4`
  padding-top: 1rem;

  @media screen and (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 1.1rem;
  border-radius: 2rem;
  border: none;
  font-size: 1.1rem;
  font-weight: 700;
  background: ${(props) => props.theme.greyBlue};
  color: ${(props) => props.theme.white};
  margin-top: 0.5rem;

  @media screen and (min-width: 800px) {
    margin-top: 1.5rem;
  }
`;
