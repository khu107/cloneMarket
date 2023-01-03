import { createSlice } from '@reduxjs/toolkit';

const bestSlice = createSlice({
  name: 'best',
  initialState: {
    bestdata: [
      {
        id: 1,
        url: [
          'https://pic.compgoo.com/ueditor/20200704/f1f4b845e7219732aadf2fbc393cb923.jpg',
          'https://pic.compgoo.com/ueditor/20200704/7b951ce507c41890f27ae106eb64c228.jpg',
          'https://pic.compgoo.com/ueditor/20200704/a43f65d0dadbae4cb118fc5bb60a9bfd.jpg',
        ],
        description:
          '찢어짐 방지하는 내마모성 원단, 뛰어난 방수성&통기성,대용량 멀티 포켓, 편리하고 실용적인 아이템!',
        price: 'w52900',
        title: '남성 전술 카고 바지',
      },
      {
        id: 2,
        url: [
          'https://pic.compgoo.com/ueditor/20200616/2f4115143f2f38bc73411ed7df5751d3.jpg',
        ],
        price: 'w44900',
        title: '여성 2way 시폰 스커트',
        description:
          '원피스/스커트 2way 스타일, 살랑거리는 프릴 밑단으로 여리여리한 여성 매력 연출!',
      },
      {
        id: 3,
        url: [
          'https://pic.compgoo.com/ueditor/1688/20200924/ekwxO104kKfx3GR2y0gOdGgyd2KaRerA.jpg',
        ],
        price: 'w39900',
        title: 'KR-여성 불규칙 슬림핏 스커트',
        description:
          '세련하고 우아한 매력 연출 가능~ 주름과 불규칙 디자인으로 날씬한 라인 연출! 지금 추가 구매시 ₩9,900!착불은 서울시만 사용 가능, 기타 구역 주문 무효',
      },
      {
        id: 4,
        url: [
          'https://pic.compgoo.com/ueditor/20200928/c86773364e2bd45474509f2933bd07c4.jpg',
        ],
        price: 'w44900',
        title: '여성 슬림핏 가죽 스커트',
        description:
          '세련하고 우아한 매력 연출 가능~ 벨트로 날씬하고 트렌디한 매력 연출! ',
      },
      {
        id: 5,
        url: [
          'https://pic.compgoo.com/ueditor/20201209/7bd786536885729a731d931341792af2.jpg',
        ],
        price: 'w45900',
        title: '여성 다용도 패딩 스커트',
        description:
          '패딩과 스커트의 만남, 일체형이라 입고 벗기 편리하고 케이프/담요로 사용도 가능한 완벽한 겨울 방한 아이템!',
      },
      {
        id: 6,
        url: [
          'https://pic.compgoo.com/ueditor/20201117/41abdb6da73fbec8da3895580b68caf3.jpg',
        ],
        price: 'w28900',
        title: '여성 울 스커트',
        description:
          '부드럽고 따뜻한 천연 울 재질, 세련하고 우아한 매력과 슬림한 실루엣을 연출!',
      },
      {
        id: 7,
        url: [
          'https://pic.compgoo.com/ueditor/1688/20210120/U7fdMl6e6q6GgB4oEc522coOfgH66MhK.jpg',
        ],
        price: 'w24900',
        title: '여성 페이크 레이어드 티셔츠 밴드',
        description: '불편하게 여러겹 입지 말고 간편하게 레이어드하세요! ',
      },
      {
        id: 8,
        url: [
          'https://pic.compgoo.com/ueditor/1688/20210129/k8texFzfPNvZpZY00FfXj5E8I4C05TvC.jpg',
        ],
        price: 'w39900',
        title: '여성 플라워 자수 스커트',
        description:
          '살랑거리는 원단에 정교한 자수 패턴을 추가,우아하고 활용도 높은 데일리 아이템, ',
      },
    ],
  },
  reducer: {},
});

export default bestSlice.reducer;
