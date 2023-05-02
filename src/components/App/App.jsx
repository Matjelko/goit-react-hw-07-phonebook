import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";

import Filter from "../Filter/Filter";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";

import PropTypes from "prop-types";
import '../../index.css';

const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return(
    <div className="container">
      <h1 className="header--phonebook">Phonebook</h1>
      <ContactForm/>
    
      <h2 className="header-contacts">Contacts</h2>
      <Filter/>
      {isLoading && !error 
        ? <h4>Request in progress...</h4>
        : <ContactList/>
      }
    </div>
  )
}

App.propTypes = {
  loadContacts: PropTypes.func,
}

export default App;
