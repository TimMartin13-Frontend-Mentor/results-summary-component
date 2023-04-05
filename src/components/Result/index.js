import React from 'react';
import {
  Circle,
  Comparison,
  Expression,
  Header,
  Score,
  SectionContainer,
  Total,
} from './styles';

const Result = () => {
  return (
    <SectionContainer>
      <Header>Your Result</Header>
      <Circle>
        <Score>76</Score>
        <Total>of 100</Total>
      </Circle>
      <Expression>Great</Expression>
      <Comparison>
        You scored higher than 65% of the people who have taken these tests.
      </Comparison>
    </SectionContainer>
  );
};

export default Result;
