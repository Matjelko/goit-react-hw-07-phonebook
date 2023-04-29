import { useEffect } from "react";
import Filter from "../Filter/Filter";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import PropTypes from "prop-types";
import '../../index.css';
import { useDispatch } from "react-redux";
import { loadContacts } from "redux/actions";

const App = () => {
  const dispatch = useDispatch()

  useEffect (() => {
    const savedContacts = localStorage.getItem("contacts");
    if(savedContacts) {
      dispatch(loadContacts(JSON.parse(savedContacts)))
    }
    else{
      localStorage.setItem('contacts', JSON.stringify([]));
    }
  }, [dispatch])

  return(
    <div className="container">
      <h1 className="header--phonebook">Phonebook</h1>
      <ContactForm/>
    
      <h2 className="header-contacts">Contacts</h2>
      <Filter/>
      <ContactList/>
    </div>
  )
}

App.propTypes = {
  loadContacts: PropTypes.func,
}

export default App;
