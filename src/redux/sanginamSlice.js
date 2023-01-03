import { createSlice } from '@reduxjs/toolkit';

const sanginamSlice = createSlice({
  name: 'sanginamje',
  initialState: {
    sanginamje: [
      {
        id: 1,
        url: [
          'https://pic.compgoo.com/ueditor/1688/20200611/mI6sO9V6Zi9ss9iNVNlTLLetzi1q2Bj7.jpg',
        ],
        price: `w${42900}`,
        title: '남성 린넨 반팔 셔츠',
      },
      {
        id: 2,
        url: [
          'https://pic.compgoo.com/ueditor/20210429/aea2319b3b207a2bab1a73cd9557cfd7.jpg',
        ],
        price: 'w39900',
        title: '남성 캐주얼 반팔티',
      },
      {
        id: 3,
        url: [
          'https://pic.compgoo.com/uploads/145a7dbc99665661f1f7d31dce2d73e1.jpg',
        ],
        price: 'w39900',
        title: '남성 아이스 비즈니스 캐주얼 반팔티',
      },
      {
        id: 4,
        url: [
          'https://pic.compgoo.com/uploads/dec89591091e432704b3029b238e1d1a.jpg',
        ],
        price: 'w42900',
        title: '남성 순색 린넨 반팔티',
      },
      {
        id: 5,
        url: [
          'https://pic.compgoo.com/uploads/53267f63976582497650a958c0173d74.jpg',
        ],
        price: 'w45900',
        title: 'JN-여름 중노인 리넨 반팔 셔츠',
      },
      {
        id: 6,
        url: [
          'https://pic.compgoo.com/uploads/80bfc1daacb00f8a0b9f5abcda5d7500.jpg',
        ],
        price: 'w39900',
        title: '미니멀 남성 면마 반팔 티셔츠',
      },
      {
        id: 7,
        url: [
          'https://pic.compgoo.com/uploads/676ca8d7014294453f1b905df96a8130.jpg',
        ],
        price: 'w45900',
        title: '남성 프린트 실크 셔츠',
      },
      {
        id: 8,
        url: [
          'https://pic.compgoo.com/uploads/cf205048a7687575edf0e7d60570d3db.jpg',
        ],
        price: 'w59900',
        title: 'JN-남성 모피 가죽 자켓',
      },
    ],
  },
  reducer: {},
});

export default sanginamSlice.reducer;
