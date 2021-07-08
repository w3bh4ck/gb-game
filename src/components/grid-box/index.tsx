import styled from 'styled-components';
import React, { FC } from 'react';

interface Iprops {
 label: string;
 index: number;
 onClickCard: (index: number) => void
}

const formatId = (index: number): string => {
 let row = Math.ceil((index + 1) / 5);
 if (index + 1 > 0)
  return `R${row}-T${index + 1}`
}

const GridBox: FC<Iprops> = ({ label, index, onClickCard }) => {
 return (
  <StyleBox onClick={() => onClickCard(index)}>
   <NumberWrapper>
    <span className='number'>{formatId(index)}</span>
   </NumberWrapper>
   <LabelWrapper>
    <span className='label'>
     {label}
    </span>
   </LabelWrapper>
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
    .label{
   padding: 0.1rem ;
  }
  }
`;
const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  .label{
   color: #ccc;
   padding: 1rem ;
  }
   @media (max-width: 768px) {
  .label{
   padding: 0.1rem ;
  }
  }
`;
const NumberWrapper = styled.div`
  display: flex;
  justify-content: end;
  .number{
   color: #ccc;
   padding: 0.2rem;
  }
`;
