import styled from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    ${(props) => props.theme.slateBlue} 10%,
    ${(props) => props.theme.royalBlue} 90%
  );
  border-radius: 0 0 2rem 2rem;
  width: 375px;
  padding: 1.7rem 3rem 2.5rem 3rem;

  @media screen and (min-width: 800px) {
    height: 100%;
    border-radius: 2rem;
    padding: 2rem 3.5rem 3rem 3.5rem;
    justify-content: space-between;
  }
`;

export const Header = styled.h1`
  font-size: 1.1rem;
  color: ${(props) => props.theme.lavender};

  @media screen and (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const Circle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 140px;
  width: 140px;
  border-radius: 50%;
  background: linear-gradient(
    ${(props) => props.theme.violetBlue},
    ${(props) => props.theme.persianBlue}
  );
  margin-block: 1.5rem;

  @media screen and (min-width: 800px) {
    height: 200px;
    width: 200px;
  }
`;

export const Score = styled.h2`
  font-size: 3.5rem;
  color: ${(props) => props.theme.white};

  @media screen and (min-width: 800px) {
    font-size: 4.5rem;
  }
`;

export const Total = styled.h3`
  font-size: 1rem;
  color: ${(props) => props.theme.lavender};

  @media screen and (min-width: 800px) {
    font-size: 1.1rem;
  }
`;

export const Expression = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.white};
  padding-bottom: 0.6rem;

  @media screen and (min-width: 800px) {
    font-size: 2rem;
  }
`;

export const Comparison = styled.h4`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${(props) => props.theme.lavender};

  @media screen and (min-width: 800px) {
    font-size: 1.1rem;
  }
`;
