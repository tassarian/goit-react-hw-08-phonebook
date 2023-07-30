import styled from 'styled-components';

export const StyledUserMenu = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;

	align-items: center;

	margin-left: auto;
`;

export const StyledName = styled.p``;

export const Button = styled.button`
	width: max-content;
	padding: 5px 10px;

	border: none;
	border-radius: 5px;
	margin: 0 auto;
	background-color: lightgrey;
	&:active {
		background-color: lightgreen;
	}
`;
