import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Img, DetailInfo, Wrapper, ImgCon, ImgMap } from './style';

import { useSelector } from 'react-redux';

const DetailCard = () => {
  const [count, setCount] = useState(0);
  const detailCard = useSelector((state) => {
    return state.best;
  });
  const { id } = useParams();
  return (
    <Wrapper>
      <Img src={detailCard.bestdata[id - 1].url[0]} />

      <ImgCon>
        {detailCard.bestdata[id - 1].url.map((v) => {
          return <ImgMap src={v} alt="rasm" srcset="" />;
        })}
      </ImgCon>
      <DetailInfo>
        <h1>{detailCard.bestdata[id - 1].title}</h1>
        <span>{detailCard.bestdata[id - 1].description}</span>
        <h5>{detailCard.bestdata[id - 1].price}</h5>
        <button>-</button>
        <span>{count}</span>
        <button>+</button>
      </DetailInfo>
    </Wrapper>
  );
};

export default DetailCard;
