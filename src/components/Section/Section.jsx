import { PropTypes } from 'prop-types';
import { StyledSection } from './Styled.section';

export const Section = ({ children }) => {
	return <StyledSection>{children}</StyledSection>;
};

Section.propTypes = {
	children: PropTypes.node.isRequired,
};
