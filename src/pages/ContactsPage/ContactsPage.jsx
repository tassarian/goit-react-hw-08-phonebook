import { ContactList } from 'components/ContactList/ContactList';
import { Form } from 'components/Form/Form';
import { Section } from 'components/Section/Section';
import { StyledBox } from './ContactsPage.styled';

const ContactsPage = () => {
	return (
		<Section>
			<h2>Contacts</h2>
			<StyledBox>
				<Form />
			</StyledBox>
			<StyledBox>
				<ContactList />
			</StyledBox>
		</Section>
	);
};

export default ContactsPage;
