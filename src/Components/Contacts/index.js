import {useState, useEffect} from 'react'

import List from './List'
import Form from './Form'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'Eray',
      phone_number: '0888 888 88 88'
    },
    {
      fullname: 'Jordan',
      phone_number: '0222 222 22 22'
    },
    {
      fullname: 'David',
      phone_number: '0444 444 44 44'
    },
    {
      fullname: 'Arthur',
      phone_number: '0443 433 43 43'
    },
  ])


  useEffect(() => {
    console.log(contacts);
  }, [contacts])

  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact = {setContacts} contacts={contacts} />
    </div>
    
  )
}

export default Contacts