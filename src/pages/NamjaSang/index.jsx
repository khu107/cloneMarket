import React from 'react';
import { useSelector } from 'react-redux';
import BestCard from '../../component/BestCard';
import { Wrapper, CardGrid } from './style';

function NamjaSang() {
  const namjasang = useSelector((state) => {
    return state.sanginam;
  });
  return (
    <Wrapper className="container">
      <h2
        style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}
      >
        상의（남）
      </h2>
      <CardGrid>
        {namjasang.sanginamje.map((v) => {
          return <BestCard key={v.id} {...v} />;
        })}
      </CardGrid>
    </Wrapper>
  );
}

export default NamjaSang;
