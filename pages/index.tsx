import React, { useState } from 'react';
import styled from "styled-components";
import { CARD_DATA } from "../src/_data/card.data";
import GridBox from "../src/components/grid-box"

export default function Home() {
	// const [suffledTiles, setShuffledTiles]
	const [winingStreak, setWinningStreak] = useState(0);
	const [boardTrackingArray, setBoardTrackingArray] = useState([
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]]);


	const onClickCard = (index: number) => {
		let row = Math.ceil((index + 1) / 5);  //get selected row
		let col = (index + 1) - (row - 1) * 5;  //get selected column

		//Update the board tracking array
		let copyBoardArray = [...boardTrackingArray];
		if (copyBoardArray[row - 1][col - 1] === 1) {
			copyBoardArray[row - 1][col - 1] = 0;
		} else {
			copyBoardArray[row - 1][col - 1] = 1;
		}
		setBoardTrackingArray(copyBoardArray);

		//Check winning criteria
		checkWinningCriteria();
	}

	/**
		* @description: Check if winning condition has been met on every selection
		*/
	const checkWinningCriteria = () => {
		let copyBoardArray = [...boardTrackingArray];
		checkRowWins(copyBoardArray);
		checkColumnWins(copyBoardArray);
		checkDiagonalWin(copyBoardArray)
	}


	/**
		* @description| check if the row winning condition has been met
		* @param array 
		*/
	const checkRowWins = (array) => {
		let copyBoardArray = [...array];
		let rowReducer = (accumulator, currentValue) => accumulator + currentValue;
		copyBoardArray.forEach(row => {
			if (row.reduce(rowReducer) === 5) {
				setWinningStreak(winingStreak + 1);
			}
		})
	}

	/**
		*  @description| check if the row winning condition has been met
		* @param array 
		*/
	const checkColumnWins = (array) => {
		let copyBoardArray = [...array]
		let transposedArray = copyBoardArray[0].map((x, i) => copyBoardArray.map(x => x[i]))
		checkRowWins(transposedArray);
	}

	/**
		* @description| check if the diagonal winning condition has been met
		* @param array 
		*/
	const checkDiagonalWin = (array) => {
		//check diagonal right to left
		let leftBaseNumber = 0;
		let rightBaseNumber = 4;
		let rightDiagonalTotal = 0;
		let leftDiagonalTotal = 0;
		for (let x = 0; x < array.length; x++) {
			leftDiagonalTotal = leftDiagonalTotal + array[x][rightBaseNumber];
			leftBaseNumber++
		}
		for (let y = 0; y < array.length; y++) {
			console.log("diagonal", rightDiagonalTotal + array[y][rightBaseNumber]);
			rightDiagonalTotal = rightDiagonalTotal + array[y][rightBaseNumber];
			rightBaseNumber--
		}
		if (leftDiagonalTotal === 5 || rightDiagonalTotal === 5) {
			setWinningStreak(winingStreak + 1);
		}
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
