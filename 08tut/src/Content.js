import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'


const Content = () => {
/*
  This is useState usage part
*/
  const [items, setItems ] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2 Lionel",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3 For Lionel",
    }
  ]);

  const handleCheck = (id) => {
    console.log(`key: ${id}`);
    // const listItems = items.map
    // const listItems = [...items]
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }


  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }
  

    return (
        <main>
          {items.length ? (
              <ul>
                  {items.map((item) => (
                    <li className='item' key={item.id} >
                        <input 
                          type="checkbox"
                          onChange={() => handleCheck(item.id)}
                          checked={item.checked}
                        />
                        <label
                          style= {(item.checked) ? {textDecoration: 'line-through'} : null}
                          onDoubleClick = {() => handleCheck(item.id)}
                        >{item.item}</label>
                        <FaTrashAlt 
                          onClick={ () => handleDelete(item.id)}
                          role='button' 
                          tabIndex="0" 
                        />
                    </li>
                  ))}
              </ul>
           ) : (
            <p style={{marginTop: '2rem'}} >Your list is empty.</p>
           )}
        </main>
    )
}

export default Content;
