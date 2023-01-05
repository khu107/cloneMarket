import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Img, DetailInfo, Wrapper, ImgCon, ImgMap, H1 } from './style';

import { useSelector } from 'react-redux';

const DetailCard = () => {
  const [change, setchange] = useState(0);
  const { id } = useParams();
  const detailCard = useSelector((state) => state.best);
  const { url, price, title, description } = detailCard.bestdata[id];

  return (
    <Wrapper>
      <Img src={url[change]} />

      <ImgCon>
        {url.map((v, i) => {
          return <ImgMap onClick={() => setchange(i)} src={v} alt="rasm" />;
        })}
      </ImgCon>
      <DetailInfo>
        <H1>₩{price}</H1>
        <span>{title}</span>
        <span>{description}</span>
      </DetailInfo>
    </Wrapper>
  );
};

export default DetailCard;
