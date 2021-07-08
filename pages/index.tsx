import React, { useState } from 'react';
import styled from "styled-components";
import { CARD_DATA } from "../src/_data/card.data";
import GridBox from "../src/components/grid-box"

export default function Home() {
	const [boardTrackingArray, setBoardTrackingArray] = useState([
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]]);


	const onClickCard = (index: number) => {
		let row = Math.ceil((index + 1) / 5);  //get selected row
		let col = (index + 1) - (row - 1) * 5;  //get selected column

		//Update the board tracking array
		let copyBoardArray = [...boardTrackingArray];
		copyBoardArray[row - 1][col - 1] = 1;
		setBoardTrackingArray(copyBoardArray)
	}

	return (
		<StyleMainWrapper>
			<StyleGridLayout>
				{CARD_DATA && CARD_DATA.length > 0 ? CARD_DATA.map((label, index) => {
					return <GridBox key={index} index={index} label={label} onClickCard={onClickCard} />
				}) : ""}
			</StyleGridLayout>
		</StyleMainWrapper>
	);
}

const StyleGridLayout = styled.div`
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(5, 1fr);
	grid-column: span 1;
	@media (max-width: 768px) {
				grid-gap: 0.5rem;
 }
`;

const StyleMainWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 4rem;
`;
