import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, inputValue, handleDelete }) => {
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <ul className={styles.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactsItem}>
          <p className={styles.contactsName}>
            {name}: {number}
          </p>

          <button
            className={styles.contactsBtn}
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
