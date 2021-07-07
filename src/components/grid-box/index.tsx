import styled from 'styled-components';
import React, { FC } from 'react';

interface Iprops {
 label: string;
 number: number;
}

const GridBox: FC<Iprops> = ({ label, number }) => {
 return (
  <StyleBox>
   <span>{number}</span>
   <LabelWrapper>{label}</LabelWrapper>
  </StyleBox>
 );
};

export default GridBox;

const StyleBox = styled.div`
  border: 0.1rem solid #ccc;
  height: 6rem;
  border-radius: 0.2rem;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 11px;
    height: 3rem;
  }
`;
const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.2rem;
`;
