import { useState } from "react";
// import { nanoid } from 'nanoid';
import './ContactForm.css'
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
// import { getContacts } from "redux/selectors";
import { addContact } from "redux/operations";
// import { addContact } from "redux/contactsSlice";

const ContactForm = () => {
    const [ name, setName ] = useState('')
    const [ number, setNumber ] = useState('')
    // const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        // const id = nanoid();
        evt.preventDefault();
        const form = evt.target;
        dispatch(addContact(evt.target.elements.name.value));
        form.reset();
        // dispatch(addContact({ id, name, number }))
        // setName('');
        // setNumber('');

        // localStorage.setItem(
        //     'contacts',
        //     JSON.stringify([...contacts, { id, name, number}])
        // )
    }

    return(
        <form onSubmit={handleSubmit}>
            <p className="contactForm__paragraph">Name</p>
            <input
                className = "contactForm__input"
                id="name"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={evt => setName(evt.target.value)}
            />
            <p className="contactForm__paragraph--number">Number</p>
            <input
                className = "contactForm__input"
                id="number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={evt => setNumber(evt.target.value)}
            />
            <button className="contactForm__button" type="submit">Add Contact</button>
        </form>
    )
}

ContactForm.propTypes = {
    handleSubmit: PropTypes.func
}

export default ContactForm