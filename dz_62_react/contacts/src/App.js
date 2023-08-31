import './App.css';
import Header from './components/header/header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ContactsTable from './components/table/table';
import FromAdd from './components/form';

function App() {
  const [contacts, setContacts] = useState([]);
  const link = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios.get(link)
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error(`Error getting data: ${error}`);
      })
  }, []);

  const remove = (id) => setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));

  const dataContacts = contacts.map(item => ({...item, key: item.id}));

  let maxId = Math.max(...contacts.map(item => item.id));

  return (
    <div>
      <Header />
      <ContactsTable 
        contacts={dataContacts} 
        key={contacts.id} 
        remove={remove}
      />
      <FromAdd 
        maxId={maxId} 
        setContacts={setContacts} 
        contacts={dataContacts}
      />
    </div>
  );
}

export default App;