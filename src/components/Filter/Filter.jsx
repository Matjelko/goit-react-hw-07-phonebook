import { useDispatch } from 'react-redux';
import './Filter.css'
import PropTypes from 'prop-types';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
    const dispatch = useDispatch();

    const handleChange = () => {
        const filter = document.querySelector('#filter-input').value

        dispatch(setFilter(filter))
    }

    return (
        <div className="filter__section">
            <p className="filter__paragraph">Find contacts by name</p>
            <input
                id="filter-input"
                className="filter__input"
                type="text"
                name="name"
                title="title"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                onChange={handleChange}
            />
        </div>
    )
}

Filter.propTypes = {
    handleChange: PropTypes.func
}

export default Filter