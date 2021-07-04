import styled from "styled-components";

export default function Home() {
	return (
		<div>
			<StyleGridLayout>
				<div>Grid 1</div>
				<div>Grid 2</div>
				<div>Grid 1</div>
				<div>Grid 2</div>
				<div>Grid 1</div>
			</StyleGridLayout>
		</div>
	);
}

const StyleGridLayout = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
`;
