import { createSlice } from '@reduxjs/toolkit';

const bestSlice = createSlice({
  name: 'best',
  initialState: {
    bestdata: [
      {
        id: 1,
        url: 'https://pic.compgoo.com/ueditor/20200704/f1f4b845e7219732aadf2fbc393cb923.jpg',
        price: 'w52900',
        title: '남성 전술 카고 바지',
      },
      {
        id: 2,
        url: 'https://pic.compgoo.com/ueditor/20200616/2f4115143f2f38bc73411ed7df5751d3.jpg',
        price: 'w44900',
        title: '여성 2way 시폰 스커트',
      },
      {
        id: 3,
        url: 'https://pic.compgoo.com/ueditor/1688/20200924/ekwxO104kKfx3GR2y0gOdGgyd2KaRerA.jpg',
        price: 'w39900',
        title: 'KR-여성 불규칙 슬림핏 스커트',
      },
      {
        id: 4,
        url: 'https://pic.compgoo.com/ueditor/20200928/c86773364e2bd45474509f2933bd07c4.jpg',
        price: 'w44900',
        title: '여성 슬림핏 가죽 스커트',
      },
      {
        id: 5,
        url: 'https://pic.compgoo.com/ueditor/20201209/7bd786536885729a731d931341792af2.jpg',
        price: 'w45900',
        title: '여성 다용도 패딩 스커트',
      },
      {
        id: 6,
        url: 'https://pic.compgoo.com/ueditor/20201117/41abdb6da73fbec8da3895580b68caf3.jpg',
        price: 'w28900',
        title: '여성 울 스커트',
      },
      {
        id: 7,
        url: 'https://pic.compgoo.com/ueditor/1688/20210120/U7fdMl6e6q6GgB4oEc522coOfgH66MhK.jpg',
        price: 'w24900',
        title: '여성 페이크 레이어드 티셔츠 밴드',
      },
      {
        id: 8,
        url: 'https://pic.compgoo.com/ueditor/1688/20210129/k8texFzfPNvZpZY00FfXj5E8I4C05TvC.jpg',
        price: 'w39900',
        title: '여성 플라워 자수 스커트',
      },
    ],
  },
  reducer: {},
});

export default bestSlice.reducer;
