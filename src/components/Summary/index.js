import React from 'react';
import { Button, SectionContainer, Typography } from './styles';
import ScoreType from '../ScoreType';
import reaction from '../../assets/images/icon-reaction.svg';
import memory from '../../assets/images/icon-memory.svg';
import verbal from '../../assets/images/icon-verbal.svg';
import visual from '../../assets/images/icon-visual.svg';

const Summary = () => {
  return (
    <SectionContainer>
      <Typography>Summary</Typography>
      <ScoreType
        icon={reaction}
        type='Reaction'
        score={80}
        color={(props) => props.theme.lightRed}
        background={(props) => props.theme.lightRedFaded}
      />
      <ScoreType
        icon={memory}
        type='Memory'
        score={92}
        color={(props) => props.theme.orangeYellow}
        background={(props) => props.theme.orangeYellowFaded}
      />
      <ScoreType
        icon={verbal}
        type='Verbal'
        score={61}
        color={(props) => props.theme.greenTeal}
        background={(props) => props.theme.greenTealFaded}
      />
      <ScoreType
        icon={visual}
        type='Visual'
        score={72}
        color={(props) => props.theme.blue}
        background={(props) => props.theme.blueFaded}
      />
      <Button>Continue</Button>
    </SectionContainer>
  );
};

export default Summary;
