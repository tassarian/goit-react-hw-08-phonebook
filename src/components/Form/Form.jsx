import { Button, Input, StyledForm } from './Form.styled';
import { useDispatch } from 'react-redux';
import { addContactThunk } from 'redux/contacts/operations';

export const Form = () => {
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.target;
		const contact = {
			name: form.elements.name.value,
			number: form.elements.number.value,
		};
		dispatch(addContactThunk(contact));
		form.reset();
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<label>name</label>
			<Input
				type="text"
				name="name"
				pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
				title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
				required
			/>
			<label>number</label>
			<Input
				type="tel"
				name="number"
				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
				title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
				required
			/>
			<Button type="submit">Add contact</Button>
		</StyledForm>
	);
};
