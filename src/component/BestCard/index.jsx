import React from 'react';

import { CartContainer, Img, H4, Span } from './style';

function index(props) {
  return (
    <CartContainer>
      <Img src={props.url[0]} alt="alt" srcset="" />
      <H4>{props.title}</H4>
      <Span>₩{props.price}</Span>
    </CartContainer>
  );
}

export default index;
