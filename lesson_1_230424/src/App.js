import React from 'react';

const ListItem = ({title}) => {
  
  return(
    <li className='list-item'>{title}</li>
  )
}

const App = () => {

  let title = "This is first lesson!"
  return (
    <>
      <h2>{title}</h2>
    <ul className='list'>
      <ListItem title="Item 1"/>
      <ListItem title="Item 2"/>
      <ListItem title="Item 3"/>
    </ul>
    </>
  )
}

export default App;