// import React, { useState } from 'react';

// const App = () => {

//   const[value, setvalue] = useState('');

//   // let x = [10, () => {}]

//   // const [a, setA] = x;

//   // let value = 'Hello world !!!';
//   console.log('Component Update!');

//   return (
//     <div>
//       {/* <button onClick={() => alert(value)}>Click!</button> */}
//       <input type="text"  onChange={e => {
//         // console.log(e.target.value);
//         // value = e.target.value;
//         setvalue(e.target.value)
//       }}/>

//       <h1>{value}</h1>
//       </div>
//   )
// }

// export default App;

// ==============================================================================

import React from 'react'
import { useState } from 'react'
import Dropdown from './components/Dropdown'

const data = [
  {
    id: "1",
    title: "Iphone 15 pro max",
    price: 1500,
    image: "url"
  }
]

const App = () => {
  const [cars, setCars] = useState(
    [
      {
        id: "1", 
        label: "BMW",
        selected: false
      },
      {
        id: "2",
        label: "Mercedes",
        selected: true,
      },
      {
        id: "3",
        label: "Volvo",
        selected: false,
      }
    ]
  );

  const [colors, setColors] = useState(
    [
      {
        id: "1",
        label: "Red",
        selected: false
      },
      {
        id: "2",
        label: "Blue",
        selected: true,
      },
      {
        id: "3",
        label: "Orange",
        selected: false,
      }
    ]
  );

  const handeleLabelChangeCars = (label) => {
    const updateLabels = cars.map(item => ({
      ...item,
      selected: item.id === label.id
    }));

    // const updateLabels = cars.map(item => {
    //   item.selected = item.id === label.id;

    //   return item;
    // })

    setCars(updateLabels);
  }

  const handeleLabelChangeColors = (label) => {
    console.log("handeleLabelChangeColors", label);
  }

  return (
    <div className='container'>
      <Dropdown
        labels={cars}
        onSelect={handeleLabelChangeCars}
      />

      <Dropdown
        labels={colors}
        onSelect={handeleLabelChangeColors}
      />
    </div>
  )
}



export default App