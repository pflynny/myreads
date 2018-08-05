  import React from 'react'

class BookSwitcher extends React.Component {
  state = {
    books: []
  }


  render() {
    // console.log(this.props)
    const { shelf, changeShelf } = this.props
    return (
      <select
        value = {shelf || 'none'}
        onChange = {
          (event) => changeShelf(event.target.value)
        }
      >
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}

export default BookSwitcher