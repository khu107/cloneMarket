import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Img, DetailInfo, Wrapper, ImgCon, ImgMap, H1 } from './style';

import { useSelector } from 'react-redux';

const DetailCard = () => {
  const [change, setchange] = useState(0);
  const detailCard = useSelector((state) => {
    return state.best;
  });
  const { id } = useParams();
  return (
    <Wrapper>
      <Img src={detailCard.bestdata[id - 1].url[change]} />

      <ImgCon>
        {detailCard.bestdata[id - 1].url.map((v, i) => {
          return <ImgMap onClick={() => setchange(i)} src={v} alt="rasm" />;
        })}
      </ImgCon>
      <DetailInfo>
        <H1>₩{detailCard.bestdata[id - 1].price}</H1>
        <span>{detailCard.bestdata[id - 1].title}</span>
        <span>{detailCard.bestdata[id - 1].description}</span>
      </DetailInfo>
    </Wrapper>
  );
};

export default DetailCard;
