import styled from 'styled-components';
import React, { FC } from 'react';

interface Iprops {
  label: string;
  index: number;
  onClickCard: (index: number, label: string) => void,
  selectedTiles: Array<string>
}

const formatId = (index: number): string => {
  let row = Math.ceil((index + 1) / 5);
  if (index + 1 > 0)
    return `R${row}-T${index + 1}`
}

const GridBox: FC<Iprops> = ({ label, index, onClickCard, selectedTiles }) => {
  return (
    <StyleBox onClick={() => onClickCard(index, label)}>
      <div className={selectedTiles.includes(label) ? 'selected' : ""}>
        <NumberWrapper>
          <span className='number'>{formatId(index)}</span>
        </NumberWrapper>
        <LabelWrapper>
          <span className={selectedTiles.includes(label) ? 'label selected' : "label"}>
            {label}
          </span>
        </LabelWrapper>
      </div>
    </StyleBox>
  );
};

export default GridBox;

const StyleBox = styled.div`
  border: 0.1rem solid #006600;
  height: 6rem;
  border-radius: 0.2rem;
  cursor: pointer;
  .selected{
    color: white;
    opacity: 0.5;
    height: 100%;
    background-image: linear-gradient(to right, #006600,  #003300);
  }
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
   padding: 1rem ;
  }
   @media (max-width: 768px) {
  .label{
   padding: 0.1rem ;
   font-size: 9px;
  }
  }
`;
const NumberWrapper = styled.div`
  display: flex;
  justify-content: end;
  .number{
   padding: 0.2rem;
  }
  @media (max-width: 768px) {
    font-size: 7px;
  }
`;
