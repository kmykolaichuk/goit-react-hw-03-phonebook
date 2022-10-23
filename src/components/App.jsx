import React from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  onInputChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };

  addContact = data => {
    data.id = nanoid();
    const { contacts } = this.state;
    const checkContact = contacts.find(contact => contact.name === data.name);

    checkContact
      ? alert(`${data.name} is already in the contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }));
  };

  filterContact = () => {
    const { filter, contacts } = this.state;
    const filterContactToLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContactToLowerCase)
    );
  };

  onDeleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => idContact !== contact.id),
    }));
  };

  componentDidMount() {
    const localStorageContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localStorageContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    const filteredContacts = this.filterContact();
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter onInputChange={this.onInputChange} filter={filter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
