import {useState} from 'react'

function List( {contacts} ) {
  const [filterText, setFilterText] = useState("");

  const filteredContacts = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
    (
      item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLocaleLowerCase())
    ))
  })

  console.log("filtered", filteredContacts);

  return (
    <div>

      <input 
      placeholder='Filter Contact' 
      value={filterText} 
      onChange={(e) => setFilterText(e.target.value)}/>

      <ul className='list'>
        {filteredContacts.map((contact, index) => (<li key={index}>{contact.fullname}</li>))}
      </ul>
    </div>
  )
}

export default List