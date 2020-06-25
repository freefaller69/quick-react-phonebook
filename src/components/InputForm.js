import React from 'react';
import './InputForm.css';

class InputForm extends React.Component {
  initialState = {
    firstName: 'Coder',
    lastName: 'Byte',
    phoneNumber: '8885559999'
  }

  clearState = {
    firstName: '',
    lastName: '',
    phoneNumber: ''
  };

  state = this.initialState;

  handleFormReset = () => {
    this.setState(() => this.clearState)
  }

  onFormSubmit(e) {
    e.preventDefault();
    const firstName = this.state.firstName.trim();
    const lastName = this.state.lastName.trim();
    const phoneNumber = this.state.phoneNumber;

    if (!firstName.length || !lastName.length) {
      alert('First name and last name are required fields.  Please verify entries.');
      return;
    }

    if ((phoneNumber * 1).toString().length !== 10) {
      alert('Please enter a 10 digit number with area code.');
      return;
    }

    this.props.onSubmit(this.state);
    this.handleFormReset();
    
  }

  render() {
    return (
      <div className='InputForm ui segment'>
        <form onSubmit={(event) => this.onFormSubmit(event)} className='ui form'>
          <div className='field'>
            <label>First Name</label>
            <input
              type='text'
              value={this.state.firstName}
              required
              onChange={(e) => this.setState({ firstName: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Last Name</label>
            <input
              type='text'
              value={this.state.lastName}
              required
              onChange={(e) => this.setState({ lastName: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Phone Number</label>
            <input
              type='text'
              value={this.state.phoneNumber}
              required
              onChange={(e) => this.setState({ phoneNumber: e.target.value })}
            />
          </div>
          <button className="ui button" onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default InputForm;
