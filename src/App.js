import React from 'react';
import './App.css';
import InputForm from './components/InputForm';
import ContactList from './components/ContactList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      phoneBook: []
    };
  }

  onFormSubmit = async (data) => {
    data.id = this.state.phoneBook.length + 1;
    const updatedBook = [
      ...this.state.phoneBook,
      data
    ];
    this.setState({
      phoneBook: updatedBook
    });
  };

  render() {
    return (
      <div className='App'>
        <InputForm onSubmit={this.onFormSubmit}></InputForm>
        <ContactList contacts={this.state.phoneBook}></ContactList>
      </div>
    );
  }
}

export default App;
