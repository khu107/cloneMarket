import styled from 'styled-components';

export const Grid = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Img = styled.img`
  width: 100%;
`;
export const Item = styled.div`
  cursor: pointer;
  position: relative;
`;
export const Span = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;
