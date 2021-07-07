import styled from "styled-components";
import { CARD_DATA } from "../src/_data/card.data";
import GridBox from "../src/components/grid-box"

export default function Home() {
	return (
		<StyleMainWrapper>
			<StyleGridLayout>
				{CARD_DATA && CARD_DATA.length > 0 ? CARD_DATA.map((label, index) => {
					console.log("label", label, index)
					return <GridBox key={index} label={label} number={5} />
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
