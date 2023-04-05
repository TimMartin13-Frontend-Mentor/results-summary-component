import styled from 'styled-components';

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 0;
    padding-bottom: 2rem;
  }
`;

export const Text = styled.h6`
  font-size: 11px;
  text-align: center;
  color: ${(props) => props.theme.greyBlue};
`;

export const Link = styled.a`
  color: ${(props) => props.theme.blue};
`;
