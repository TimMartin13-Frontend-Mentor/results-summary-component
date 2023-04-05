import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.6rem;
  width: 100%;
  background: ${(props) => props.backgroundColor};
  padding: 1.1rem;
`;

export const LeftContainer = styled.div`
  display: flex;
`;

export const Type = styled.h5`
  color: ${(props) => props.color};
  font-size: 1rem;
  padding-left: 0.6rem;
`;

export const Score = styled.h5`
  font-size: 1rem;
`;

export const ScoreSpan = styled.span`
  font-size: 1rem;
  opacity: 0.4;
`;
