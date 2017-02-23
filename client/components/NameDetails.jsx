import React from 'react'

export default class NameDetails extends React.Component {
  // constructor (props) {
  //   super (props)
  //   this.clickMe = this.clickMe.bind(this)
  // }
  clickMe(index) {
    alert(index)
  }
  render() {
    let details = [{ name: 'manav', age: 21 }, { name: 'pulkit', age: 21 }, { name: 'vibhav', age: 23 }]
    const self = this
    let map = details.map(function (item, index) {
      return (
        <div key={index} onClick={self.clickMe.bind(self,index)}>
          Name: {item.name} <br />
          Age: {item.age} <br /><br />
        </div>
      )
    })
    return (<div>{map}</div>)
  }
}