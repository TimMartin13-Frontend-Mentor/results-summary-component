import React from 'react';
import Result from './../Result';
import Summary from './../Summary';
import { Card } from './styles';

const Main = () => {
  return (
    <Card>
      <Result />
      <Summary />
    </Card>
  );
};

export default Main;
