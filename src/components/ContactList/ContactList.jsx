import { useSelector, useDispatch } from 'react-redux';
import './ContactList.css'
import PropTypes from 'prop-types';
import { getContacts, getFilter } from 'redux/selectors';
// import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    // const showContacts = contacts.filter(contact => contact.name.includes(filter));

    const dispatch = useDispatch()

    const handleDelete = id => {
        // dispatch(deleteContact(id))
    }

    return(
        <ul className="contactList__unordered-list">
            {/* {showContacts.map(contact => {
                return(
                    <li key={contact.id} className='contactList__unordered-list--item'>
                        {contact.name} : {contact.number}
                        <button className='contactList__unordered-list--button' type='button' id={contact.id} onClick={() => handleDelete(contact.id)}>
                            Delete
                        </button>
                    </li>
                )
            })} */}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    handleDelete: PropTypes.func
}

export default ContactList