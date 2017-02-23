import React from 'react'
import NameDetails from './NameDetails.jsx'
import Book from './Book.jsx'
import Lesson from './Lesson.jsx'
export default class App extends React.Component {
  render() {
    let lesson = <Lesson />
    return (
      <div >
        <div style={{textAlign: 'center'}}>My first react application</div>
        <NameDetails />
        <Book details={lesson}/>
      </div>
    )
  }
}