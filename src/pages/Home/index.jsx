import React from 'react';
import Carosel from '../../component/Carosel';
import { Grid, Img, Item, Span } from './style';
import Namja1 from '../../asset/img/namje1.jpg';
import Namja2 from '../../asset/img/namje2.jpg';
import yoja3 from '../../asset/img/yoje3.jpg';
function index() {
  return (
    <div>
      <div>
        <Carosel />
      </div>

      <Grid>
        <Item>
          <Img src={Namja1} alt="" srcset="" />
          <Span>상의（남）</Span>
        </Item>
        <Item>
          <Img src={Namja2} alt="" srcset="" />
          <Span>바지 （남） </Span>
        </Item>
        <Item>
          <Img src={yoja3} alt="" srcset="" /> <Span>상의（여）</Span>
        </Item>
      </Grid>
    </div>
  );
}

export default index;
