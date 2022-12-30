import React from 'react';
import { CartContainer, Img, H4, Span } from './style';

function index(props) {
  return (
    <CartContainer
      onClick={() => {
        console.log('hi', props.id);
      }}
    >
      <Img src={props.url} alt="alt" srcset="" />
      <H4>{props.title}</H4>
      <Span>{props.price}</Span>
    </CartContainer>
  );
}

export default index;
