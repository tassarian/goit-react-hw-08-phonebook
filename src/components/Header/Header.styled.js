import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
	display: flex;
	flex-direction: row;
	padding: 20px 30px;
	border-bottom: 1px solid darkgrey;
	margin-bottom: 20px;
    align-items: center;
`;

export const StyledNavList = styled.nav`
	display: flex;
	flex-direction: row;
	gap: 10px;
	margin-left: 20px;
`;

export const StyledNavItem = styled(Link)`
	color: black;
`;

export const StyledAuthList = styled.ul``;
