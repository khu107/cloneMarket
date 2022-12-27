import React from 'react';
import { BgImg, Wrapper } from './style';
import Bgimg from '../../asset/img/bgimg.jpg';
function index() {
  return (
    <Wrapper>
      <BgImg src={Bgimg} alt="" srcset="" />
    </Wrapper>
  );
}

export default index;
