import {useState, useEffect} from 'react'

import List from './List'
import Form from './Form'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'Eray',
      phone_number: '0888 888 88 88',
    },
    {
      fullname: 'Aslı',
      phone_number: '0222 222 22 22',
    },
  ])


  useEffect(() => {
    console.log(contacts);
  }, [contacts])

  return (
    <div>
      <List contacts={contacts}/>
      <Form addContact = {setContacts} contacts={contacts} />
    </div>
    
  )
}

export default Contacts