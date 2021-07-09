import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CARD_DATA } from '../src/_data/card.data';
import GridBox from '../src/components/grid-box';
import Modal from '../src/components/modal';

export default function Home() {
	// const [suffledTiles, setShuffledTiles]
	const [openModal, setOpenModal] = useState(false);
	const [shuffledTiles, setShuffledTiles] = useState([]);
	const [allSelectedTiles, setSelectedTiles] = useState([]);
	const [winningStreak, setWinningStreaks] = useState({
		rightDiagonal: false,
		leftDiagonal: false,
		horizontal: false,
		vertical: false,
	})
	const [boardTrackingArray, setBoardTrackingArray] = useState([
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
	]);

	useEffect(() => {
		onShuffleTiles();
	}, []);


	/**
		* @description: Reshuffle the position of the tiles
		*/
	const onShuffleTiles = () => {
		let maxTiles = 25;
		let selected = [];
		let base = 0;
		while (base < maxTiles) {
			let randomIndex = Math.floor(Math.random() * 25);
			if (selected.includes(CARD_DATA[randomIndex]) === false) {
				maxTiles--;
				selected.push(CARD_DATA[randomIndex]);
			}
		}
		setSelectedTiles(['Free'])
		setShuffledTiles(selected);
		setBoardTrackingArray([
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
		])
		setWinningStreaks(
			{
				rightDiagonal: false,
				leftDiagonal: false,
				horizontal: false,
				vertical: false,

			})
	};

	/**
		* @description perform actions on click of a tile
		* @param index index of the tiles
		* @param label labels of the tiles
		*/
	const onClickCard = (index: number, label: string) => {
		let row = Math.ceil((index + 1) / 5); //get selected row
		let col = index + 1 - (row - 1) * 5; //get selected column
		//Update the board tracking array
		let copyBoardArray = [...boardTrackingArray];
		if (copyBoardArray[row - 1][col - 1] === 1) {
			copyBoardArray[row - 1][col - 1] = 0;
		} else {
			copyBoardArray[row - 1][col - 1] = 1;
		}
		setBoardTrackingArray(copyBoardArray);
		updateSelectedItems(label);
		//Check winning criteria
		checkWinningCriteria();
	};

	/**
		* @description: Check if winning condition has been met on every selection
		*/
	const checkWinningCriteria = () => {
		let copyBoardArray = [...boardTrackingArray];
		checkRowWins(copyBoardArray);
		checkColumnWins(copyBoardArray);
		checkDiagonalWin(copyBoardArray);
	};

	/**
		* @description| check if the row winning condition has been met
		* @param array
		*/
	const checkRowWins = array => {
		let copyBoardArray = [...array];
		let won = false;
		let rowReducer = (accumulator, currentValue) => accumulator + currentValue;
		if (winningStreak.horizontal === false) {
			copyBoardArray.forEach(row => {
				if (row.reduce(rowReducer) === 5) {
					setWinningStreaks({ ...winningStreak, horizontal: true });
					setOpenModal(true);
				}
			});
		}
		return won;
	};

	/**
		*  @description| check if the row winning condition has been met
		* @param array
		*/
	const checkColumnWins = array => {
		let copyBoardArray = [...array];
		let transposedArray = copyBoardArray[0].map((x, i) =>
			copyBoardArray.map(x => x[i])
		);
		let rowReducer = (accumulator, currentValue) => accumulator + currentValue;
		if (winningStreak.vertical === false) {
			transposedArray.forEach(row => {
				if (row.reduce(rowReducer) === 5) {
					setWinningStreaks({ ...winningStreak, vertical: true });
					setOpenModal(true);
				}
			});
		}
	};


	/**
		* @description| check if the diagonal winning condition has been met
		* @param array
		*/
	const checkDiagonalWin = array => {
		//check diagonal right to left
		let leftBaseNumber = 0;
		let rightBaseNumber = 4;
		let rightDiagonalTotal = 0;
		let leftDiagonalTotal = 0;
		if (winningStreak.leftDiagonal === false) {
			for (let x = 0; x < array.length; x++) {
				leftDiagonalTotal = leftDiagonalTotal + array[x][leftBaseNumber];
				leftBaseNumber++;
				if (leftDiagonalTotal === 5) {
					setWinningStreaks({ ...winningStreak, leftDiagonal: true });
					setOpenModal(true);
				}
			}
		}
		if (winningStreak.rightDiagonal === false) {
			for (let y = 0; y < array.length; y++) {
				rightDiagonalTotal = rightDiagonalTotal + array[y][rightBaseNumber];
				rightBaseNumber--;
				if (rightDiagonalTotal === 5) {
					setWinningStreaks({ ...winningStreak, rightDiagonal: true });
					setOpenModal(true);
				}
			}
		}
	};

	/**
		* @description: Add or remove a selected tiles from the selected list
		* @param label 
		*/
	const updateSelectedItems = label => {
		let copySelectedItems = [...allSelectedTiles];
		if (copySelectedItems.includes(label)) {
			let removedItem = copySelectedItems.filter(entry => entry !== label);
			setSelectedTiles(removedItem);
		} else {
			copySelectedItems.push(label);
			setSelectedTiles(copySelectedItems);
		}
	};

	const onCloseModal = () => {
		setOpenModal(!openModal)
	}

	return (
		<Page>
			<div>
				<Header>Romantic Movie Bingo Card</Header>
			</div>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<StyledButton onClick={onShuffleTiles}>Reshuffle Tiles & Start</StyledButton>
			</div>
			<BoardWrapper>
				<StyleGridLayout>
					{shuffledTiles && shuffledTiles.length > 0
						? shuffledTiles.map((label, index) => {
							return (
								<GridBox
									key={index}
									index={index}
									label={index === 12 ? 'Free' : label}
									onClickCard={onClickCard}
									selectedTiles={allSelectedTiles}
								/>
							);
						})
						: ''}
				</StyleGridLayout>
			</BoardWrapper>
			{openModal && <Modal onShuffleTiles={onShuffleTiles} message={"Bingo Won!"} onCloseModal={onCloseModal} />}
		</Page>
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

const BoardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = styled.h2`
  display: flex;
  justify-content: center;
  font-weight: bold;
  padding: 2rem;
`;

const Page = styled.div`
  background-image: linear-gradient(to right, #ecf9ec, #9fdf9f);
  padding-bottom: 4rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const StyledButton = styled.button`
  height: 2rem;
  width: 10rem;
  color: white;
		cursor: pointer;
  opacity: 0.5;
		padding: 0.5rem;
		border-radius: 0.2rem;
  background-image: linear-gradient(to right, #006600, #003300);
		margin-bottom: 2rem;
`;
