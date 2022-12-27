import React from 'react';
import { Wrapper, CardGrid } from './style';
import BestCard from '../BestCard';

import { useSelector } from 'react-redux';

export default function Best() {
  const bestData = useSelector((state) => {
    return state.best;
  });

  return (
    <Wrapper className="container">
      <h1 style={{ textAlign: 'center' }}>베스트</h1>
      <CardGrid>
        {bestData.bestdata.map((v) => {
          return <BestCard {...v} />;
        })}
      </CardGrid>
    </Wrapper>
  );
}
