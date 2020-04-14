import React, { Component } from 'react';
import { Form, Radio } from 'semantic-ui-react';

class CalculationSelector extends Component {
  state = { value: 'Total' };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className='calculation-selectors'>
        <Form style={{ display: 'flex' }}>
          <Form.Field>
            <Radio
              label='Total'
              name='radioGroup'
              value='Total'
              checked={this.state.value === 'Total'}
              onChange={this.handleChange}
              style={{ marginRight: '15px' }}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Average'
              name='radioGroup'
              value='Average'
              checked={this.state.value === 'Average'}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default CalculationSelector;
