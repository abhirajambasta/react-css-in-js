import React, { PureComponent } from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

class CreateNewForm extends PureComponent {

  state = {
    inputList: [
      {
        placeholder: 'Name',
        id: 'name',
        value: ''
      },
      {
        placeholder: 'Country',
        id: 'country',
        value: ''
      },
    ]
  };

  onChange = event => {
    const { inputList } = this.state;
    const modifiedInputList = inputList.map(input => {
      const { target } = event;
      if (input.id === target.id) {
        input.value = target.value;
      }
      return input;
    });
    this.setState({
      inputList: modifiedInputList
    });
  }

  createNew = event => {
    event.preventDefault();
    const { createNewItem } = this.props;
    const { inputList } = this.state;
    const formInputData = {};
    inputList.forEach(({id, value}) => {
      formInputData[id] = value;
    });
    createNewItem(formInputData);
  }

  render() {
    const { inputList } = this.state;
    const formValid = inputList.every(item => item.value);
    return (
      <form method="post" onSubmit={this.createNew}>
        {
          inputList.map(({placeholder, value, id }) => (
            <Input
              placeholder={placeholder}
              value={value}
              onChange={this.onChange}
              containerClass='form-input'
              inheritedClass='text-input'
              key={placeholder}
              id={id}
            />
          ))
        }
        <Button type="submit" disabled={!formValid} inheritedClass="submit-button">
          Create
        </Button>
      </form>
    );
  }
}

CreateNewForm.defaultProps = {
  createNewItem: () => {},
}

export default CreateNewForm;
