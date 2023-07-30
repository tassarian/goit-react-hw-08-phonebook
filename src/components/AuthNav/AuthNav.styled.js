import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledAuthNavList = styled.div`
	margin-left: auto;
	display: flex;
	flex-direction: row;
	gap: 10px;

    align-items: center;
`;

export const AuthNavLink = styled(Link)`
	color: black;
`;
