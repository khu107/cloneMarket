import React from 'react';
import { BgImg, Wrapper } from './style';
import Bgimg from '../../asset/img/bgimg.jpg';
import Bg2 from '../../asset/img/bg2.jpg';
import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function index() {
  return (
    <Wrapper>
      <Carousel autoplay>
        <div>
          <BgImg src={Bgimg} alt="" srcset="" />
        </div>
        <div>
          <BgImg src={Bg2} alt="" srcset="" />
        </div>
      </Carousel>
    </Wrapper>
  );
}

export default index;
