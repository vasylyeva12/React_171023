import React, {createElement}  from 'react'
import Navbar from './components/Navbar'



const App = () => {

  // let title = createElement(
  //   "h2", { className: "title" }, "This is title!",
  //   createElement(
  //     "span", { className: "text" }, "This is title!"
  //   )
  // );


  // let content = createElement(
  //   "div", { className: "content" },
  //     createElement( "h2", { className: "content__title" }, "Hello world !!!"),
  //     createElement( "p", { className: "content__desc" }, "Lorem ipsum dolor sit amet."),
  // )

  // return content;
const navbarArray = [
  {
    id: '1',
    label: 'Link 1'
  },
  {
    id: '2',
    label: 'Link 2'
  },
  {
    id: '3',
    label: 'Link 3'
  },
  {
    id: '4',
    label: 'Link 4'
  },
]
const handleClickHello = (name) => {
  alert(`Hello,  ${name}`)
}

const handleClick = () => {
  alert(`Hello`)
}

  return (
    // <h2 className='title'>This is Title! <span className='text'>This is Text!</span></h2>

    // <div className="content">
    //     <h2 className='content__title'>Hello world !!!</h2>

    //     <p className='content__desc'>Lorem ipsum dolor sit amet.</p>
    // </div>

    <>
     <Navbar data={navbarArray}/>

     <main>
      <h1><button onClick={()=> handleClickHello('John')}>Show message</button></h1>
      <h1><button onClick={handleClick}>Show message</button></h1>

     </main>

     <footer>
        <p>© 2024 GitHub, Inc.</p>
      </footer>
    </>
     
    
  )
}

export default App







