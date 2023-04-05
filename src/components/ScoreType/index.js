import React from 'react';
import { FlexContainer, LeftContainer, Score, ScoreSpan, Type } from './styles';

const ScoreType = ({ icon, type, score, color, background }) => {
  // console.log(color);
  return (
    <FlexContainer backgroundColor={background}>
      <LeftContainer>
        <img src={icon} alt='category icon'></img>
        <Type color={color}>{type}</Type>
      </LeftContainer>
      <Score>
        {score}
        <ScoreSpan> / 100</ScoreSpan>
      </Score>
    </FlexContainer>
  );
};

export default ScoreType;
